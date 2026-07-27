/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";
import { WHATSAPP_URL } from "../data";
import { trackGetAccessClick } from "../analytics";

export default function Comparison() {
  const oldPlatformCons = [
    "Requires complex credit card authorizations",
    "Requires high monthly subscription fees (adds up to $60+/month)",
    "Requires managing multiple accounts and passwords",
    "Requires VPNs and dealing with regional restrictions",
    "No direct human customer support when systems fail",
  ];

  const seteePros = [
    "Convenient checkout directly on WhatsApp",
    "Unbeatable single-access point cost efficiency",
    "Just 1 secure browser login using your personal email",
    "Works natively anywhere in the world without VPN or special networks",
    "24/7 dedicated support team ready to assist on WhatsApp",
    "Bonus copy-paste Prompt Bible to maximize elite output",
  ];

  return (
    <section id="comparison" className="py-20 md:py-24 bg-[#070A0F]/50 border-y border-white/5 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[500px] pointer-events-none z-0">
        <div className="absolute top-10 left-1/3 w-[350px] h-[350px] rounded-full radial-glow opacity-20 filter blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold text-yellow-500 uppercase tracking-widest mb-3">
            SMART INVESTING
          </h2>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Stop Overpaying. <br />
            Upgrade to a Smarter Flow.
          </p>
          <p className="text-gray-400 text-base mt-4 max-w-2xl mx-auto">
            Why register multiple foreign accounts, pay separate fees, and struggle with card authorizations when you can access everything in one place?
          </p>
        </div>

        {/* Comparison grid boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Buying separate AI Subscriptions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 bg-[#0F131E]/60 border border-white/5 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-300">Traditional Subscriptions</h3>
                  <p className="text-xs text-gray-500 mt-1">Managing accounts on your own</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-bold text-sm">
                  ✗
                </div>
              </div>

              <ul className="space-y-4 text-left">
                {oldPlatformCons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 leading-normal">{con}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-left">
              <span className="text-xs text-gray-500 block">Estimated Average Cost:</span>
              <span className="text-lg font-semibold text-red-400 line-through">$80+ / month</span>
            </div>
          </motion.div>

          {/* SETEE CONCEPTS Advantage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 bg-gradient-to-b from-[#121621] to-[#1A2033] border-2 border-yellow-500/40 relative flex flex-col justify-between shadow-2xl shadow-yellow-500/5"
          >
            {/* Highly Recommended Ribbon */}
            <div className="absolute -top-3.5 right-6 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
              Highly Recommended
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>SETEE CONCEPTS</span>
                    <LucideIcon name="Sparkles" className="text-yellow-500" size={16} />
                  </h3>
                  <p className="text-xs text-yellow-500/80 mt-1 font-medium">Premium AI Access Provider</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 font-bold text-sm">
                  ✓
                </div>
              </div>

              <ul className="space-y-4 text-left">
                {seteePros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm text-gray-200 leading-normal font-medium">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-left flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400 block">Access via SETEE CONCEPTS:</span>
                <span className="text-xl font-bold text-yellow-400 flex items-center gap-1.5">
                  One Simple Payment
                </span>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGetAccessClick("comparison_section")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <span>Check Offer</span>
                <LucideIcon name="ArrowRight" size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
