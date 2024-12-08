'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering interactive elements until mounted
  if (!mounted) {
    return (
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-text-secondary/10">
        <div className="max-w-content mx-auto px-4 h-header flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Image src="/logo.svg" alt="Codeium Logo" width={120} height={32} priority />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-text-secondary/10">
      <div className="max-w-content mx-auto px-4 h-header flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Image src="/logo.svg" alt="Codeium Logo" width={120} height={32} priority />
          <nav className="hidden tabletM:flex gap-6">
            {['Products', 'Enterprise', 'Pricing', 'Blog', 'Resources'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-text-secondary hover:text-text-primary transition-colors text-body"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="hidden mobileL:block text-text-primary hover:text-accent transition-colors text-body"
          >
            Sign in
          </Link>
          <Link 
            href="/get-started" 
            className="bg-accent hover:bg-accent-dark text-background px-4 py-2 rounded-full transition-colors text-body font-medium"
          >
            Get Started
          </Link>
          <button 
            className="tabletM:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-header bg-background/95 backdrop-blur-sm tabletM:hidden">
          <nav className="flex flex-col items-center gap-6 p-8">
            {['Products', 'Enterprise', 'Pricing', 'Blog', 'Resources'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-text-secondary hover:text-text-primary transition-colors text-h2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
