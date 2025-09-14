import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About AI Image Generator - Advanced AI-Powered Image Creation',
  description: 'Learn about our cutting-edge AI image generation platform powered by DALL-E, Google Imagen, and FLUX models. Create professional-quality images with advanced artificial intelligence.',
  keywords: ['about AI image generator', 'AI art technology', 'machine learning images', 'artificial intelligence art'],
  openGraph: {
    title: 'About AI Image Generator',
    description: 'Advanced AI-powered image generation platform',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-6">
            About AI Image Generator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering creativity through cutting-edge artificial intelligence and machine learning technology.
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="p-8 backdrop-blur-sm bg-white/10 border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We believe that everyone deserves access to professional-quality image generation tools. Our AI Image Generator 
              democratizes creative content creation by providing free access to the world's most advanced artificial intelligence models.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you're a content creator, marketer, artist, or simply someone who loves to explore creative possibilities, 
              our platform provides the tools you need to bring your imagination to life.
            </p>
          </Card>

          <Card className="p-8 backdrop-blur-sm bg-white/10 border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Advanced AI Technology</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-2">🤖 OpenAI Models</h3>
                <p className="text-gray-300 text-sm">
                  DALL-E 2 and DALL-E 3 for premium-quality, highly detailed image generation with exceptional prompt adherence.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">🧠 Google AI</h3>
                <p className="text-gray-300 text-sm">
                  Imagen 2.0 and 3.0 models providing photorealistic results with advanced text integration capabilities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-300 mb-2">⚡ FLUX Models</h3>
                <p className="text-gray-300 text-sm">
                  State-of-the-art open-source models including FLUX 1.1 Pro for ultra-high quality artistic generation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-300 mb-2">🎨 Stability AI</h3>
                <p className="text-gray-300 text-sm">
                  Stable Diffusion 3 and SDXL models for creative composition and high-resolution image generation.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 backdrop-blur-sm bg-white/10 border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Platform Features</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-white mb-2">24+ Art Styles</h3>
                <p className="text-gray-400 text-sm">From photorealistic to anime, cyberpunk to watercolor</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Multiple Formats</h3>
                <p className="text-gray-400 text-sm">Square, landscape, portrait, and TikTok 9:16 vertical</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Instant Results</h3>
                <p className="text-gray-400 text-sm">High-quality images generated in 10-15 seconds</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 backdrop-blur-sm bg-white/10 border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Privacy & Ethics</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are committed to responsible AI development and user privacy. All images are generated on-demand and we do not 
              store personal data or generated content on our servers beyond the session duration.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our AI models are trained ethically and we continuously work to ensure fair representation and prevent harmful content generation.
            </p>
          </Card>

          <div className="text-center pt-8">
            <Link 
              href="/" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200"
            >
              Start Creating Images
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}