import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Pro Unit Converters Logo"
              width={100}
              height={100}
              className="rounded-md "
            />
            <span className="text-lg font-semibold text-black">
              Pro Unit Converters
            </span>
          </div>
          <p className="text-sm leading-relaxed text-black">
            Convert any unit instantly with ProUnitConverters.com! Free online
            measurement converter for length, weight, temperature, time,
            currency, and more. Fast, accurate, and mobile-friendly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-black font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-gray-800">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-800">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-gray-800">
                Support
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-800">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-800">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-black font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-800">
            Have questions or need assistance? Reach out to us at:
          </p>
          <p className="text-sm mt-2 text-black font-medium">
            prounitconverters@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Pro Unit Converters. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
