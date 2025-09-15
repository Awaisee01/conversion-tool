import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Universal Converter',
  description:
    'Review the Terms & Conditions for using Universal Converter. Learn about acceptable use, limitations of liability, intellectual property rights, and more.',
  keywords: [
    'terms and conditions',
    'user agreement',
    'converter terms',
    'universal converter policies',
    'terms of service'
  ],
  openGraph: {
    title: 'Terms & Conditions | Universal Converter',
    description:
      'Read the Terms & Conditions for Universal Converter. Understand your rights and responsibilities while using our services.',
    url: 'https://yourdomain.com/terms',
    siteName: 'Universal Converter',
    type: 'website'
  }
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Welcome to Universal Converter. By using our website and tools, you agree to comply with the following Terms & Conditions. 
          Please read them carefully before accessing or using our services.
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Universal Converter, you agree to these Terms & Conditions and our Privacy Policy. 
              If you do not agree, please discontinue use of our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Use of Services</h2>
            <p>
              Our tools are provided for informational and educational purposes only. 
              You agree not to misuse the site, including attempting unauthorized access, 
              distributing malware, or using the tools for unlawful purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Intellectual Property</h2>
            <p>
              All content, design, and functionality of Universal Converter are protected by intellectual property laws. 
              You may not copy, distribute, or reproduce any part of the site without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Disclaimer of Warranties</h2>
            <p>
              The site and its tools are provided “as is” without warranties of any kind. 
              We do not guarantee that the conversions will always be accurate, error-free, or available without interruption.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Limitation of Liability</h2>
            <p>
              Universal Converter will not be liable for any damages resulting from the use of our site or tools, 
              including but not limited to data loss, errors, or service interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Third-Party Links</h2>
            <p>
              Our site may contain links to third-party websites. We are not responsible for the content, policies, 
              or practices of these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Changes to Terms</h2>
            <p>
              We may update these Terms & Conditions at any time. Updates will be posted on this page, 
              and continued use of the site indicates acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please visit our{' '}
              <a href="/contact" className="text-gray-900 font-medium hover:underline">Contact Page</a>.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
