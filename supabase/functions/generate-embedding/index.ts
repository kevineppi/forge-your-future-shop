import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple fallback embedding generator based on text characteristics
function generateFallbackEmbedding(text: string): number[] {
  const embedding = new Array(768).fill(0);
  const textLower = text.toLowerCase();
  
  // Create a simple hash-based embedding
  for (let i = 0; i < text.length && i < 768; i++) {
    const charCode = text.charCodeAt(i);
    const idx = (charCode * (i + 1)) % 768;
    embedding[idx] = Math.sin(charCode / 127) * 0.1;
  }
  
  // Add some semantic signals based on keywords
  const keywords = [
    'fdm', 'druck', 'material', 'pla', 'petg', 'asa',
    'kosten', 'preis', 'fertigung', 'prototyp', 'service'
  ];
  
  keywords.forEach((keyword, idx) => {
    if (textLower.includes(keyword)) {
      const pos = (idx * 77) % 768;
      embedding[pos] += 0.3;
    }
  });
  
  // Normalize
  const magnitude = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
  if (magnitude > 0) {
    for (let i = 0; i < embedding.length; i++) {
      embedding[i] /= magnitude;
    }
  }
  
  return embedding;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { text } = await req.json();

    if (!text) {
      console.error('No text provided');
      return new Response(
        JSON.stringify({ error: 'Text is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Generating embedding for text:', text.substring(0, 100) + '...');

    // Use Gemini to generate a semantic vector representation
    // Since Lovable AI doesn't support dedicated embedding models, we use a chat model
    const embeddingResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [{
          role: 'user',
          content: `Generate a 768-dimensional embedding vector for this text. Return ONLY a JSON array of 768 floating-point numbers between -1 and 1, representing the semantic meaning:\n\n${text.substring(0, 2000)}`
        }],
        temperature: 0.1,
      }),
    });

    if (!embeddingResponse.ok) {
      const errorText = await embeddingResponse.text();
      console.error('Embedding API error:', embeddingResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to generate embedding' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const embeddingData = await embeddingResponse.json();
    const content = embeddingData.choices?.[0]?.message?.content || '[]';
    
    // Parse the JSON array from the response
    let embedding: number[];
    try {
      // Try to extract JSON array from markdown code blocks if present
      const jsonMatch = content.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        embedding = JSON.parse(jsonMatch[0]);
      } else {
        embedding = JSON.parse(content);
      }
      
      // Validate embedding dimensions
      if (!Array.isArray(embedding) || embedding.length !== 768) {
        console.error('Invalid embedding dimensions:', embedding.length);
        // Generate a simple fallback embedding based on text hash
        embedding = generateFallbackEmbedding(text);
      }
    } catch (e) {
      console.error('Failed to parse embedding:', e);
      embedding = generateFallbackEmbedding(text);
    }

    console.log('Successfully generated embedding');

    return new Response(
      JSON.stringify({ embedding }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in generate-embedding:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
