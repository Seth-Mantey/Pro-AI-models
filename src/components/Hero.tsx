/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";
import LucideIcon from "./LucideIcon";
import { WHATSAPP_URL } from "../data";

// We import the generated mockup image path
// @ts-ignore
import heroMockupImg from "../assets/images/hero_mockup_1784240127888.jpg";

export default function Hero() {

  const scrollToFeatures = () => {
    const element = document.getElementById("what-you-get");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0">
        <div className="absolute top-12 left-1/4 w-[400px] h-[400px] rounded-full radial-glow opacity-60 filter blur-[80px]" />
        <div className="absolute top-24 right-1/4 w-[350px] h-[350px] rounded-full radial-glow-blue opacity-30 filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-semibold tracking-wide w-fit mb-6"
            >
              <LucideIcon name="ShieldCheck" size={14} />
              <span>100% Secure & Instantly Active Worldwide</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
            >
              Unlock Premium AI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
                Productivity.
              </span>{" "}
              One Simple Access.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8"
            >
              Get unlimited access to a premium web-based AI platform working natively on your phone and computer. No expensive card subscriptions. Simply sign in with your email and launch instantly from your browser.
            </motion.p>

            {/* Premium Bullet checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 text-sm text-gray-300"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                  <LucideIcon name="Check" size={12} />
                </div>
                <span>Works on all iPhones & Androids</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                  <LucideIcon name="Check" size={12} />
                </div>
                <span>Works on Windows & Mac PCs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                  <LucideIcon name="Check" size={12} />
                </div>
                <span>Login with your personal email</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                  <LucideIcon name="Check" size={12} />
                </div>
                <span>No complex setup or software installation</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black text-sm sm:text-base font-extrabold tracking-tight transition-all shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/25 active:scale-[0.98] group text-center shrink-0 select-none border border-yellow-400/50 cursor-pointer"
              >
                <MessageCircle size={18} fill="currentColor" className="shrink-0" />
                <span className="whitespace-nowrap">Get Access</span>
                <ArrowRight size={16} className="shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={scrollToFeatures}
                className="inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white text-base font-semibold transition-all cursor-pointer text-center"
              >
                <span>See What's Included</span>
              </button>
            </motion.div>

            {/* Trust and Social Proof Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-4 pt-4 border-t border-white/5 text-xs text-gray-400"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border border-gray-900 bg-yellow-500/20 text-yellow-500 flex items-center justify-center font-bold text-[10px]">T</div>
                <div className="w-8 h-8 rounded-full border border-gray-900 bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-[10px]">F</div>
                <div className="w-8 h-8 rounded-full border border-gray-900 bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[10px]">C</div>
                <div className="w-8 h-8 rounded-full border border-gray-900 bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-[10px]">A</div>
              </div>
              <div>
                <p className="font-semibold text-gray-300">Loved by Students, Business Owners & Professionals</p>
                <p className="text-[11px] text-gray-500">Over 1,200+ accounts activated globally</p>
              </div>
            </motion.div>
          </div>

          {/* Hero product mockup illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual background glows specifically under mockup */}
            <div className="absolute inset-0 bg-yellow-500/5 filter blur-[60px] rounded-full pointer-events-none" />

            <div className="relative glass-card rounded-2xl overflow-hidden p-1.5 border border-white/10 shadow-2xl shadow-black/80">
              {/* Browser bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0F131E] border-b border-white/5 rounded-t-xl">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                </div>
                <div className="flex items-center gap-1.5 bg-[#070A0F] px-4 py-1 rounded-md text-[10px] text-gray-500 font-mono w-48 justify-center border border-white/5">
                  <LucideIcon name="ShieldCheck" size={10} className="text-green-500" />
                  <span className="truncate">Premium Workspace</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Mockup Image Container */}
              <div className="relative bg-[#070A0F] aspect-[16/10] overflow-hidden">
                <img
                  src={heroMockupImg}
                  alt="Premium AI Platform Access provided by SETEE CONCEPTS"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float tags */}
                <div className="absolute top-4 right-4 bg-[#0A0D14]/95 border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs text-yellow-400 font-medium shadow-lg backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Interactive Workspace Ready</span>
                </div>

                <div className="absolute bottom-4 left-4 bg-yellow-500 text-black px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold shadow-lg">
                  <LucideIcon name="Sparkles" size={12} />
                  <span>Prompt Bible Included</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
