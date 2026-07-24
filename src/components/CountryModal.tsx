/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, ShieldCheck } from "lucide-react";
import { GHANA_WHATSAPP_URL, INTERNATIONAL_PAYSTACK_URL } from "../data";

interface CountryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CountryModal({ isOpen, onClose }: CountryModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent background scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSelectCountry = (url: string) => {
    onClose();
    window.open(url, "_blank", "noopener,noreferrer") || (window.location.href = url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.3, bounce: 0.15 }}
            className="relative w-full max-w-md rounded-2xl bg-[#0F131C] border border-white/10 p-6 sm:p-8 shadow-2xl shadow-yellow-500/5 text-white z-10 overflow-hidden"
          >
            {/* Top decorative gradient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="text-center mb-6 pt-2">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                Choose your country
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto font-medium">
                Select your location to continue with the appropriate payment method.
              </p>
            </div>

            {/* Option Buttons */}
            <div className="space-y-3.5 mb-6">
              {/* Ghana Button */}
              <button
                onClick={() => handleSelectCountry(GHANA_WHATSAPP_URL)}
                className="group relative w-full flex items-center justify-between p-4 sm:p-4.5 rounded-xl bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent hover:from-yellow-500/20 hover:to-yellow-500/10 border border-yellow-500/30 hover:border-yellow-500/60 transition-all cursor-pointer text-left shadow-lg shadow-yellow-500/5 active:scale-[0.98]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-3xl sm:text-4xl shrink-0 leading-none" role="img" aria-label="Ghana Flag">
                    🇬🇭
                  </span>
                  <div>
                    <span className="text-base sm:text-lg font-black text-white block group-hover:text-yellow-400 transition-colors leading-snug">
                      Ghana
                    </span>
                    <span className="text-xs text-gray-400 block font-medium">
                      Mobile Money & WhatsApp Order
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>

              {/* Other Countries Button */}
              <button
                onClick={() => handleSelectCountry(INTERNATIONAL_PAYSTACK_URL)}
                className="group relative w-full flex items-center justify-between p-4 sm:p-4.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-pointer text-left shadow-md active:scale-[0.98]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-3xl sm:text-4xl shrink-0 leading-none" role="img" aria-label="Globe">
                    🌍
                  </span>
                  <div>
                    <span className="text-base sm:text-lg font-black text-white block group-hover:text-yellow-400 transition-colors leading-snug">
                      Other Countries
                    </span>
                    <span className="text-xs text-gray-400 block font-medium">
                      Card & International Checkout ($1.99)
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/10 text-gray-300 flex items-center justify-center shrink-0 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            </div>

            {/* Footer Trust Indicator */}
            <div className="flex items-center justify-center gap-2 pt-3 border-t border-white/5 text-gray-400 text-xs font-medium">
              <ShieldCheck size={14} className="text-yellow-500" />
              <span>Instant Setup & 24/7 Access Guarantee</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
