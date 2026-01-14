import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-[#0a0e0d] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-12 h-12" />
              <span className="text-2xl uppercase tracking-wider">Milsy</span>
            </div>
            <p className="text-gray-400 text-sm">
              The ultimate tactical operations platform for airsoft enthusiasts worldwide.
            </p>
          </div>

          {/* Product */}
          {/* <div>
            <h4 className="mb-4 uppercase tracking-wider text-sm">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#features" className="hover:text-military-green transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-military-green transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-military-green transition-colors">Updates</a></li>
              <li><a href="#" className="hover:text-military-green transition-colors">Beta Program</a></li>
            </ul>
          </div> */}

          {/* Company */}
          <div>
            <h4 className="mb-4 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="privacy-policy" className="hover:text-military-green transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-military-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/privacy-policy" className="hover:text-military-green transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-military-green transition-colors">Terms and Conditions</a></li>
              {/* <li><a href="#" className="hover:text-military-green transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-military-green transition-colors">Disclaimer</a></li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2025 Milsy. All rights reserved.
          </div>

          {/* <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-white/20 hover:border-military-green flex items-center justify-center transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/20 hover:border-military-green flex items-center justify-center transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/20 hover:border-military-green flex items-center justify-center transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/20 hover:border-military-green flex items-center justify-center transition-colors">
              <Youtube size={18} />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}