/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "../data";
import LucideIcon from "./LucideIcon";
import { trackGetAccessClick } from "../analytics";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | "payment" | null>(null);

  const handleOpenModal = (policy: "privacy" | "terms" | "payment") => {
    setActiveModal(policy);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "auto"; // Restore scroll
  };

  return (
    <footer className="relative bg-[#070A0F] border-t border-white/5 pt-24 pb-12">
      {/* Background radial glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] pointer-events-none z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full radial-glow opacity-30 filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 8: FINAL CLOSING CTA */}
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 text-center relative overflow-hidden mb-24 shadow-2xl shadow-yellow-500/[0.02]">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full radial-glow opacity-40 filter blur-[40px] pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full radial-glow-blue opacity-25 filter blur-[40px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 mx-auto mb-6">
              <LucideIcon name="Sparkles" size={24} />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Ready to Upgrade Your <br className="hidden sm:inline" /> AI Experience?
            </h2>

            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
              Join hundreds of students, developers, content creators, and business owners scaling their daily productivity. Your setup takes under 5 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGetAccessClick("footer")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black text-sm sm:text-base font-extrabold tracking-tight transition-all shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/25 active:scale-[0.98] text-center shrink-0 select-none border border-yellow-400/50 cursor-pointer"
              >
                <MessageCircle size={18} fill="currentColor" className="shrink-0" />
                <span className="whitespace-nowrap">Get Access</span>
                <ArrowRight size={16} className="shrink-0" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <LucideIcon name="ShieldCheck" size={14} className="text-green-500" />
                <span>Instant Account Delivery</span>
              </span>
              <span className="flex items-center gap-1.5">
                <LucideIcon name="BookOpen" size={14} className="text-yellow-500" />
                <span>Includes Prompt Bible Bonus</span>
              </span>
            </div>
          </div>
        </div>

        {/* FOOTER METADATA LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 text-left items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 cursor-pointer mb-4" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                <LucideIcon name="Sparkles" className="text-yellow-500" size={16} />
              </div>
              <span className="font-display font-bold text-base tracking-wider text-white">
                SETEE CONCEPTS
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              SETEE CONCEPTS provides direct access to a premium, secure, browser-based AI platform. Powering your student, writing, coding, and business workflows across all devices.
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">POLICIES</h4>
            <div className="flex flex-col gap-2.5 text-xs text-gray-400">
              <button
                onClick={() => handleOpenModal("privacy")}
                className="hover:text-white transition-colors text-left cursor-pointer focus:outline-none"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleOpenModal("terms")}
                className="hover:text-white transition-colors text-left cursor-pointer focus:outline-none"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleOpenModal("payment")}
                className="hover:text-white transition-colors text-left cursor-pointer focus:outline-none"
              >
                Payment Policy
              </button>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">CONTACT & SUPPORT</h4>
            <div className="flex flex-col gap-2.5 text-xs text-gray-400">
              <p className="flex items-center gap-2">
                <LucideIcon name="Mail" size={12} className="text-yellow-500" />
                <a href="mailto:sethmantey19@gmail.com" className="hover:text-white transition-colors">
                  sethmantey19@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-yellow-500 text-[10px]">💬</span>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: +233 54 953 5810
                </a>
              </p>
              <p className="text-gray-500 mt-2">
                Global AI Platform Portal
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BRAND LICENSE AND POLICY BANNER */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} SETEE CONCEPTS. All rights reserved.</p>
          <p className="max-w-md sm:text-right leading-relaxed text-[11px] text-gray-600">
            Disclaimer: Access credentials are sold for personal use. SETEE CONCEPTS does not operate direct backend services of individual public models, but acts as a premium secure browser access provider.
          </p>
        </div>
      </div>

      {/* POLICY MODALS WITH ANIMATEPRESENCE */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-[#0F131E] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[80vh] overflow-y-auto text-left z-10"
            >
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all focus:outline-none cursor-pointer"
              >
                <LucideIcon name="X" size={18} />
              </button>

              {/* Privacy Policy Content */}
              {activeModal === "privacy" && (
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <LucideIcon name="ShieldCheck" className="text-yellow-500" size={20} />
                    <span>Privacy Policy</span>
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                    <p className="font-semibold text-gray-200">Last updated: July 16, 2026</p>
                    <p>At SETEE CONCEPTS, we prioritize the confidentiality and safety of your personal information. This Privacy Policy details how we handle account logins and communication through WhatsApp.</p>
                    
                    <h4 className="font-bold text-gray-200 mt-4">1. Information We Collect</h4>
                    <p>To provide you with secure workspace credentials, we collect only minimal information:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Your name and contact phone number on WhatsApp.</li>
                      <li>Your personal email address which is required for browser-based login association.</li>
                      <li>Payment confirmation screenshots or receipts to authorize access.</li>
                    </ul>

                    <h4 className="font-bold text-gray-200 mt-4">2. How We Use Information</h4>
                    <p>We use your details solely to: create your platform credentials, send activation guides, verify transaction status, and offer technical customer support. We NEVER trade, sell, or disclose your contact details to third parties.</p>

                    <h4 className="font-bold text-gray-200 mt-4">3. System Safety & Logins</h4>
                    <p>Our premium platform operates in a secure web browser configuration. Logins are encrypted, and we do not store or access your generated AI prompts or outputs; they remain fully confidential to you.</p>
                  </div>
                </div>
              )}

              {/* Terms of Service Content */}
              {activeModal === "terms" && (
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <LucideIcon name="BookOpen" className="text-yellow-500" size={20} />
                    <span>Terms of Service</span>
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                    <p className="font-semibold text-gray-200">Last updated: July 16, 2026</p>
                    <p>By purchasing access from SETEE CONCEPTS on WhatsApp and using our browser-based web application, you agree to comply with the following rules and guidelines:</p>

                    <h4 className="font-bold text-gray-200 mt-4">1. License & Allowed Use</h4>
                    <p>Your workspace credentials represent a single, personal, non-transferable license. Sharing your login details, selling access, or exploiting the platform for multi-user commercial teams is strictly prohibited and will lead to instant account termination.</p>

                    <h4 className="font-bold text-gray-200 mt-4">2. Ethical Usage</h4>
                    <p>You agree not to use the platform to generate illegal, harmful, threatening, hateful, or abusive content. Users are solely responsible for materials and documents they compose using our AI workspace.</p>

                    <h4 className="font-bold text-gray-200 mt-4">3. Account Delivery</h4>
                    <p>All active accounts are configured in under 5 minutes after payment validation. We make every effort to maintain 99.9% uptime for your browser portal.</p>
                  </div>
                </div>
              )}

              {/* Payment Policy Content */}
              {activeModal === "payment" && (
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <LucideIcon name="Wallet" className="text-yellow-500" size={20} />
                    <span>Payment Policy</span>
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                    <p className="font-semibold text-gray-200">Last updated: July 16, 2026</p>
                    <p className="font-bold text-yellow-500">Please read carefully before proceeding with your purchase:</p>
                    
                    <h4 className="font-bold text-gray-200 mt-4">1. Digital Delivery Model</h4>
                    <p>SETEE CONCEPTS provides virtual, browser-based access tokens and digital guides (including the Prompt Bible). Digital access is delivered instantly directly inside our WhatsApp conversation upon payment confirmation.</p>

                    <h4 className="font-bold text-gray-200 mt-4">2. No Refunds / Completed Purchases</h4>
                    <p className="bg-yellow-500/5 border border-yellow-500/20 p-3 rounded-lg text-yellow-400">
                      Completed purchases are strictly final after access credentials has been provided to you. Because digital assets and logins cannot be "returned," we do not offer refunds once credentials have been generated and sent.
                    </p>

                    <h4 className="font-bold text-gray-200 mt-4">3. Fraud Prevention</h4>
                    <p>All transaction screens are validated in real-time. Any attempts to supply fake or altered payment receipts will result in immediate blacklisting and permanent ban from our services.</p>
                  </div>
                </div>
              )}

              <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
