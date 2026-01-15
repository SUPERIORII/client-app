import { Footer, Navbar } from "@/components/layout/index";
import { Monitor, HandCoins, HelpCircle, Quote } from "lucide-react";

const teamMembers = [
  { name: "Dr. Sarah Chen", role: "Climate Scientist", initials: "SC" },
  { name: "Marcus Thompson", role: "Conservation Lead", initials: "MT" },
  { name: "Amara Okonkwo", role: "Community Director", initials: "AO" },
  { name: "James Rivera", role: "Wildlife Expert", initials: "JR" },
  { name: "Priya Sharma", role: "Education Coordinator", initials: "PS" },
];

const testimonials = [
  {
    name: "Abraham Dukuly",
    role: "Software Engineer",
    quote:
      "The work Ecorise does is transformative. Their dedication to sustainability and community empowerment is truly inspiring.",
  },
  {
    name: "Maria Santos",
    role: "Environmental Advocate",
    quote:
      "Supporting Ecorise has been one of the most fulfilling decisions. They make real, measurable impact in communities.",
  },
  {
    name: "David Kim",
    role: "Corporate Sponsor",
    quote:
      "Transparent, effective, and passionate. Ecorise embodies everything we look for in a conservation partner.",
  },
];

const stats = [
  { value: "1,800+", label: "Lives Impacted" },
  { value: "$2.4M", label: "Funds Raised" },
  { value: "45+", label: "Collaborators" },
  { value: "120+", label: "Communities Served" },
];

function AboutUSPage() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen bg-linear-to-b from-emerald-50 to-white pt-16">
        {/* Hero Section */}
        <section className="bg-linear-to-r from-emerald-500 to-teal-600 py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">About Ecorise</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-95">
              Building a sustainable future through education, conservation, and
              community action. Together, we're creating lasting change for our
              planet.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          {/* Mission Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Our Mission
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              Ecorise Global Initiatives is committed to creating a sustainable
              future through education, conservation, and action to promote
              climate resilience in agriculture. We empower individuals and
              communities to reduce pollution, fight climate change, support
              wildlife, and preserve natural ecosystems.
            </p>
          </section>

          {/* Team Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Meet Our Team of Experts
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-32 h-32 bg-linear-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-orange-500 font-semibold uppercase text-sm tracking-wide">
                  What We Do
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                  Making a Real Difference
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Through targeted programs and community partnerships, we deliver
                sustainable solutions that create lasting environmental and
                social impact.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Monitor size={24} className="text-orange-500" />
                  </div>
                  <span className="font-medium text-gray-700">
                    24/7 Support & Monitoring
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <HandCoins size={24} className="text-amber-500" />
                  </div>
                  <span className="font-medium text-gray-700">
                    Transparent Donations
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <HelpCircle size={24} className="text-emerald-500" />
                  </div>
                  <span className="font-medium text-gray-700">
                    Proven Success Rate
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-3xl font-bold text-emerald-600 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="bg-linear-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-4">
                Join Us in Creating Change
              </h2>
              <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
                Together, we can build a better, more sustainable future. Your
                support makes a real difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg">
                  Donate Now
                </button>
                <button className="bg-white hover:bg-gray-50 text-emerald-600 font-semibold py-3 px-8 rounded-full transition-colors shadow-lg">
                  Get Involved
                </button>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <span className="text-orange-500 font-semibold uppercase text-sm tracking-wide">
                Testimonials
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                What Our Supporters Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
                >
                  <Quote
                    size={32}
                    className="text-orange-400 opacity-20 absolute top-6 right-6"
                    fill="currentColor"
                  />
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-linear-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-emerald-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUSPage;
