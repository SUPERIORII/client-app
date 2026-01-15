"use client";

import React from "react";
import {
  Users,
  Handshake,
  Target,
  Award,
  Globe,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Heart,
  Zap,
  HandshakeIcon,
} from "lucide-react";
import Link from "next/link";
import PartnerEmptyState from "@/components/emptyStats/PartnerEmptyState";

const iconMap = {
  Users: <Users className="w-8 h-8 text-green-600" />,
  Heart: <Heart className="w-8 h-8 text-green-600" />,
  CheckCircle: <CheckCircle className="w-8 h-8 text-green-600" />,
  Globe: <Globe className="w-8 h-8 text-green-600" />,
  HandshakeIcon: <HandshakeIcon className="w-8 h-8 text-green-600" />,
};

export default function PartnerPage({ partners, stats, isPartnerExist }) {

  const benefits = [
    {
      icon: Target,
      title: "Expand Your Impact",
      desc: "Reach more communities through our established network and amplify your environmental initiatives.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Positive Branding",
      desc: "Showcase your commitment to sustainability and attract environmentally conscious customers.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Handshake,
      title: "Joint Projects",
      desc: "Collaborate on meaningful initiatives that align with your values and create lasting change.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Global Network",
      desc: "Connect with like-minded organizations worldwide and share best practices.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Innovation Hub",
      desc: "Access cutting-edge environmental technologies and sustainable solutions.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Community Impact",
      desc: "Make a tangible difference in communities while building meaningful relationships.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="pt-16">
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-green-600 via-emerald-600 to-teal-700 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>

          <div className="relative container mx-auto px-4 text-center text-white">
            <div className="inline-flex items-center text-green-800 backdrop-blur-sm rounded-full px-6 py-2 mb-6 bg-white">
              <img src="/images/logo.png" className="w-7 h-7 mr-2" alt="logo" />
              <span className="text-sm font-medium">Partnership</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Partner With Us for a
              <span className="block bg-linear-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Greener Future
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Join hands with Ecorise Global Initiatives to amplify your
              environmental impact. Together, we can create lasting change for
              our planet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register/partner"
                className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Become a Partner
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {iconMap[stat.icon]}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.count}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 bg-linear-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the incredible benefits of joining our environmental
                partnership network
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-6 bg-linear-to-br ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Trusted Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Meet the amazing organizations working with us to create
                environmental change
              </p>
            </div>

            {isPartnerExist ? (
              <PartnerEmptyState />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={partner.logourl}
                          alt={partner.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="text-center">
                        {partner?.category && (
                          <div className="inline-block bg-linear-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                            {partner.category}
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                          {partner.name}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {partner.description}
                        </p>

                        <a
                          href={partner.websiteurl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-linear-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 group"
                        >
                          Visit Website
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 bg-linear-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                How to Become a Partner
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join our partnership program in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Apply",
                  desc: "Fill out our partnership application form with your organization details and environmental goals.",
                },
                {
                  step: "02",
                  title: "Review",
                  desc: "Our team will review your application and schedule a consultation to discuss partnership opportunities.",
                },
                {
                  step: "03",
                  title: "Collaborate",
                  desc: "Once approved, we'll work together to create impactful environmental initiatives and projects.",
                },
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 mx-auto bg-linear-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {process.step}
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-linear-to-r from-green-300 to-emerald-300 transform translate-x-10"></div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-linear-to-br from-green-600 via-emerald-600 to-teal-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our growing network of environmental champions and help us
              create a sustainable future for generations to come.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register/partner"
                className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center group"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105">
                Download Partnership Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
