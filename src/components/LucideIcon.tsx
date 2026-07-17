/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import {
  Sparkles,
  Search,
  Lightbulb,
  Zap,
  CheckCircle,
  Mail,
  Smartphone,
  Globe,
  Flame,
  BookOpen,
  Headset,
  Wallet,
  Key,
  UserCheck,
  ArrowRight,
  Star,
  Plus,
  Minus,
  Menu,
  X,
  Check,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = "", size = 24 }: LucideIconProps) {
  const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
    Sparkles: Sparkles,
    SearchCode: Search, // fallback safe
    Search: Search,
    Lightbulb: Lightbulb,
    Zap: Zap,
    CheckCircle2: CheckCircle,
    CheckCircle: CheckCircle,
    Mail: Mail,
    MonitorPhone: Smartphone, // fallback safe
    Smartphone: Smartphone,
    Globe: Globe,
    Flame: Flame,
    BookOpenCheck: BookOpen, // fallback safe
    BookOpen: BookOpen,
    Headset: Headset,
    WalletCards: Wallet, // fallback safe
    Wallet: Wallet,
    KeyRound: Key, // fallback safe
    Key: Key,
    UserCheck: UserCheck,
    ArrowRight: ArrowRight,
    Star: Star,
    Plus: Plus,
    Minus: Minus,
    Menu: Menu,
    X: X,
    Check: Check,
    AlertCircle: AlertCircle,
    ExternalLink: ExternalLink,
    ShieldCheck: ShieldCheck,
    ChevronDown: ChevronDown,
    ChevronUp: ChevronUp,
  };

  const IconComponent = iconMap[name] || Sparkles; // Sparkles as dynamic default
  return <IconComponent className={className} size={size} />;
}
