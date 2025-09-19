import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Universal Converter',
  description:
    'Get in touch with Universal Converter. Share your questions, feedback, or requests for new conversion tools through our contact form.',
  keywords: [
    'contact universal converter',
    'unit converter support',
    'converter feedback',
    'online conversion tools help',
    'universal converter contact page'
  ],
  openGraph: {
    title: 'Contact Universal Converter',
    description:
      'Have questions, feedback, or requests? Reach out to Universal Converter through our contact form.',
    url: 'https://yourdomain.com/contact',
    siteName: 'Universal Converter',
    type: 'website'
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-10 leading-relaxed">
            Have questions, feedback, or requests for new conversion tools? 
            Fill out the form below or reach us directly through our contact details.
          </p>
        </div>

        <div>
          {/* Contact Form */}
          <div className="md:col-span-2">
            <form className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Type your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
