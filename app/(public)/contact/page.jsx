import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Globe,
} from "lucide-react";
import { Footer, Navbar } from "@/components/layout";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@ecorise.org",
    link: "mailto:info@ecorise.org",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+231 77 000 000",
    link: "tel:+23177000000",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "123 Green Street, Monrovia",
    link: "#",
    color: "from-orange-500 to-amber-500",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  return (
    <div className="">
      <Navbar/>
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <MessageSquare size={16} />
            <span>We're Here to Help</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Let's Start a<span className="block">Conversation</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Have questions, ideas, or want to collaborate? Our team is ready to
            connect and explore how we can work together for a sustainable
            future.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.link}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 text-center group"
            >
              <div
                className={`w-16 h-16 bg-linear-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <method.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {method.title}
              </h3>
              <p className="text-slate-600 font-medium">{method.detail}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Send Us a Message
              </h2>
              <p className="text-slate-600">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-slate-800 to-green-800 text-white px-8 py-4 rounded-xl hover:from-green-800 hover:to-emerald-800 transition-all font-semibold text-lg flex items-center justify-center gap-2 shadow-lg"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Office Hours
                </h3>
              </div>

              <div className="space-y-4">
                {officeHours.map((schedule, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0"
                  >
                    <span className="font-medium text-slate-700">
                      {schedule.day}
                    </span>
                    <span className="text-slate-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Location
                </h3>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                123 Green Street
                <br />
                Monrovia, Liberia
                <br />
                West Africa
              </p>

              <div className="aspect-video bg-linear-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Globe className="text-slate-400 mx-auto mb-2" size={48} />
                  <p className="text-slate-500 font-medium">Interactive Map</p>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">
                Quick Response Guaranteed
              </h3>
              <p className="opacity-90 leading-relaxed">
                Our dedicated team typically responds to all inquiries within 24
                hours during business days. For urgent matters, please call us
                directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl text-slate-300 mb-8">
            Subscribe to our newsletter for updates on our environmental
            initiatives and impact stories.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-12">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <div className="flex justify-center gap-6">
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
              (social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors font-medium"
                >
                  {social}
                </a>
              )
            )}
          </div>
        </div>
      </section>
    </div>
      <Footer/>
    </div>
  );
}
