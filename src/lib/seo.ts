import { Metadata } from 'next';

export const siteConfig = {
  name: 'AI Image Generator - Create Stunning Images with AI',
  description: 'Generate professional-quality images using advanced AI models including DALL-E, Google Imagen, and FLUX. Free AI image generator with 20+ artistic styles, multiple aspect ratios, and instant results.',
  url: 'https://your-domain.com', // Replace with your actual domain
  ogImage: 'https://your-domain.com/og-image.jpg',
  keywords: [
    'AI image generator',
    'artificial intelligence art',
    'DALL-E alternative',
    'free AI art generator',
    'text to image AI',
    'AI art creator',
    'digital art generator',
    'AI photo generator',
    'machine learning art',
    'automated image creation',
    'AI-powered design tool',
    'creative AI assistant',
    'neural network art',
    'computer vision art',
    'generative AI images'
  ],
  authors: [
    {
      name: 'AI Image Generator Team',
      url: 'https://your-domain.com/about',
    },
  ],
  creator: 'AI Image Generator',
  publisher: 'AI Image Generator',
  robots: 'index, follow',
  language: 'en-US',
  category: 'Technology',
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  robots: siteConfig.robots,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@yourtwitterhandle', // Replace with your Twitter handle
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteConfig.url,
  },
  category: siteConfig.category,
  classification: 'AI Image Generation Tool',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'AI Image Generator',
    'application-name': 'AI Image Generator',
    'msapplication-TileColor': '#7c3aed',
    'theme-color': '#7c3aed',
  },
};