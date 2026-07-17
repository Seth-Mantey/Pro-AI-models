/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { FEATURES, BENEFITS } from "../data";
import LucideIcon from "./LucideIcon";

export default function Features() {
  return (
    <div className="relative">
      {/* Section 2: WHAT YOU GET */}
      <section id="what-you-get" className="py-20 md:py-28 relative overflow-hidden">
        {/* Glow background */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] radial-glow opacity-30 pointer-events-none filter blur-[80px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-display text-xs font-bold text-yellow-500 uppercase tracking-widest mb-3">
              WHAT YOU GET
            </h2>
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              One Secure Workspace. <br className="hidden sm:inline" />
              Endless Creative Capabilities.
            </p>
            <p className="text-gray-400 text-base mt-4 max-w-2xl mx-auto">
              We don't just grant access to AI tools — we provide a productivity launchpad designed to help you create, research, and complete tasks with unmatched speed.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-8 relative flex flex-col items-start text-left"
              >
                {feature.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded-full">
                    {feature.badge}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 mb-6">
                  <LucideIcon name={feature.iconName} size={22} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed mt-auto border-t border-white/5 pt-4">
                  {feature.longDescription}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: WHY PEOPLE CHOOSE SETEE CONCEPTS */}
      <section id="why-choose-us" className="py-20 md:py-24 bg-[#070A0F] border-y border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-10 w-[250px] h-[250px] radial-glow-blue opacity-20 pointer-events-none filter blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left intro card */}
            <div className="lg:col-span-5 text-left">
              <h2 className="font-display text-xs font-bold text-yellow-500 uppercase tracking-widest mb-3">
                TRUST & ACCESSIBILITY
              </h2>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Why People Choose SETEE CONCEPTS
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Unlike complex software platforms that require credit card registrations, VPNs, or slow, bloated setups, SETEE CONCEPTS provides direct access to a unified, premium web-based AI system.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Everything is configured for maximum convenience so you can spend less time managing software and more time driving actual outcomes.
              </p>
              
              <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center">
                  <LucideIcon name="ShieldCheck" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">No Recurring Card Subscriptions</h4>
                  <p className="text-xs text-gray-400 mt-1">Make a single, straightforward payment on WhatsApp and secure instant lifetime or period-based access without surprise bills.</p>
                </div>
              </div>
            </div>

            {/* Right benefits list */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {BENEFITS.map((benefit, idx) => (
                  <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-6 rounded-xl border border-white/5 bg-white/[0.02] flex items-start gap-4 hover:border-yellow-500/20 hover:bg-white/[0.04] transition-all"
                  >
                    <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 flex items-center justify-center shrink-0">
                      <LucideIcon name={benefit.iconName} size={18} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-white text-base tracking-tight mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
