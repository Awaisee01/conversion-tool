import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Universal Converter. All rights reserved.</p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-900">Terms</Link>
              <Link href="/support" className="hover:text-gray-900">Support</Link>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
