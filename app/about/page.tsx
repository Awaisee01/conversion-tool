import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Pro Unit Converters',
  description:
    'Learn more about ProUnitConverters.com — your ultimate destination for fast, accurate, and free online unit conversion tools. Convert length, weight, temperature, time, currency, and more with ease.',
  keywords: [
    'unit converter',
    'Pro Unit Converters',
    'about Pro Unit Converters',
    'online conversion tools',
    'metric converter',
    'measurement converter',
    'currency converter',
    'engineering converter'
  ],
  openGraph: {
    title: 'About Pro Unit Converters',
    description:
      'ProUnitConverters.com offers fast, accurate, and reliable tools for unit, currency, and measurement conversions. Optimized for students, engineers, and everyday users.',
    url: 'https://prounitconverters.com/about',
    siteName: 'Pro Unit Converters',
    type: 'website'
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us – ProUnitConverters.com</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to <strong>ProUnitConverters.com</strong>, your ultimate destination for fast, 
          accurate, and free online unit conversion tools. Our mission is simple: to make everyday 
          calculations easier, whether you’re a student, engineer, business professional, or just 
          someone looking to convert units quickly online.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          At ProUnitConverters, we provide a wide range of conversion calculators that cover everything 
          from length, weight, temperature, time, and energy to digital storage, pressure, volume, speed, 
          and more. With our all-in-one unit converter, you don’t need multiple apps or websites—everything 
          is available in one place, optimized for desktop, tablet, and mobile devices.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">We focus on three things:</h3>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
          <li><strong>Accuracy</strong> – Every calculation is designed to deliver precise results you can rely on.</li>
          <li><strong>Speed</strong> – Our instant online converters provide answers in real-time, saving you time and effort.</li>
          <li><strong>Accessibility</strong> – 100% free, no sign-ups, no hidden costs—just straightforward unit conversion online.</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-6 mb-4">
          Whether you need a metric converter, imperial converter, or currency exchange calculator, 
          ProUnitConverters.com is here to help. We’ve optimized our tools with the latest technology 
          to ensure a smooth user experience, with clean layouts and SEO-friendly converters designed 
          for global use.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Why Choose ProUnitConverters.com?</h3>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
          <li>✔ Free, reliable, and fast unit conversion website</li>
          <li>✔ Covers scientific, academic, engineering, and daily life conversions</li>
          <li>✔ Constantly updated with the latest conversion formulas</li>
          <li>✔ User-friendly interface for students, teachers, researchers, and professionals</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-6 mb-4">
          At ProUnitConverters.com, we believe that knowledge should be accessible to everyone. 
          That’s why we’re building the web’s most comprehensive online conversion platform.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Start converting today with <strong>ProUnitConverters.com</strong> — 
          the easiest way to convert any unit online.
        </p>
      </main>
      <Footer />
    </div>
  );
}
