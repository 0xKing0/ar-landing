export function Community() {
  const testimonials = [
    {
      quote: "Milsy transformed how our team coordinates. We've never been more organized on the field.",
      author: "Marcus Chen",
      role: "Team Leader, Viper Squad",
      avatar: "MC"
    },
    {
      quote: "The marketplace feature is incredible. I've bought and sold gear with zero hassle.",
      author: "Sarah Williams",
      role: "Active Player, 3 Years",
      avatar: "SW"
    },
    {
      quote: "Finding local games has never been easier. The event system is a game-changer.",
      author: "Jake Thompson",
      role: "Field Organizer",
      avatar: "JT"
    }
  ];

  return (
    <section id="community" className="py-24 bg-gradient-to-b from-[#0d1410] to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1760427144206-27d38562044f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJzb2Z0JTIwdGVhbSUyMGdhbWV8ZW58MXx8fHwxNzY2OTA5Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Community"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-military-green/20 border border-military-green mb-4 uppercase tracking-widest text-sm">
            Join the Movement
          </div>
          <h2 className="mb-4">Trusted by Players Worldwide</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what the community is saying about their Milsy experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#0a0e0d]/80 backdrop-blur-sm border border-white/10 p-8"
            >
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-military-green"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-military-green flex items-center justify-center">
                  <span className="text-sm text-military-black">{testimonial.avatar}</span>
                </div>
                <div>
                  <div>{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}