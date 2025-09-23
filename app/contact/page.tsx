import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import ContactForm from '@/components/Contactform';

export const metadata: Metadata = {
  title: 'Contact Us | Pro Converter',
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
    title: 'Contact Pro Converter',
    description:
      'Have questions, feedback, or requests? Reach out to Universal Converter through our contact form.',
    url: 'https://prounitconverters.com//contact',
    siteName: 'Universal Converter',
    type: 'website'
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-10 leading-relaxed">
            Have questions, feedback, or requests for new conversion tools? Reach out directly below.
          </p>
        </div>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
