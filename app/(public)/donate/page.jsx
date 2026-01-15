"use client";
import { Footer, Navbar } from "@/components/layout";
import { Heart, Shield, Users, Leaf, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("once");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const presetAmounts = [25, 50, 100, 250];

  const handleSubmit = (e) => {
    e.preventDefault();
    const donationAmount = customAmount || amount;
    console.log("Donation submitted:", {
      ...formData,
      amount: donationAmount,
      frequency,
    });
  };

  const selectAmount = (value) => {
    setAmount(value.toString());
    setCustomAmount("");
  };

  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-linear-to-br from-emerald-600 to-teal-700 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Every contribution makes a difference
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Help Us Build a<br />
                <span className="bg-linear-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                  Sustainable Future
                </span>
              </h1>

              <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto mb-8 leading-relaxed">
                Your generosity powers environmental initiatives that protect
                our planet, restore ecosystems, and create lasting change for
                generations to come.
              </p>

              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Shield className="w-4 h-4" />
                  <span>Secure & Encrypted</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Users className="w-4 h-4" />
                  <span>10,000+ Supporters</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Heart className="w-4 h-4" />
                  <span>100% Transparent</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  $2.4M+
                </div>
                <div className="text-gray-600 font-medium">
                  Raised This Year
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  150+
                </div>
                <div className="text-gray-600 font-medium">Projects Funded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  45K
                </div>
                <div className="text-gray-600 font-medium">Trees Planted</div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
                    Make Your Impact Today
                  </h2>
                  <p className="text-gray-600 text-center mb-10">
                    Choose an amount that feels right for you
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Frequency Toggle */}
                    <div className="flex gap-3 p-1 bg-gray-100 rounded-lg">
                      <button
                        type="button"
                        onClick={() => setFrequency("once")}
                        className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
                          frequency === "once"
                            ? "bg-white text-emerald-600 shadow-sm"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        One-Time
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency("monthly")}
                        className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
                          frequency === "monthly"
                            ? "bg-white text-emerald-600 shadow-sm"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        Monthly
                      </button>
                    </div>

                    {/* Amount Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        Select Amount
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {presetAmounts.map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => selectAmount(preset)}
                            className={`py-4 px-6 rounded-lg font-semibold transition-all border-2 ${
                              amount === preset.toString() && !customAmount
                                ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                                : "border-gray-200 hover:border-emerald-300 text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            ${preset}
                          </button>
                        ))}
                      </div>

                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                          $
                        </span>
                        <input
                          type="number"
                          placeholder="Custom amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setAmount("");
                          }}
                          className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-gray-900 font-medium"
                        />
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold py-5 px-8 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                    >
                      <span className="text-lg">Complete Donation</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      Your donation is secure and encrypted. You'll receive a
                      receipt via email.
                    </p>
                  </form>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Tax Deductible
                  </h3>
                  <p className="text-sm text-gray-600">
                    All donations are 100% tax deductible
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Secure Payment
                  </h3>
                  <p className="text-sm text-gray-600">
                    Bank-level encryption protects your data
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Direct Impact
                  </h3>
                  <p className="text-sm text-gray-600">
                    90% goes directly to projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
