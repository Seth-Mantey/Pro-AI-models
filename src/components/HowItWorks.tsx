/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { STEPS } from "../data";
import LucideIcon from "./LucideIcon";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] radial-glow opacity-25 pointer-events-none filter blur-[90px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] radial-glow-blue opacity-15 pointer-events-none filter blur-[90px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-display text-xs font-bold text-yellow-500 uppercase tracking-widest mb-3">
            PROCESS TIMELINE
          </h2>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How It Works
          </p>
          <p className="text-gray-400 text-base mt-4 max-w-2xl mx-auto">
            Get fully set up in under 5 minutes. No complex configuration, no manual coding, and absolutely no software downloads.
          </p>
        </div>

        {/* Step Cards with Connected Indicators */}
        <div className="relative">
          {/* Central connecting line for desktop layout */}
          <div className="hidden lg:block absolute top-[48px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-yellow-500/10 via-yellow-500/50 to-yellow-500/10 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left relative group"
              >
                {/* Number / Icon Bubble */}
                <div className="relative mb-6">
                  {/* Outer circle layout */}
                  <div className="w-24 h-24 rounded-full bg-[#0F131E] border border-white/5 flex items-center justify-center relative group-hover:border-yellow-500/30 group-hover:bg-[#161B29] transition-all duration-300 shadow-xl">
                    <div className="w-18 h-18 rounded-full bg-yellow-500/5 border border-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                      <LucideIcon name={step.iconName} size={26} />
                    </div>

                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-yellow-500 text-black font-display font-black text-xs flex items-center justify-center shadow-lg shadow-yellow-500/20">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="glass-card rounded-2xl p-6 border border-white/5 group-hover:border-yellow-500/20 group-hover:bg-[#121621] transition-all duration-300 w-full flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Short checkout notice banner */}
        <div className="mt-16 max-w-4xl mx-auto p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/10 flex flex-col sm:flex-row items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
            <LucideIcon name="ShieldCheck" size={24} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-white text-sm sm:text-base">Guaranteed Delivery Guarantee</h4>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Our customer service agents are standing by to guide you through payment confirmation and supply your official web link in real-time. Everything is delivered safely on WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
