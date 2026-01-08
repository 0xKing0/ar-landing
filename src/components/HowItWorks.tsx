import { UserPlus, Target, Zap } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Create Your Profile',
    description: 'Sign up and build your operator profile. Set your loadout preferences, experience level, and tactical preferences.'
  },
  {
    icon: Target,
    number: '02',
    title: 'Join or Form a Squad',
    description: 'Connect with existing teams or create your own. Invite members, assign roles, and start building your tactical unit.'
  },
  {
    icon: Zap,
    number: '03',
    title: 'Deploy & Dominate',
    description: 'Find games, coordinate with your team, track performance, and level up your airsoft experience.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0d1410] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-military-green blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-military-green/20 border border-military-green mb-4 uppercase tracking-widest text-sm">
            Deployment Protocol
          </div>
          <h2 className="mb-4">Get Started in Minutes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Three simple steps to revolutionize your airsoft experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-military-green to-transparent"></div>
              )}

              <div className="relative bg-[#0a0e0d] border border-white/10 p-8 hover:border-military-green transition-all duration-300">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-military-green flex items-center justify-center">
                  <span className="text-2xl text-military-black">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-military-green/20 border border-military-green flex items-center justify-center mb-6">
                  <step.icon size={32} className="text-military-green" />
                </div>

                <h3 className="mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}