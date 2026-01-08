import { Apple, Smartphone } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#0a0e0d] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-military-green blur-[150px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block px-4 py-2 bg-military-green/20 border border-military-green mb-6 uppercase tracking-widest text-sm">
          Ready to Deploy?
        </div>
        
        <h2 className="mb-6">Join the Tactical Revolution</h2>
        
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Download Milsy today and experience the ultimate airsoft command center. 
          Available on iOS and Android.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="flex items-center gap-3 px-8 py-4 bg-black border-2 border-white/30 hover:border-military-green hover:bg-white/5 transition-colors w-full sm:w-auto justify-center">
            <Apple size={24} />
            <div className="text-left">
              <div className="text-xs text-gray-400">Download on the</div>
              <div className="text-lg">App Store</div>
            </div>
          </button>
          <button className="flex items-center gap-3 px-8 py-4 bg-black border-2 border-white/30 hover:border-military-green hover:bg-white/5 transition-colors w-full sm:w-auto justify-center">
            <Smartphone size={24} />
            <div className="text-left">
              <div className="text-xs text-gray-400">Get it on</div>
              <div className="text-lg">Google Play</div>
            </div>
          </button>
        </div>

        <div className="text-sm text-gray-500">
          Free to download • No credit card required • Join 10,000+ players
        </div>
      </div>
    </section>
  );
}