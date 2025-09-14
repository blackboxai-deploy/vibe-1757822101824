"use client";

import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEOHead({ 
  title = "AI Image Generator - Create Stunning Images with AI",
  description = "Free AI image generator using DALL-E, Google Imagen, and FLUX models. Create professional-quality images with 20+ artistic styles instantly.",
  canonical = "https://your-domain.com",
  ogImage = "/og-image.jpg"
}: SEOHeadProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Image Generator",
    "description": description,
    "url": canonical,
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "AI Image Generation",
      "Multiple Art Styles",
      "TikTok Format Support",
      "Full-Screen Preview",
      "Free to Use"
    ],
    "screenshot": `${canonical}/og-image.jpg`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  return (
    <Head>
      {/* Enhanced Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      <meta name="bingbot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      
      {/* Language and Geographic */}
      <meta name="language" content="en-US" />
      <meta name="geo.region" content="US" />
      <meta name="geo.country" content="US" />
      
      {/* Content Classification */}
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      
      {/* Technical SEO */}
      <meta name="revisit-after" content="1 days" />
      <meta name="expires" content="never" />
      <meta name="pragma" content="no-cache" />
      <meta name="cache-control" content="no-cache" />
      
      {/* Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    </Head>
  );
}