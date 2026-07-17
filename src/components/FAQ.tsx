/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";
import LucideIcon from "./LucideIcon";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-how-receive");

  const toggleFaq = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#070A0F]/30 border-t border-white/5 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[450px] pointer-events-none z-0">
        <div className="absolute top-12 left-1/4 w-[300px] h-[300px] rounded-full radial-glow-blue opacity-15 filter blur-[90px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-xs font-bold text-yellow-500 uppercase tracking-widest mb-3">
            QUESTIONS & ANSWERS
          </h2>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </p>
          <p className="text-gray-400 text-base mt-4 max-w-2xl mx-auto">
            Find immediate answers regarding platform delivery, login credentials, devices, and WhatsApp activations.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4 text-left">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#121621] border-yellow-500/20 shadow-xl shadow-yellow-500/5"
                    : "bg-[#0F131E]/60 border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 font-semibold text-white hover:text-yellow-400 transition-colors text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg pr-4 font-display tracking-tight leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg shrink-0 transition-transform duration-300 ${
                    isOpen ? "bg-yellow-500/10 text-yellow-500 rotate-180" : "bg-white/5 text-gray-400"
                  }`}>
                    <LucideIcon name="ChevronDown" size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-gray-400 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support contact info block */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/5 border border-white/5 inline-flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
          <p className="text-sm text-gray-400">
            Have another question not answered above? Speak directly to our customer support agent.
          </p>
          <a
            href="mailto:sethmantey19@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all shrink-0 active:scale-95"
          >
            <LucideIcon name="Mail" size={14} />
            <span>Email Support</span>
          </a>
        </div>
      </div>
    </section>
  );
}
