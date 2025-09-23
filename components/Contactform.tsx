'use client';

import { useState, useRef } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    const form = formRef.current;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/prounitconverters@gmail.com', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Failed to send');

      setSubmitted(true);
      form.reset(); // clear form fields
    } catch (error) {
      alert('Oops! Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:col-span-2">
      <form
        ref={formRef}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
          <input
            type="text"
            id="name"
            name="name"
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
            name="email"    
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            placeholder="Type your message here..."
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-gray-900 text-white py-3 rounded-lg font-medium flex items-center justify-center hover:bg-gray-800 transition-colors`}
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {submitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
            <p className="text-gray-700 mb-6">
              Your message has been successfully sent. We will get back to you within 24-48 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
