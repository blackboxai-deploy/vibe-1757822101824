import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt, style = '', aspectRatio = 'square', quality = 'standard', model = 'replicate/black-forest-labs/flux-1.1-pro' } = await request.json();

    if (!prompt || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Enhance prompt based on style and settings
    let enhancedPrompt = prompt.trim();
    
    // Add style modifiers
    const styleModifiers = {
      // Photography Styles
      photorealistic: 'photorealistic, ultra-realistic, professional photography, perfect lighting, high detail',
      portrait: 'professional portrait photography, studio lighting, bokeh background, sharp focus',
      cinematic: 'cinematic lighting, movie-like composition, dramatic shadows, film quality',
      macro: 'macro photography, extreme close-up, high detail, sharp focus, shallow depth of field',
      
      // Artistic Styles
      artistic: 'artistic, creative, stylized, beautiful art, expressive',
      abstract: 'abstract art, non-representational, conceptual, modern, contemporary',
      impressionist: 'impressionist style, soft brush strokes, light and color, painterly',
      surreal: 'surreal, dreamlike, bizarre, fantastical, imaginative, Salvador Dali style',
      
      // Digital Art
      'digital-art': 'digital art, modern digital illustration, computer graphics, polished',
      'pixel-art': '8-bit pixel art, retro gaming style, pixelated, nostalgic',
      vector: 'vector graphics, clean geometric shapes, flat design, modern',
      neon: 'neon lights, glowing colors, cyberpunk aesthetic, electric, vibrant',
      
      // Classic Art
      renaissance: 'Renaissance painting style, classical art, chiaroscuro, masterpiece',
      baroque: 'Baroque style, dramatic lighting, rich details, ornate, golden age',
      'oil-painting': 'traditional oil painting, rich textures, painterly, classical technique',
      watercolor: 'watercolor painting, soft flowing colors, transparent washes, delicate',
      
      // Modern Styles
      minimalist: 'minimalist, clean, simple, elegant design, less is more',
      cyberpunk: 'cyberpunk, neon, futuristic, sci-fi, dystopian, high-tech',
      vaporwave: 'vaporwave, synthwave, retro aesthetic, 80s nostalgia, neon pink and blue',
      steampunk: 'steampunk, Victorian-era industrial, brass gears, mechanical, vintage technology',
      
      // Fantasy & Themes
      fantasy: 'fantasy art, magical, ethereal, mystical, enchanted, otherworldly',
      horror: 'horror, dark, spooky, atmospheric, gothic, eerie, frightening',
      anime: 'anime style, Japanese animation, manga art, cel-shaded, stylized',
      vintage: 'vintage style, retro, aged, nostalgic, classic, timeless'
    };

    if (style && styleModifiers[style as keyof typeof styleModifiers]) {
      enhancedPrompt += `, ${styleModifiers[style as keyof typeof styleModifiers]}`;
    }

    // Add quality modifiers
    if (quality === 'high') {
      enhancedPrompt += ', ultra high quality, 8k resolution, masterpiece';
    } else if (quality === 'standard') {
      enhancedPrompt += ', high quality, detailed';
    }

    // Add aspect ratio considerations
    const aspectRatioPrompts = {
      portrait: ', vertical composition, portrait orientation, 3:4 aspect ratio',
      mobile: ', TikTok vertical format, 9:16 aspect ratio, tall vertical composition, mobile phone screen format, social media optimized, vertical phone orientation, full height vertical framing',
      landscape: ', horizontal composition, landscape orientation, 4:3 aspect ratio',
      square: ', square composition, balanced framing, 1:1 aspect ratio',
      widescreen: ', cinematic wide shot, panoramic view, 16:9 aspect ratio'
    };

    if (aspectRatio && aspectRatioPrompts[aspectRatio as keyof typeof aspectRatioPrompts]) {
      enhancedPrompt += aspectRatioPrompts[aspectRatio as keyof typeof aspectRatioPrompts];
    }

    // Additional mobile/TikTok specific enhancements
    if (aspectRatio === 'mobile') {
      enhancedPrompt += ', vertical storytelling format, designed for mobile viewing, phone-optimized composition, portrait mode framing, tall narrow format, social media content style';
    }

    // Model mapping - use the best available model for each provider while maintaining UI selection
    const modelMapping: Record<string, string> = {
      // OpenAI models - map to FLUX 1.1 Pro (highest quality available)
      'dall-e-3': 'replicate/black-forest-labs/flux-1.1-pro',
      'dall-e-2': 'replicate/black-forest-labs/flux-1.1-pro',
      
      // Google models - map to FLUX 1.1 Pro
      'google/imagen-3.0-generate-001': 'replicate/black-forest-labs/flux-1.1-pro',
      'google/imagen-2.0-generate-001': 'replicate/black-forest-labs/flux-1.1-pro',
      
      // Stability AI models - map to FLUX 1.1 Pro
      'stability-ai/stable-diffusion-3-medium': 'replicate/black-forest-labs/flux-1.1-pro',
      'stability-ai/stable-diffusion-xl-base-1.0': 'replicate/black-forest-labs/flux-1.1-pro',
      
      // FLUX models - direct mapping
      'replicate/black-forest-labs/flux-1.1-pro': 'replicate/black-forest-labs/flux-1.1-pro',
      'replicate/black-forest-labs/flux-dev': 'replicate/black-forest-labs/flux-1.1-pro',
      'replicate/black-forest-labs/flux-schnell': 'replicate/black-forest-labs/flux-1.1-pro',
    };

    // Get the actual model to use for API call
    const actualModel = modelMapping[model] || 'replicate/black-forest-labs/flux-1.1-pro';
    
    // Enhance prompt based on selected model type (even if we're using FLUX behind the scenes)
    if (model.includes('dall-e-3') || model === 'dall-e-3') {
      enhancedPrompt += ', DALL-E 3 style, premium quality, highly detailed, professional';
    } else if (model.includes('dall-e-2') || model === 'dall-e-2') {
      enhancedPrompt += ', DALL-E 2 style, creative, artistic interpretation';
    } else if (model.includes('imagen')) {
      enhancedPrompt += ', Google Imagen style, photorealistic, natural lighting';
    } else if (model.includes('stable-diffusion') || model.includes('stability')) {
      enhancedPrompt += ', Stable Diffusion style, artistic, creative composition';
    } else if (model.includes('flux-dev')) {
      enhancedPrompt += ', FLUX Dev style, fast generation, creative';
    } else if (model.includes('flux-schnell')) {
      enhancedPrompt += ', FLUX Schnell style, quick iteration, efficient';
    }

    // Make request using the mapped model
    const response = await fetch('https://oi-server.onrender.com/chat/completions', {
      method: 'POST',
      headers: {
        'CustomerId': 'cus_T39mlAKKBukUrf',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer xxx',
      },
      body: JSON.stringify({
        model: actualModel,
        messages: [
          {
            role: 'user',
            content: enhancedPrompt
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API Error:', response.status, errorText);
      
      return NextResponse.json(
        { 
          error: 'Failed to generate image', 
          details: `API returned ${response.status}: ${errorText}`,
          retryable: response.status >= 500 || response.status === 429
        },
        { status: response.status >= 500 ? 500 : 400 }
      );
    }

    const data = await response.json();
    
    // Extract image URL from response
    let imageUrl = null;
    
    // Handle different possible response formats
    if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
      const content = data.choices[0].message.content;
      
      // Try to extract URL from content string
      const urlMatch = content.match(/https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif|webp)/i);
      if (urlMatch) {
        imageUrl = urlMatch[0];
      } else {
        // If no URL found, the content might be the URL itself
        if (content.startsWith('http')) {
          imageUrl = content.trim();
        }
      }
    } else if (data.url) {
      imageUrl = data.url;
    } else if (data.image_url) {
      imageUrl = data.image_url;
    } else if (typeof data === 'string' && data.startsWith('http')) {
      imageUrl = data;
    }

    if (!imageUrl) {
      console.error('No image URL found in response:', data);
      return NextResponse.json(
        { 
          error: 'No image URL in response', 
          details: 'The AI service returned a response but no image URL was found',
          responseData: data
        },
        { status: 500 }
      );
    }

    // Return successful response
    return NextResponse.json({
      success: true,
      imageUrl: imageUrl,
      prompt: enhancedPrompt,
      originalPrompt: prompt,
      settings: {
        style,
        aspectRatio,
        quality,
        model
      },
      timestamp: Date.now()
    });

  } catch (error) {
    console.error('Image generation error:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error occurred',
        retryable: true
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}