import { Users, Calendar, ShoppingBag, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Team Management',
    description: 'Build and manage your squad with comprehensive roster tools, role assignments, and performance tracking.',
    image: 'https://images.unsplash.com/photo-1760427144206-27d38562044f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJzb2Z0JTIwdGVhbSUyMGdhbWV8ZW58MXx8fHwxNzY2OTA5Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Calendar,
    title: 'Event Coordination',
    description: 'Discover local games, organize custom events, and manage RSVPs with integrated scheduling tools.',
    image: 'https://images.unsplash.com/photo-1758618851241-00caf38fa0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJzb2Z0JTIwYXJlbmElMjBmaWVsZHxlbnwxfHx8fDE3NjY5MDk2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: ShoppingBag,
    title: 'Gear Marketplace',
    description: 'Buy, sell, and trade airsoft equipment with verified community members in a secure marketplace.',
    image: 'https://images.unsplash.com/photo-1704278483976-9cca15325bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMHRhY3RpY2FsJTIwZ2VhcnxlbnwxfHx8fDE3NjY4NTg2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: MessageSquare,
    title: 'Real-time Messaging',
    description: 'Stay connected with team chat, direct messaging, and tactical comms during live operations.',
    image: 'https://images.unsplash.com/photo-1760427144856-e406737f5b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJzb2Z0JTIwdGFjdGljYWwlMjBwbGF5ZXJ8ZW58MXx8fHwxNzY2OTA5Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black to-[#0d1410]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-military-green/20 border border-military-green mb-4 uppercase tracking-widest text-sm">
            Mission-Critical Features
          </div>
          <h2 className="mb-4">Everything Your Squad Needs</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From team coordination to gear management, Milsy provides all the tools 
            for tactical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-[#0a0e0d] border border-white/10 hover:border-military-green transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e0d] via-[#0a0e0d]/60 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-military-green flex items-center justify-center">
                  <feature.icon size={28} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}