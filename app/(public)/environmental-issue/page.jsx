"use client";
import { Navbar, Footer } from "@/components/layout";
import {
  CloudRain,
  Trees,
  Wind,
  Droplets,
  Trash2,
  Sprout,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

const issues = [
  {
    icon: CloudRain,
    title: "Climate Change",
    description:
      "Rising temperatures threaten agriculture and livelihoods. We implement climate-smart farming and renewable energy solutions.",
    color: "from-red-500 to-orange-500",
    impact: "Affects 2.5M+ people in Liberia",
  },
  {
    icon: Trees,
    title: "Deforestation",
    description:
      "Illegal logging destroys habitats and accelerates climate change. We protect forests through community-led conservation.",
    color: "from-emerald-500 to-green-600",
    impact: "30% forest loss in 20 years",
  },
  {
    icon: Wind,
    title: "Air Pollution",
    description:
      "Harmful emissions damage health and ecosystems. We promote clean energy and sustainable transportation alternatives.",
    color: "from-slate-500 to-gray-600",
    impact: "7M deaths globally per year",
  },
  {
    icon: Droplets,
    title: "Water Scarcity",
    description:
      "Limited access to clean water impacts health and agriculture. We build wells and implement water conservation systems.",
    color: "from-blue-500 to-cyan-600",
    impact: "40% of Liberians lack clean water",
  },
  {
    icon: Trash2,
    title: "Waste Management",
    description:
      "Improper waste disposal pollutes land and water. We establish recycling programs and waste reduction initiatives.",
    color: "from-amber-500 to-yellow-600",
    impact: "2B tons of waste produced yearly",
  },
  {
    icon: Sprout,
    title: "Biodiversity Loss",
    description:
      "Species extinction threatens ecosystem balance. We protect endangered wildlife and restore natural habitats.",
    color: "from-teal-500 to-emerald-600",
    impact: "1M species at risk of extinction",
  },
];

export default function EnvironmentalIssuesPage() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen bg-slate-50 pt-16">
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <AlertCircle size={16} />
              <span>Critical Environmental Challenges</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Issues We're
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-400">
                Fighting Together
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From climate change to biodiversity loss, these environmental
              challenges demand urgent action. Discover how we're making a
              difference in Liberia and beyond.
            </p>
          </div>
        </section>

        {/* Issues Grid */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-8">
            {issues.map((issue, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className={`shrink-0 w-16 h-16 bg-linear-to-br ${issue.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <issue.icon className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {issue.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <AlertCircle size={14} />
                        <span>{issue.impact}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {issue.description}
                  </p>

                  <button className="flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all group-hover:text-green-700">
                    Learn Our Solutions
                    <ArrowRight size={18} />
                  </button>
                </div>

                <div className={`h-2 bg-linear-to-r ${issue.color}`}></div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Our Multi-Faceted Approach
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  We tackle environmental issues through education, community
                  engagement, and sustainable solutions that create lasting
                  impact.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      label: "Education & Awareness",
                      desc: "Empowering communities with environmental knowledge",
                    },
                    {
                      label: "Direct Action",
                      desc: "Implementing practical solutions on the ground",
                    },
                    {
                      label: "Policy Advocacy",
                      desc: "Working with governments for systemic change",
                    },
                    {
                      label: "Partnerships",
                      desc: "Collaborating with local and global organizations",
                    },
                  ].map((approach, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">
                          {approach.label}
                        </h4>
                        <p className="text-slate-600">{approach.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-linear-to-br from-green-100 to-emerald-100 rounded-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Trees
                      className="text-green-600 mx-auto mb-4"
                      size={120}
                      strokeWidth={1.5}
                    />
                    <p className="text-2xl font-bold text-slate-800">
                      Together We Can
                    </p>
                    <p className="text-xl text-slate-600">Make a Difference</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-linear-to-br from-green-600 via-emerald-600 to-teal-600 py-24">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Be Part of the Solution
            </h2>
            <p className="text-xl mb-10 opacity-95 leading-relaxed">
              Every action counts in the fight for our planet. Join us in
              creating sustainable change that protects our environment for
              future generations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-700 px-10 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-colors shadow-xl">
                Take Action Now
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
