/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import LucideIcon from "./LucideIcon";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] radial-glow-green opacity-20 pointer-events-none filter blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] radial-glow opacity-25 pointer-events-none filter blur-[90px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-display text-xs font-bold text-yellow-500 uppercase tracking-widest mb-3">
            VERIFIED SUCCESS
          </h2>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Loved by Real Users
          </p>
          <p className="text-gray-400 text-base mt-4 max-w-2xl mx-auto">
            Read authentic reviews from customers who purchased their premium access directly through our WhatsApp checkout system.
          </p>
        </div>

        {/* Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-8 border border-white/5 flex flex-col justify-between text-left relative group hover:border-yellow-500/20 transition-all duration-300"
            >
              {/* Double quotes decoration */}
              <div className="absolute top-6 right-8 text-6xl font-serif text-white/[0.03] select-none pointer-events-none leading-none">
                “
              </div>

              <div>
                {/* 5 Stars indicator */}
                <div className="flex items-center gap-1 mb-4 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>
                      <LucideIcon name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                    </span>
                  ))}
                </div>

                <p className="text-gray-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{testimonial.review}"
                </p>
              </div>

              {/* User Identity Profile */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/10 border border-yellow-500/30 flex items-center justify-center font-display font-bold text-yellow-400">
                  {testimonial.avatarLetter}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base tracking-tight">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                      Verified Purchaser
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom review badge */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-500 inline-flex items-center gap-2 bg-[#0F131E] border border-white/5 px-4 py-2 rounded-full">
            <LucideIcon name="ShieldCheck" size={12} className="text-green-500" />
            <span>All reviews are from customers who paid and received active access credentials.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
