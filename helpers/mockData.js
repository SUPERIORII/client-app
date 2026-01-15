"use client";
import * as Icons from "lucide-react";
import { AirVent } from "lucide-react";
import { MdForest, MdWaterDamage } from "react-icons/md";

export const iconMap = {
  // SUPER ADMIN ICON
  LayoutDashboard: Icons.LayoutDashboard,
  Users: Icons.Users,
  ShieldCheck: Icons.ShieldCheck,
  ChartBar: Icons.ChartBar,
  Shield: Icons.Shield,
  Server: Icons.Server,
  // ADMIN ICON
  LayoutDashboard: Icons.LayoutDashboard,
  File: Icons.File,
  Handshake: Icons.Handshake,
  Handshake: Icons.Handshake,
  FileText: Icons.FileText,
  User: Icons.User,
  LayoutDashboard: Icons.LayoutDashboard,
  Compass: Icons.Compass,
  Wallet: Icons.Wallet,
  Newspaper: Icons.Newspaper,
  User: Icons.User,
  LayoutDashboard: Icons.LayoutDashboard,
  Folder: Icons.Folder,
  Folder: Icons.Folder,
  FilePlus: Icons.FilePlus,
  UserPlus: Icons.UserPlus,
  Building: Icons.Building,
};

import {
  DollarSign,
  Shield,
  User,
  Users,
  AlignCenter,
  UsersIcon,
  Calendar,
  LayoutDashboard,
  ShieldCheckIcon,
  ChartBar,
  Settings,
  Server,
  File,
  Handshake,
  FileText,
  Compass,
  Wallet,
  Newspaper,
  Folder,
  FilePlus,
  Building,
  UserPlus,
} from "lucide-react";
import { MdAnalytics, MdFormatAlignCenter } from "react-icons/md";

export const systemMetrics = {
  totalUsers: 45672,
  totalPartners: 234,
  totalDonations: 2847392.5,
  totalAdmins: 12,
  activeUsers: 3421,
  systemUptime: 99.8,
  pendingContent: 23,
  flaggedReports: 7,
  monthlyGrowth: 12.5,
};

export const superAdminSystemMetrics = [
  {
    label: "total Users",
    value: 45672,
    icon: User,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    label: "total Admin",
    value: 10,
    icon: Shield,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    label: "total Partners",
    value: 234,
    icon: Shield,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    label: "total Donors",
    value: 234,
    icon: Shield,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    label: "Total Super Admins",
    value: 2,
    icon: Shield,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    label: "Pending Approvals (Partners/Projects)",
    value: 24,
    icon: MdAnalytics,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
];

export const superAdminDonationMetrics = [
  {
    label: "total Donations (All time)",
    value: 10,
    icon: User,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    label: "Donation year-to-Date (TYD)",
    value: 10,
    icon: Shield,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    label: "Donation this month",
    value: 234,
    icon: Shield,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    label: "Average Donation",
    value: 234,
    icon: Shield,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    label: "Largest Donation",
    value: 2,
    icon: Shield,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    label: "Pending (Partners/Projects)",
    value: 24,
    icon: MdAnalytics,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
];

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "user",
    status: "active",
    joinDate: "2024-01-15",
    lastActive: "2024-01-20",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "partner",
    status: "active",
    joinDate: "2024-01-10",
    lastActive: "2024-01-19",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "admin",
    status: "banned",
    joinDate: "2024-01-05",
    lastActive: "2024-01-18",
  },
];

export const contentItems = [
  {
    id: 1,
    title: "Clean Water Initiative",
    type: "campaign",
    author: "Water For All NGO",
    status: "pending",
    submittedDate: "2024-01-20",
    category: "Environment",
  },
  {
    id: 2,
    title: "Education Program Launch",
    type: "program",
    author: "Learn Together",
    status: "approved",
    submittedDate: "2024-01-19",
    category: "Education",
  },
  {
    id: 3,
    title: "Food Distribution Drive",
    type: "event",
    author: "Feed The Hungry",
    status: "flagged",
    submittedDate: "2024-01-18",
    category: "Health",
  },
];

export const transactions = [
  {
    id: "txn_1234567890",
    amount: 250.0,
    donor: "Anonymous",
    partner: "Water For All NGO",
    date: "2024-01-20",
    status: "completed",
    stripeId: "pi_1234567890",
  },
  {
    id: "txn_0987654321",
    amount: 500.0,
    donor: "John Smith",
    partner: "Learn Together",
    date: "2024-01-19",
    status: "completed",
    stripeId: "pi_0987654321",
  },
  {
    id: "txn_1122334455",
    amount: 100.0,
    donor: "Mary Johnson",
    partner: "Feed The Hungry",
    date: "2024-01-18",
    status: "pending",
    stripeId: "pi_1122334455",
  },
];

export const systemSettings = {
  maintenanceMode: false,
  userRegistration: true,
  partnerApplications: true,
  donationProcessing: true,
  emailNotifications: true,
  smsNotifications: false,
  autoContentApproval: false,
  maxDonationAmount: 10000,
  minDonationAmount: 5,
  platformFee: 2.5,
};
