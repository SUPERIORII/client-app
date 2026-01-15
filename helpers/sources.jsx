"use client";
const image1 = "./images/03a6acdf091c4972ac8bcc3e65d010de.jpg";
const image2 = "./images/img-1.jpg";
const image3 = "./images/91925a99b7054ef8c69f04d4e05d488d.jpg";
// images
import { Home, Settings, PlusCircle, X, Menu } from "lucide-react";
import { MdForest, MdWaterDamage } from "react-icons/md";

export const multipleImages = [
  {
    id: 1,
    image: image1,
  },
  { id: 2, image: image2 },
  {
    id: 3,
    image: image3,
  },
];
import { FaLowVision, FaMapSigns, FaPumpSoap } from "react-icons/fa";

import {
  Projector,
  AirVent,
  Newspaper,
  Group,
  LucideMenu,
  Search,
  Bell,
  LogIn,
  Leaf,
  TreePine,
  Recycle,
  Heart,
} from "lucide-react";

import { AiFillFacebook, AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";
export const aboutUsInfo = [
  { id: 1, title: "our purpose", icon: <FaLowVision />, className: "purpose" },
  { id: 2, title: "our mission", icon: <FaMapSigns />, className: "mission" },
  { id: 3, title: "our vision", icon: <FaPumpSoap />, className: "vision" },
];

// SEARCH OPTIONS
export const searchSuggestion = [
  { id: 1, title: "Projects", icon: <Projector size={18} /> },
  { id: 2, title: "News & Articles", icon: <Newspaper size={18} /> },
  { id: 3, title: "Partners", icon: <Group size={18} /> },
];

// NAVBAR LINKS
export const navLinks = [
  { id: "1", text: "About Us", href: "/about-us" },
  { id: "2", text: "Environmental Issues", href: "/environmental-issue" },
  { id: "3", text: "Partners", href: "/partners" },
  { id: "4", text: "Projects", href: "/project" },
  { id: "5", text: "News & Articles", href: "/news" },
  { id: "6", text: "Get Involved", href: "/get-involved" },
  { id: "7", text: "contact", href: "/contact" },
];

export const adminNavLinks = [
  {
    id: 2,
    name: "account settings",
    icon: <Settings size={20} />,
    href: "/dashboard/superadmin",
    category: "Partners",
  },
  {
    id: 4,
    name: "Create",
    icon: <PlusCircle size={20} />,
    href: "/dashboard/superadmin",
    category: "Additional Content",
  },
];

export const adminNavbarLink = [
  {
    id: 1,
    icon: <Search size={16} />,
  },
  { id: 2, icon: <Bell size={16} /> },
  { id: 3, icon: <Menu size={16} /> },
  { id: 4, icon: <X size={16} /> },
];

export const guestUserOPtions = [
  { id: 1, text: "login", icon: <LogIn size={16} />, href: "login" },
];

export const SingleImages = {
  id: 1,
  image: "../src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg",
};

export const socialIcon = [
  { id: 1, url: "https://www.facebook.com", icon: <AiFillFacebook /> },
  { id: 2, url: "https://www.facebook.com", icon: <AiFillMail /> },
  { id: 3, url: "https://www.facebook.com", icon: <AiOutlineWhatsApp /> },
];

// OUR FOCUS
export const focusAreas = [
  {
    title: "Air Quality & Pollution Control",
    description:
      "We focus on propagating awareness and designing adaptation methods about air, water and soil pollutions through innovative monitoring and remediation strategies.",
    icon: <AirVent size={32} className="text-blue-600" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Climate Resilience",
    description:
      "Building community resilience against climate change through adaptation strategies and sustainable infrastructure development.",
    icon: <MdWaterDamage size={32} className="text-indigo-600" />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Forest Conservation",
    description:
      "Protecting and restoring forest ecosystems through reforestation, afforestation, and sustainable forest management practices.",
    icon: <MdForest size={32} className="text-green-600" />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Wildlife Protection",
    description:
      "Safeguarding biodiversity through wildlife conservation programs, habitat restoration, and community education initiatives.",
    icon: <AirVent size={32} className="text-amber-600" />,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Sustainable Agriculture",
    description:
      "Promoting sustainable farming practices and aquaculture systems that enhance food security while protecting natural resources.",
    icon: <MdForest size={32} className="text-teal-600" />,
    gradient: "from-teal-500 to-green-500",
  },
];

// PROJECT STATS
export const projectStatistics = [
  {
    icon: TreePine,
    label: "Trees Planted",
    value: "2,450",
    color: "text-green-600",
  },
  {
    icon: Recycle,
    label: "Waste Recycled",
    value: "15 Tons",
    color: "text-blue-600",
  },
  { icon: Heart, label: "Volunteers", value: "480+", color: "text-red-600" },
  {
    icon: Leaf,
    label: "CO² Reduced",
    value: "3.2 Tons",
    color: "text-teal-600",
  },
];
