import {
  ChartBar,
  Compass,
  FilePlus,
  Folder,
  LayoutDashboard,
  Newspaper,
  Settings,
  Shield,
  ShieldCheckIcon,
  User,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";

export const superAdminIcons = {
  dashboard: <LayoutDashboard className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  content: <ShieldCheckIcon className="w-6 h-6" />,
  report: <ChartBar className="w-6 h-6" />,
  security: <Shield className="w-6 h-6" />,
  settings: <Settings className="w-6 h-6" />,
};
export const adminIcons = {
  dashboard: <LayoutDashboard className="w-6 h-6" />,
  content: <ShieldCheckIcon className="w-6 h-6" />,
  overview: <Shield className="w-6 h-6" />,
  report: <ChartBar className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
};

export const donorIcons = {
  dashboard: <LayoutDashboard className="w-6 h-6" />,
  explore: <Folder className="w-6 h-6" />,
  history: <Wallet className="w-6 h-6" />,
  news: <Newspaper className="w-6 h-6" />,
  user: <User className="w-6 h-6" />,
};

export const partnerIcons = {
  dashboard: <LayoutDashboard className="w-6 h-6" />,
  projects: <Folder className="w-6 h-6" />,
  reports: <ChartBar className="w-6 h-6" />,
  update: <FilePlus className="w-6 h-6" />,
  connect: <UserPlus className="w-6 h-6" />,
  user: <User className="w-6 h-6" />,
};
