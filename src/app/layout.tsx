import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  title: {
    default: "AI Image Generator - Create Stunning Images with AI | Free DALL-E Alternative",
    template: "%s | AI Image Generator"
  },
  description: "Free AI image generator using DALL-E, Google Imagen, and FLUX models. Create professional-quality images with 20+ artistic styles, TikTok format, and instant results. No signup required.",
  keywords: [
    "AI image generator", "free AI art", "DALL-E alternative", "text to image AI", 
    "AI art generator", "artificial intelligence images", "machine learning art", 
    "TikTok image creator", "social media content", "digital art generator",
    "AI photo generator", "creative AI tools", "automated image creation"
  ],
  authors: [{ name: "AI Image Generator Team", url: "https://your-domain.com/about" }],
  creator: "AI Image Generator",
  publisher: "AI Image Generator",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "AI Image Generator",
    title: "AI Image Generator - Create Stunning Images with AI",
    description: "Free AI image generator using DALL-E, Google Imagen, and FLUX models. Create professional-quality images instantly.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Image Generator - Create Stunning Images with AI",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Replace with your Twitter handle
    creator: "@yourtwitterhandle",
    title: "AI Image Generator - Free AI Art Creation",
    description: "Create stunning images with AI using DALL-E, Google Imagen, and FLUX models. Free, fast, and professional quality.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://your-domain.com",
    languages: {
      "en-US": "https://your-domain.com",
    },
  },
  category: "Technology",
  classification: "AI Image Generation Platform",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-search-console-verification-code", // Add your verification code
    other: {
      "msvalidate.01": "your-bing-verification-code", // Add Bing verification
      "yandex-verification": "your-yandex-verification-code", // Add Yandex verification
    },
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "AI Image Generator",
    "application-name": "AI Image Generator",
    "msapplication-TileColor": "#7c3aed",
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "theme-color": "#7c3aed",
  },
};

// Structured Data for Rich Snippets
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "AI Image Generator",
  "description": "Free AI image generator using advanced machine learning models",
  "url": "https://your-domain.com",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "category": "Free"
  },
  "creator": {
    "@type": "Organization",
    "name": "AI Image Generator Team",
    "url": "https://your-domain.com/about"
  },
  "featureList": [
    "Multiple AI Models (DALL-E, Google Imagen, FLUX)",
    "20+ Artistic Styles",
    "TikTok 9:16 Format Support",
    "Full-Screen Preview",
    "Image Download",
    "Generation History"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Structured Data for Rich Snippets */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://replicate.delivery" />
        
        {/* DNS prefetch for faster loading */}
        <link rel="dns-prefetch" href="//oi-server.onrender.com" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      
      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            {/* Navigation Header */}
            <nav className="relative z-20 border-b border-white/10 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <a href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Image Generator
                  </a>
                  <div className="hidden md:flex space-x-6">
                    <a href="/" className="text-gray-300 hover:text-white transition-colors">Generator</a>
                    <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                  </div>
                </div>
              </div>
            </nav>

            <main className="relative z-10">
              {children}
            </main>

            {/* Footer */}
            <footer className="relative z-20 border-t border-white/10 backdrop-blur-sm mt-16">
              <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-white font-semibold mb-4">AI Image Generator</h3>
                    <p className="text-gray-400 text-sm">
                      Create stunning images with advanced AI technology. Free, fast, and professional quality.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-4">Product</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a href="/" className="text-gray-400 hover:text-white transition-colors">AI Generator</a></li>
                      <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                      <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">AI Models</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-4">Support</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                      <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                      <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-white/10 mt-8 pt-8 text-center">
                  <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} AI Image Generator. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}