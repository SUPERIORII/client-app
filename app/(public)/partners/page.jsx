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
import React from "react";
import Link from "next/link";
import { Footer, Navbar } from "@/components/layout";
import PartnerEmptyState from "@/components/emptyStats/PartnerEmptyState";
import PartnerPage from "./PartnersPage";

const iconMap = {
  Users: <Users className="w-8 h-8 text-green-600" />,
  Heart: <Heart className="w-8 h-8 text-green-600" />,
  CheckCircle: <CheckCircle className="w-8 h-8 text-green-600" />,
  Globe: <Globe className="w-8 h-8 text-green-600" />,
  HandshakeIcon: <HandshakeIcon className="w-8 h-8 text-green-600" />,
};

// IF NO PARTNER COMPONENT

export default async function page() {
  // Mock data for demonstration - replace with your actual API call

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

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/partners`, {
    cache: "no-store",
  });

  const { partners, stats } = await res.json();

  // CHECK SERVER STATUS
  if (!res.ok) throw new Error(`SEVER_ERROR`);

  // CHECK IF THERE IS NO PARTNER YET
  const isPartnerExist = !partners || partners.length === 0;

  return (
    <div>
      <Navbar />
      <PartnerPage partners={partners} stats={stats} isPartnerExist={isPartnerExist}/>
      <Footer />
    </div>
  );
}
