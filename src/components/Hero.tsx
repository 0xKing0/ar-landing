import { Users, Calendar, MessageSquare } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://team-up-airsoft.lovable.app/assets/hero-airsoft-Bv9G9Qz3.jpg"
          alt="Airsoft tactical team in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Feature Icons - Right Side */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-20">
        <div className="w-12 h-12 border border-military-green/40 hover:border-military-green hover:bg-military-green/10 flex items-center justify-center transition-all cursor-pointer group">
          <Users size={20} className="text-military-green" />
        </div>
        <div className="w-12 h-12 border border-military-green/40 hover:border-military-green hover:bg-military-green/10 flex items-center justify-center transition-all cursor-pointer group">
          <Calendar size={20} className="text-military-green" />
        </div>
        <div className="w-12 h-12 border border-military-green/40 hover:border-military-green hover:bg-military-green/10 flex items-center justify-center transition-all cursor-pointer group">
          <MessageSquare size={20} className="text-military-green" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-military-green/10 border border-military-green/30 mb-8">
          <div className="w-1.5 h-1.5 bg-military-green rounded-full"></div>
          <span className="text-xs uppercase tracking-widest text-military-green">
            The Ultimate Airsoft Platform
          </span>
        </div>
        
        <h1 className="mb-6 max-w-3xl mx-auto">
          <span className="block text-white">DOMINATE</span>
          <span className="block text-military-green">THE FIELD</span>
        </h1>
        
        <p className="text-gray-300 max-w-xl mb-10 mx-auto">
          Build your squad, organize epic events, trade gear, and connect with the airsoft community. Everything you need to elevate your tactical game.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20 justify-center">
          <button className="px-8 py-3.5 bg-military-green hover:bg-military-green-light text-black transition-all uppercase tracking-wider text-sm inline-flex items-center justify-center gap-2 group">
            Join the Mission
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="px-8 py-3.5 border-2 border-gray-600 hover:border-military-green hover:bg-white/5 transition-all uppercase tracking-wider text-sm">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-4xl text-military-green mb-1">15K+</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Active Players</div>
          </div>
          <div>
            <div className="text-4xl text-military-green mb-1">2.5K+</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Teams Registered</div>
          </div>
          <div>
            <div className="text-4xl text-military-green mb-1">800+</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Events Monthly</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-military-green rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}