import Link from 'next/link';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Terms of Service - AI Image Generator Usage Terms',
  description: 'Terms of service for our AI image generation platform. Understand usage rights, content policies, and legal terms for AI-generated images.',
  keywords: ['terms of service', 'AI image terms', 'usage policy', 'content rights', 'AI art terms'],
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our AI image generation service.
          </p>
        </div>

        <Card className="p-8 backdrop-blur-sm bg-white/10 border-white/20">
          <p className="text-gray-300 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using the AI Image Generator service, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
              <p className="leading-relaxed mb-4">
                AI Image Generator is a web-based platform that uses artificial intelligence models to generate images from text descriptions. 
                Our service includes:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access to multiple AI models (DALL-E, Google Imagen, FLUX, Stability AI)</li>
                <li>Various artistic styles and customization options</li>
                <li>Different aspect ratios including TikTok format (9:16)</li>
                <li>Image download and sharing capabilities</li>
                <li>Generation history and gallery features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p className="leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use the service only for lawful purposes</li>
                <li>Not generate harmful, offensive, or inappropriate content</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to reverse engineer or abuse the service</li>
                <li>Provide accurate information when contacting support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Prohibited Content</h2>
              <p className="leading-relaxed mb-4">You may not use our service to generate:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Illegal, harmful, or offensive content</li>
                <li>Content that violates intellectual property rights</li>
                <li>Personal information or private data of individuals</li>
                <li>Content intended to deceive, mislead, or harm others</li>
                <li>Spam, malware, or malicious content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property and Usage Rights</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong>Generated Images:</strong> You retain rights to images you generate using our service, subject to the terms 
                  and conditions of the underlying AI model providers.
                </p>
                <p className="leading-relaxed">
                  <strong>Commercial Use:</strong> You may use generated images for personal and commercial purposes, but you are 
                  responsible for ensuring compliance with applicable laws and third-party rights.
                </p>
                <p className="leading-relaxed">
                  <strong>Platform Rights:</strong> We retain all rights to our platform, software, and service infrastructure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Service Availability</h2>
              <p className="leading-relaxed">
                We strive to maintain high service availability but cannot guarantee uninterrupted access. The service may be 
                temporarily unavailable due to maintenance, updates, or technical issues. We reserve the right to modify or 
                discontinue features with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Privacy and Data Protection</h2>
              <p className="leading-relaxed">
                Your privacy is important to us. Please review our <Link href="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</Link> 
                to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Our service is provided "as is" without warranties. We are not liable for any damages arising from the use of 
                our service, including but not limited to direct, indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Modifications to Terms</h2>
              <p className="leading-relaxed">
                We may update these terms from time to time. Significant changes will be communicated through our website. 
                Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
              <p className="leading-relaxed">
                For questions about these terms, please contact us at <Link href="/contact" className="text-purple-400 hover:text-purple-300">our contact page</Link> 
                or email legal@yourdomain.com.
              </p>
            </section>
          </div>
        </Card>

        <div className="text-center pt-8">
          <Link 
            href="/" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200"
          >
            Back to AI Image Generator
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}