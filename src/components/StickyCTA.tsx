/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useAccessModal } from "../context/AccessModalContext";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { openAccessModal } = useAccessModal();

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 26 }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden max-w-sm mx-auto"
        >
          <button
            onClick={openAccessModal}
            className="w-full flex items-center justify-between gap-4 px-5 py-3.5 rounded-2xl bg-yellow-500 text-black shadow-[0_12px_40px_-8px_rgba(234,179,8,0.35)] active:scale-[0.97] transition-all border border-yellow-400 select-none animate-none cursor-pointer"
          >
            <div className="flex items-center gap-2.5 text-left">
              <div className="w-9 h-9 rounded-xl bg-black/10 flex items-center justify-center shrink-0">
                <MessageCircle size={18} fill="currentColor" className="text-black" />
              </div>
              <div>
                <span className="text-xs block font-black uppercase tracking-wider leading-none">SETEE CONCEPTS</span>
                <span className="text-[10px] block font-semibold text-black/75 mt-1 leading-none">Get Access in 5 Mins</span>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-black text-yellow-400 px-3.5 py-2 rounded-xl text-xs font-black shadow-md tracking-tight whitespace-nowrap">
              <span>Get Access</span>
              <ArrowRight size={12} strokeWidth={3} />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
