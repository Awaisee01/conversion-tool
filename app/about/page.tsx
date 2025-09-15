import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Universal Converter',
  description:
    'Learn more about Universal Converter — your all-in-one platform for fast, accurate, and reliable unit conversions. Over 100 professional tools for students, professionals, and everyday users.',
  keywords: [
    'unit converter',
    'universal converter',
    'about universal converter',
    'engineering tools',
    'online conversion tools',
    'metric converter',
    'measurement converter'
  ],
  openGraph: {
    title: 'About Universal Converter',
    description:
      'Universal Converter offers 100+ professional conversion tools for students, engineers, researchers, and everyday users.',
    url: 'https://yourdomain.com/about',
    siteName: 'Universal Converter',
    type: 'website'
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Universal Converter</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Universal Converter</strong> is your all-in-one platform for fast, accurate, and reliable conversions. 
          Whether you’re a student, engineer, researcher, or everyday user, our collection of 
          <span className="font-semibold"> 100+ professional tools</span> makes it simple to convert values across a wide 
          range of categories — from basic units to complex engineering measurements.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          We designed Universal Converter to save you time and eliminate the hassle of searching 
          multiple sites for different conversion needs. With an intuitive interface, advanced 
          search, and clear categorization, finding the right tool is quick and effortless.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our mission is to provide a reliable, user-friendly hub for all types of conversions, 
          helping individuals and professionals make accurate decisions with confidence. 
          From academic projects to industrial calculations, Universal Converter is built to 
          support your work.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Why Choose Us?</h3>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
          <li>✔ Over 100 professional conversion tools</li>
          <li>✔ Clean, modern, and ad-friendly design</li>
          <li>✔ Accurate formulas and verified data sources</li>
          <li>✔ Designed for students, professionals, and everyday users</li>
          <li>✔ Accessible anytime, anywhere on all devices</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Get in Touch</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Have suggestions, feedback, or requests for new conversion tools? 
          We’d love to hear from you. Please reach out via our{' '}
          <a href="/contact" className="text-gray-900 font-medium hover:underline">Contact Page</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
