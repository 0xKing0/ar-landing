"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { useRouter } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { push } = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => push('/')}>
            <Logo className="w-10 h-10" />
            <span className="text-xl uppercase tracking-wider">Milsy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#features"
              className="text-sm uppercase tracking-wider text-gray-300 hover:text-military-green transition-colors"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="text-sm uppercase tracking-wider text-gray-300 hover:text-military-green transition-colors"
            >
              How To Join
            </a>
            <a
              href="/#community"
              className="text-sm uppercase tracking-wider text-gray-300 hover:text-military-green transition-colors"
            >
              Testimonials
            </a>
            <a
              href="/#contact"
              className="text-sm uppercase tracking-wider text-gray-300 hover:text-military-green transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 bg-military-green hover:bg-military-green-light text-black transition-colors uppercase tracking-wider text-sm">
              Join
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a
                href="/#features"
                className="text-sm uppercase tracking-wider text-gray-300 hover:text-military-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="/#how-it-works"
                className="text-sm uppercase tracking-wider text-gray-300 hover:text-military-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="/#community"
                className="text-sm uppercase tracking-wider text-gray-300 hover:text-military-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="/#contact"
                className="text-sm uppercase tracking-wider text-gray-300 hover:text-military-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button className="px-6 py-2.5 bg-military-green hover:bg-military-green-light text-black transition-colors uppercase tracking-wider text-sm">
                Join the mission
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
