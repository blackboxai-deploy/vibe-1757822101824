import Link from 'next/link';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Privacy Policy - AI Image Generator Data Protection & Privacy',
  description: 'Comprehensive privacy policy for our AI image generation platform. Learn how we protect your data, handle AI-generated content, and ensure user privacy.',
  keywords: ['privacy policy', 'data protection', 'AI image privacy', 'user data security'],
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. Learn how we protect your data.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8 backdrop-blur-sm bg-white/10 border-white/20">
            <p className="text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  <strong>Prompts and Generated Content:</strong> We temporarily process the text prompts you submit to generate images. 
                  These prompts are sent to our AI providers for processing but are not permanently stored on our servers.
                </p>
                <p>
                  <strong>Usage Data:</strong> We may collect anonymous usage statistics such as the number of images generated, 
                  popular styles, and performance metrics to improve our service.
                </p>
                <p>
                  <strong>Technical Data:</strong> We collect standard web analytics data including IP addresses, browser type, 
                  device information, and session data for security and optimization purposes.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <div className="text-gray-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>To generate AI images based on your prompts</li>
                  <li>To improve our AI models and service quality</li>
                  <li>To provide customer support and technical assistance</li>
                  <li>To analyze usage patterns and optimize performance</li>
                  <li>To prevent abuse and ensure service security</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Storage and Retention</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  <strong>No Permanent Storage:</strong> We do not permanently store your prompts or generated images on our servers. 
                  Images are generated on-demand and served directly from our AI providers.
                </p>
                <p>
                  <strong>Local Storage:</strong> Your browser may store generated images locally for your convenience (gallery history). 
                  This data remains on your device and can be cleared at any time.
                </p>
                <p>
                  <strong>Session Data:</strong> Temporary session data is automatically deleted after 24 hours of inactivity.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We use the following third-party AI providers to generate images:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>OpenAI (DALL-E):</strong> Subject to OpenAI's privacy policy and terms</li>
                  <li><strong>Google AI (Imagen):</strong> Subject to Google's privacy policy and terms</li>
                  <li><strong>Replicate (FLUX):</strong> Subject to Replicate's privacy policy and terms</li>
                  <li><strong>Stability AI:</strong> Subject to Stability AI's privacy policy and terms</li>
                </ul>
                <p>
                  Please review the privacy policies of these providers as they may process your prompts according to their own terms.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Analytics</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We use minimal cookies and analytics to improve user experience:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Essential cookies for basic functionality</li>
                  <li>Analytics cookies to understand usage patterns (anonymized)</li>
                  <li>Preference cookies to remember your settings</li>
                </ul>
                <p>
                  You can disable cookies in your browser settings, though this may affect some functionality.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <div className="text-gray-300 space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access any personal data we may have about you</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of analytics and non-essential cookies</li>
                  <li>Contact us about privacy concerns</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Data Security</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We implement appropriate security measures to protect your data, including:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>HTTPS encryption for all data transmission</li>
                  <li>Secure API endpoints with authentication</li>
                  <li>Regular security audits and updates</li>
                  <li>Minimal data collection and retention policies</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Email: privacy@yourdomain.com</li>
                  <li>Contact Form: <Link href="/contact" className="text-purple-400 hover:text-purple-300">Contact Page</Link></li>
                </ul>
              </div>
            </section>
          </Card>

          <div className="text-center">
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
    </div>
  );
}