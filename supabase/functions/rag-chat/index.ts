import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    if (!message) {
      console.error('No message provided');
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!LOVABLE_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Missing required environment variables');
      return new Response(
        JSON.stringify({ error: 'Service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    console.log('Searching knowledge base with text search...');

    // Step 2: Search knowledge base using PostgreSQL full-text search
    const { data: matches, error: searchError } = await supabase
      .from('knowledge_base')
      .select('*')
      .or(`title.ilike.%${message}%,content.ilike.%${message}%`)
      .eq('is_active', true)
      .limit(5);

    if (searchError) {
      console.error('Knowledge base search error:', searchError);
      return new Response(
        JSON.stringify({ error: 'Failed to search knowledge base' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Found ${matches?.length || 0} relevant knowledge base entries`);

    // Step 3: Build context from matches
    let context = '';
    const sources: any[] = [];

    if (matches && matches.length > 0) {
      context = matches.map((match: any) => 
        `[${match.category}] ${match.title}:\n${match.content}`
      ).join('\n\n---\n\n');

      sources.push(...matches.map((match: any) => ({
        title: match.title,
        category: match.category,
        url: match.page_url,
      })));
    }

    // Step 4: Generate response using Lovable AI with context
    const systemPrompt = `Du bist ein hilfreicher 3D-Druck Assistent für ekdruck.at.

WICHTIGE REGELN:
- Antworte NUR basierend auf den bereitgestellten Informationen aus der Knowledge Base
- Wenn du die Antwort nicht in der Knowledge Base findest, sage dem Benutzer, dass du diese Information nicht hast und empfehle, das Kontaktformular zu nutzen
- Gib KEINE erfundenen Informationen an
- Verweise auf die entsprechenden Seiten wenn relevant
- Sei präzise, freundlich und professionell
- Antworte auf Deutsch

${context ? `\n=== KNOWLEDGE BASE CONTEXT ===\n${context}\n=== ENDE CONTEXT ===\n` : '\nACHTUNG: Keine relevanten Informationen in der Knowledge Base gefunden. Sage dem Benutzer, dass du diese Information nicht hast.\n'}`;

    console.log('Generating AI response...');

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.3,
        max_tokens: 800,
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI API error:', aiResponse.status, errorText);
      
      if (aiResponse.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: 'Zu viele Anfragen. Bitte versuchen Sie es in einem Moment erneut.',
            rateLimited: true 
          }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: 'Failed to generate response' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const aiData = await aiResponse.json();
    const answer = aiData.choices[0].message.content;

    console.log('Successfully generated response');

    return new Response(
      JSON.stringify({ 
        answer,
        sources: sources.slice(0, 3), // Top 3 sources
        hasContext: matches && matches.length > 0
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in rag-chat:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
