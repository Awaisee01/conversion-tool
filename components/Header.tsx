"use client";
import { Calculator, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log("User choice:", outcome);
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = (
    <>
      <Link href="/" className="block px-3 py-2 rounded hover:bg-gray-100">
        Home
      </Link>
      <Link href="/about" className="block px-3 py-2 rounded hover:bg-gray-100">
        About
      </Link>
      <Link
        href="/contact"
        className="block px-3 py-2 rounded hover:bg-gray-100"
      >
        Contact
      </Link>
    </>
  );

  return (
    <header className="bg-white shadow-sm border-b fixed w-full z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Universal Converter Logo"
              width={100}
              height={100}
              className="w-[150px] h-[100px]"
              fetchPriority="high"
              priority
              decoding="async"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex space-x-6 text-sm text-gray-700">{navLinks}</nav>
          {showInstall && (
            <button
              onClick={handleInstallClick}
              className="ml-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
            >
              Install App
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-4 py-2 space-y-1 text-gray-700">
            {navLinks}
            {showInstall && (
              <button
                onClick={handleInstallClick}
                className="mt-2 w-full px-3 py-2 text-center bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm "
              >
                Install App
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
