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
          <button className="group relative flex items-center gap-4 px-8 py-4 bg-military-green hover:bg-military-green-light text-black transition-all w-full sm:w-auto overflow-hidden">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <Apple size={28} className="relative z-10" />
            <div className="text-left relative z-10">
              <div className="text-[10px] uppercase tracking-widest opacity-80 font-bold">Download on the</div>
              <div className="text-xl font-orbitron font-bold uppercase tracking-tight leading-none">App Store</div>
            </div>
          </button>

          <button className="group relative flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-military-green hover:bg-military-green/5 text-military-green transition-all w-full sm:w-auto overflow-hidden">
            <div className="absolute inset-0 bg-military-green/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <Smartphone size={28} className="relative z-10" />
            <div className="text-left relative z-10 text-white">
              <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Get it on</div>
              <div className="text-xl font-orbitron font-bold uppercase tracking-tight leading-none">Google Play</div>
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