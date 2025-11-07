import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="w-full border-b px-6 py-4 bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/images/logos/onetribe-amagi-logo.png"
            className="h-12 w-12 object-contain"
            alt="OneTribe Ama-Gi Logo"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-amber-700">OneTribe</span>
            <span className="text-xs text-gray-600 -mt-1">AMA-GI</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Discord Quick Access */}
          <a
            href="https://discord.gg/8CTbKaNd"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>Join Discord</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/"><a className="text-gray-700 hover:text-green-700 font-medium">Home</a></Link>
            <Link href="/products"><a className="text-gray-700 hover:text-green-700 font-medium">Products</a></Link>
            <Link href="/afrorobics"><a className="text-gray-700 hover:text-teal-600 font-medium">AfroRobics</a></Link>
            <Link href="/ai-hero-generation"><a className="text-gray-700 hover:text-purple-600 font-medium">AI Hero Program</a></Link>
            <Link href="/ai-ethics-workshop"><a className="text-gray-700 hover:text-indigo-600 font-medium">AI Ethics</a></Link>
            <Link href="/uhuru-academy"><a className="text-gray-700 hover:text-purple-700 font-medium">Uhuru Academy</a></Link>
            <Link href="/faq"><a className="text-gray-700 hover:text-green-700 font-medium">FAQ</a></Link>
            <Link href="/contact"><a className="text-gray-700 hover:text-teal-600 font-medium">Contact</a></Link>
          </nav>

          <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
            <Button className="hidden md:inline-flex bg-gradient-to-r from-teal-600 to-amber-600 hover:from-teal-700 hover:to-amber-700">
              <Calendar className="mr-2 h-4 w-4" />
              Book Session
            </Button>
          </a>
          <Link href="/products">
            <Button className="hidden md:inline-flex bg-green-700 hover:bg-green-800">Shop Now</Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col py-4">
            <Link href="/">
              <a className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
            </Link>
            <Link href="/products">
              <a className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Products
              </a>
            </Link>
            <Link href="/afrorobics">
              <a className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-teal-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                AfroRobics
              </a>
            </Link>
            <Link href="/ai-hero-generation">
              <a className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                AI Hero Program
              </a>
            </Link>
            <Link href="/ai-ethics-workshop">
              <a className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-indigo-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                AI Ethics Workshop
              </a>
            </Link>
            <Link href="/uhuru-academy">
              <a className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Uhuru Academy
              </a>
            </Link>
            <Link href="/faq">
              <a className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-teal-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </Link>
            <div className="px-6 py-3 space-y-3">
              <a
                href="https://calendly.com/onetribeheru/connection"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-amber-600 hover:from-teal-700 hover:to-amber-700 text-white px-4 py-3 rounded-lg transition-colors font-semibold w-full"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Wellness Session</span>
              </a>
              <a
                href="https://discord.gg/8CTbKaNd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg transition-colors font-semibold w-full"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span>Join Discord</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

