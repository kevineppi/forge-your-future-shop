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
    const { message, conversationHistory, sessionId } = await req.json();

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
    const systemPrompt = `Sie sind ein professioneller 3D-Druck Berater für ekdruck.at.

KRITISCHE ANFORDERUNGEN:
1. KONTEXT BEACHTEN: Sie erhalten die gesamte Gesprächshistorie. Merken Sie sich Informationen aus vorherigen Nachrichten (z.B. bereits genannte Maße, Materialien)
2. MAXIMALE KÜRZE: Antworten in 1-2 kurzen Sätzen (max. 120 Zeichen wenn möglich)
3. KEINE Links im Text erwähnen - stattdessen strukturierte Actions zurückgeben
4. Professioneller Sie-Ton, präzise Aussagen
5. KEINE TECHNISCHEN DRUCKDETAILS: Der Kunde will kaufen, nicht selbst drucken! Keine Erklärungen zu Drucktemperaturen, Baukammern, etc.
6. FOKUS AUF SERVICE: Bei Materialfragen → Direkter Call-to-Action zum Angebot

PREISKALKULATION (bei Bedarf):
- Volumen = L×B×H / 1.000.000
- Material: PLA 0,20€/g | PETG 0,32€/g | ASA 0,28€/g | PA12 1,00€/g
- Komplexität: Einfach ×1,0 | Mittel ×1,2 | Komplex ×1,4 | Überhänge ×1,5
- Beispiel 25×25×10cm PETG: ~200€

ANTWORT-FORMAT (JSON):
{
  "answer": "Kurze präzise Antwort in 1-2 Sätzen",
  "actions": [
    {"label": "Kostenrechner nutzen", "url": "/kostenrechner", "icon": "calculator"},
    {"label": "Angebot anfordern", "url": "/#contact", "icon": "contact"}
  ]
}

ACTIONS-REGELN:
- Immer wenn Preisfragen: Kostenrechner-Button + Kontakt-Button
- Immer wenn individuelle Details fehlen oder Materialfragen: Kontakt-Button
- Bei allgemeinen Materialfragen: Material-Guide-Button + Kontakt-Button
- Bei konkreten Projektfragen zu Material: NUR Kontakt-Button
- Max. 2 Actions pro Antwort

BEISPIELE GUTE ANTWORTEN:
- "ASA ist perfekt für Outdoor-Anwendungen! Gerne erstellen wir Ihnen ein individuelles Angebot." + [Angebot anfordern Button]
- "PETG eignet sich hervorragend für funktionale Teile. Lassen Sie uns die Details besprechen!" + [Angebot anfordern Button]

${context ? `\n=== KB ===\n${context}\n=== ENDE ===\n` : ''}`;

    console.log('Generating AI response...');

    // Build messages array with conversation history
    const messages = [
      { role: 'system', content: systemPrompt }
    ];

    // Add conversation history if available (excluding the current message as it will be added separately)
    if (conversationHistory && conversationHistory.length > 0) {
      // Add previous messages for context
      messages.push(...conversationHistory);
    }
    
    // Add current message
    messages.push({ role: 'user', content: message });

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: messages,
        temperature: 0.1,
        max_tokens: 250,
        response_format: { type: 'json_object' }
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
    const rawContent = aiData.choices[0].message.content;

    console.log('Successfully generated response');

    // Parse JSON response
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(rawContent);
    } catch (e) {
      // Fallback if JSON parsing fails
      console.warn('Failed to parse JSON response, using raw content');
      parsedResponse = {
        answer: rawContent,
        actions: []
      };
    }

    // Save chat log to database
    try {
      const { error: logError } = await supabase
        .from('chat_logs')
        .insert({
          session_id: sessionId || 'unknown',
          user_message: message,
          assistant_message: parsedResponse.answer || rawContent,
          had_context: matches && matches.length > 0,
          sources: sources.slice(0, 3),
          actions: parsedResponse.actions || [],
          user_agent: req.headers.get('user-agent') || 'unknown'
        });
      
      if (logError) {
        console.error('Failed to save chat log:', logError);
        // Don't fail the request if logging fails
      }
    } catch (logErr) {
      console.error('Error saving chat log:', logErr);
    }

    return new Response(
      JSON.stringify({ 
        answer: parsedResponse.answer || rawContent,
        actions: parsedResponse.actions || [],
        sources: sources.slice(0, 3),
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
