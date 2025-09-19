import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HelpCircle, MessageSquare } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | Universal Converter',
  description:
    'Find support for Universal Converter. Browse FAQs or reach out through our contact page if you need further assistance.',
  keywords: [
    'support',
    'help center',
    'FAQ',
    'universal converter support',
    'converter assistance',
    'conversion tools help'
  ],
  openGraph: {
    title: 'Support | Universal Converter',
    description:
      'Need help with Universal Converter? Browse FAQs or contact our team for assistance.',
    url: 'https://yourdomain.com/support',
    siteName: 'Universal Converter',
    type: 'website'
  }
};

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Support</h1>
        <p className="text-gray-700 mb-10 leading-relaxed max-w-3xl">
          Need help with Universal Converter? You can browse our FAQs or use the contact form 
          on our site to send us a message. We’re here to assist you!
        </p>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-gray-700" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-white border border-gray-200 rounded-lg p-4">
              <summary className="font-medium text-gray-900 cursor-pointer">
                How accurate are the conversion tools?
              </summary>
              <p className="text-gray-600 mt-2">
                Our tools are built using standard conversion formulas and are highly accurate. 
                However, always double-check critical calculations before professional use.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4">
              <summary className="font-medium text-gray-900 cursor-pointer">
                Do I need to create an account to use the site?
              </summary>
              <p className="text-gray-600 mt-2">
                No account is required. All tools are free and accessible without registration.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4">
              <summary className="font-medium text-gray-900 cursor-pointer">
                Can I request a new conversion tool?
              </summary>
              <p className="text-gray-600 mt-2">
                Yes! You can request a new tool through our contact form, and our team will 
                consider adding it to Universal Converter.
              </p>
            </details>
          </div>
        </section>

        {/* Contact Support Note */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-gray-700" /> Need More Help?
          </h2>
          <p className="text-gray-700">
            If your question isn’t answered here, please use the contact form on our website 
            and our team will get back to you as soon as possible.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
