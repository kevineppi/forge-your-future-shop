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

    console.log('Searching knowledge base...');

    // Search using individual terms to handle special characters better
    // Extract meaningful keywords from the message
    const keywords = message.toLowerCase()
      .split(/[\s,\.]+/) // Split on spaces, commas, dots
      .filter(word => word.length > 2) // Only words with 3+ chars
      .slice(0, 5); // Max 5 keywords
    
    console.log('Search keywords:', keywords);
    
    let matches: any[] = [];
    
    if (keywords.length > 0) {
      // Search for each keyword in title or content
      for (const keyword of keywords) {
        const { data, error } = await supabase
          .from('knowledge_base')
          .select('*')
          .eq('is_active', true)
          .or(`title.ilike.%${keyword}%,content.ilike.%${keyword}%`)
          .limit(3);
        
        if (!error && data) {
          // Add unique matches
          data.forEach(item => {
            if (!matches.find(m => m.id === item.id)) {
              matches.push(item);
            }
          });
        }
      }
      
      // Limit to top 5 matches
      matches = matches.slice(0, 5);
    }
    
    const searchError = null; // No error if we got here

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
    const systemPrompt = `Du bist ein präziser 3D-Druck Experte für ekdruck.at, einen professionellen 3D-Druckservice in Österreich.

KRITISCHE REGELN FÜR ANTWORTEN:
1. KÜRZE: Halte Antworten auf 2-4 Sätze. Nur das Wichtigste.
2. PRÄZISION: Nur konkrete, faktische Informationen. Keine Floskeln oder Füllwörter.
3. LINKS: Erwähne die passenden Unterseiten NUR wenn sie DIREKT zur Frage passen. Nicht bei jeder Antwort Links einfügen.
4. FOKUS: Beantworte exakt die gestellte Frage, nicht mehr.

INHALTLICHE REGELN:
- Bevorzuge IMMER Informationen aus der bereitgestellten Knowledge Base
- Wenn keine KB-Informationen: Nutze allgemeines 3D-Druck Fachwissen, aber weise darauf hin
- Bei Preisfragen: Gib Richtwerte aus KB, empfehle aber Kontaktformular für exaktes Angebot
- Antworte auf Deutsch

${context ? `\n=== KNOWLEDGE BASE VON EKDRUCK.AT ===\n${context}\n=== ENDE KNOWLEDGE BASE ===\n` : '\nKEINE KB-INFORMATIONEN: Nutze allgemeines Fachwissen, weise auf fehlende ekdruck.at-Details hin.\n'}`;

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
        temperature: 0.2,
        max_tokens: 400,
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
