import { Mail } from 'lucide-react';

export function Contact() {
    return (
        <section id='contact' className="py-16 bg-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-military-green blur-[120px]"></div>
            </div>

            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-military-green/10 border border-military-green/30 mb-6">
                    <div className="w-1.5 h-1.5 bg-military-green rounded-full"></div>
                    <span className="text-xs uppercase tracking-widest text-military-green">
                        Join the Mission
                    </span>
                </div>

                <h2 className="text-3xl font-orbitron font-bold text-white mb-4 uppercase">
                    Stay in the Loop
                </h2>

                <p className="text-gray-400 mb-8 text-sm">
                    Get updates on new features, events, and tactical gear drops.
                </p>

                <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                    <div className="relative flex-1 px-4">
                        <Mail size={18} className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-12 pr-4 py-3 bg-military-black border border-military-green/30 text-white placeholder-gray-500 focus:border-military-green focus:outline-none transition-colors text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-military-green hover:bg-military-green-light text-black font-bold uppercase tracking-wide text-sm transition-colors"
                    >
                        Join Us
                    </button>
                </form>
            </div>
        </section>
    );
}
