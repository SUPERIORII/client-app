"use client";
import {
  Heart,
  Users,
  Megaphone,
  DollarSign,
  TreePine,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer, Navbar } from "@/components/layout";

export default function GetInvolvedPage() {
  const opportunities = [
    {
      icon: TreePine,
      title: "Volunteer",
      description:
        "Join local clean-ups, tree planting events, and environmental education activities in your community.",
      benefits: [
        "Hands-on impact",
        "Meet like-minded people",
        "Flexible schedule",
      ],
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-600",
      link: "#volunteer",
    },
    {
      icon: Megaphone,
      title: "Advocate",
      description:
        "Spread awareness about climate change and sustainability on social media and in your community.",
      benefits: [
        "Amplify your voice",
        "Educational resources",
        "Campaign tools",
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      link: "#advocate",
    },
    {
      icon: DollarSign,
      title: "Donate Resources",
      description:
        "Support our mission with financial contributions, equipment, or professional services.",
      benefits: ["Tax deductible", "Direct impact", "Recognition"],
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-600",
      link: "#donate",
    },
  ];

  const stats = [
    { value: "2,500+", label: "Active Volunteers" },
    { value: "150", label: "Projects Completed" },
    { value: "50K+", label: "Trees Planted" },
    { value: "100+", label: "Communities Served" },
  ];

  const upcomingEvents = [
    {
      title: "Beach Cleanup Drive",
      date: "October 15, 2025",
      location: "Coastal Bay Area",
      spots: "25 spots left",
    },
    {
      title: "Urban Tree Planting",
      date: "October 22, 2025",
      location: "Downtown Green Park",
      spots: "40 spots left",
    },
    {
      title: "Sustainability Workshop",
      date: "November 5, 2025",
      location: "Community Center",
      spots: "15 spots left",
    },
  ];

  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen bg-linear-to-b from-white to-gray-50 pt-16">
        <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pb-5">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 py-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                Make a Difference
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Get Involved with EcoRise Global Initiatives
              </h1>
              <p className="text-lg md:text-2xl text-green-50 mb-8 leading-relaxed">
                Join hands with thousands of changemakers to create a
                sustainable future for our planet
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 shadow-lg"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-linear-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Ways to Contribute
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the path that resonates with you and start making an
                impact today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {opportunities.map((opportunity, index) => (
                <Card
                  key={index}
                  className={`${opportunity.color} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-md`}
                    >
                      <opportunity.icon
                        className={`h-8 w-8 ${opportunity.iconColor}`}
                      />
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {opportunity.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-700">
                      {opportunity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {opportunity.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Sparkles
                            className={`h-4 w-4 ${opportunity.iconColor}`}
                          />
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600">
                Join us at our next environmental action event
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-2"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="text-base">
                      <div className="space-y-2 mt-3">
                        <div className="flex items-center text-gray-700">
                          <span className="font-semibold mr-2">Date:</span>
                          {event.date}
                        </div>
                        <div className="flex items-center text-gray-700">
                          <span className="font-semibold mr-2">Location:</span>
                          {event.location}
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-700"
                        >
                          {event.spots}
                        </Badge>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-50"
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-linear-to-br from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl md:text-4xl mb-4">
                    Ready to Make an Impact?
                  </CardTitle>
                  <CardDescription className="text-xl text-green-50">
                    Sign up today and start taking action toward a better
                    environment. Together, we can create lasting change.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-green-600 hover:bg-gray-100 shadow-lg"
                  >
                    Join Ecorise Global Initiative
                    <Users className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
