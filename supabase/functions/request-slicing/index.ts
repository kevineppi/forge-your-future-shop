import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SlicingRequest {
  jobId: string;
  fileUrl: string;
  fileName: string;
  material: string;
  estimatedTimeHours: number;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const slicingServiceUrl = Deno.env.get('SLICING_SERVICE_URL'); // External microservice URL
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const { jobId, fileUrl, fileName, material, estimatedTimeHours }: SlicingRequest = await req.json();
    
    console.log(`[Slicing Request] Job ${jobId}: ${fileName}`);
    
    // Update job status to processing
    await supabase
      .from('slicing_jobs')
      .update({ status: 'processing' })
      .eq('id', jobId);
    
    // If slicing service is not configured, mark as failed with helpful message
    if (!slicingServiceUrl) {
      console.warn('[Slicing Service] URL not configured');
      
      await supabase
        .from('slicing_jobs')
        .update({ 
          status: 'failed',
          error_message: 'Slicing service not configured. Deploy microservice and set SLICING_SERVICE_URL.'
        })
        .eq('id', jobId);
      
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Slicing service not configured yet' 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Call external slicing microservice
    const slicingResponse = await fetch(slicingServiceUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileUrl,
        fileName,
        settings: {
          material,
          layerHeight: 0.2, // mm
          infill: 20, // %
          printSpeed: 60, // mm/s
          wallThickness: 1.2, // mm (3 perimeters x 0.4mm)
        }
      })
    });
    
    if (!slicingResponse.ok) {
      throw new Error(`Slicing service error: ${slicingResponse.statusText}`);
    }
    
    const slicingResult = await slicingResponse.json();
    
    // Update job with calculated results
    await supabase
      .from('slicing_jobs')
      .update({ 
        status: 'completed',
        calculated_time_hours: slicingResult.printTimeHours,
        metadata: {
          filamentGrams: slicingResult.filamentUsed,
          layers: slicingResult.layers,
          estimatedVsActual: {
            estimated: estimatedTimeHours,
            actual: slicingResult.printTimeHours,
            difference: Math.abs(estimatedTimeHours - slicingResult.printTimeHours)
          }
        }
      })
      .eq('id', jobId);
    
    console.log(`[Slicing Complete] Job ${jobId}: ${slicingResult.printTimeHours}h`);
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        calculatedTimeHours: slicingResult.printTimeHours 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('[Slicing Error]', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
