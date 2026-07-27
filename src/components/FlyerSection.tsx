/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { WHATSAPP_URL } from "../data";
import { trackGetAccessClick } from "../analytics";
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  Headset, 
  BookOpen, 
  Brain, 
  Lightbulb, 
  Check, 
  ArrowRight,
  Flame,
  MousePointerClick,
  MessageCircle
} from "lucide-react";

export default function FlyerSection() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const tools = [
    {
      name: "ChatGPT PRO",
      badge: "PRO",
      badgeColor: "bg-[#10A37F]/10 text-[#10A37F] border-[#10A37F]/20",
      description: "Advanced AI for writing, ideas, and everything in between.",
      iconBg: "bg-[#10A37F]/10 text-[#10A37F] border-[#10A37F]/20"
    },
    {
      name: "Claude PRO",
      badge: "PRO",
      badgeColor: "bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20",
      description: "Smart, fast, and reliable AI assistant for complex tasks.",
      iconBg: "bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20"
    },
    {
      name: "Gemini PRO",
      badge: "PRO",
      badgeColor: "bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/20",
      description: "Google's next-gen AI for deep research and creativity.",
      iconBg: "bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/20"
    },
    {
      name: "Grok PRO",
      badge: "PRO",
      badgeColor: "bg-white/10 text-white border-white/20",
      description: "Real-time AI with a bold edge and unique perspective.",
      iconBg: "bg-white/5 text-white border-white/10"
    }
  ];

  return (
    <section id="flyer" className="py-20 md:py-28 relative overflow-hidden bg-[#070A0F]">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] radial-glow opacity-30 pointer-events-none filter blur-[120px] z-0" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] radial-glow-blue opacity-20 pointer-events-none filter blur-[100px] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title resembling flyer top */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-yellow-500 font-display font-black text-sm uppercase tracking-widest block mb-4">
            GET UNLIMITED ACCESS TO THE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none uppercase">
            PRO VERSION <br className="sm:hidden" /> OF <span className="text-yellow-400 font-extrabold">TOP AI TOOLS</span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl font-medium mt-6 leading-relaxed max-w-3xl mx-auto border-t border-b border-white/10 py-4">
            One membership. All the premium AI you need. <span className="text-yellow-400">No limits. No extra cost.</span>
          </p>
        </div>

        {/* FLYER CONTAINER SHEET (Glossy, high-contrast, physical look) */}
        <div className="max-w-5xl mx-auto bg-[#0B101D] border-2 border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl shadow-yellow-500/[0.03]">
          
          {/* Top light glow reflection */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* HUGE YELLOW PRICE BADGE (matches the physical flyer) */}
          <div className="absolute top-6 right-6 lg:top-8 lg:right-12 z-20 flex flex-col items-center justify-center bg-yellow-400 text-black w-28 h-28 sm:w-36 sm:h-36 rounded-full font-display border-4 border-black shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 select-none">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-black/80">ONLY</span>
            <span className="text-3xl sm:text-5xl font-black leading-none flex items-start">
              1.99
              <span className="text-base sm:text-xl font-bold ml-0.5">$</span>
            </span>
            <div className="w-10 sm:w-12 h-0.5 bg-black/40 my-0.5 sm:my-1" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">ONE TIME</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mt-8 lg:mt-4">
            
            {/* LEFT COLUMN: THE PREMIUM TOOLS LIST */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <h3 className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                  <span>PREMIUM POWER SUITE INCLUDED:</span>
                </h3>

                <div className="space-y-3">
                  {tools.map((tool, idx) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-4 hover:border-white/10 hover:bg-white/[0.05] transition-all"
                    >
                      {/* Logo container */}
                      <div className={`w-10 h-10 rounded-lg ${tool.iconBg} flex items-center justify-center border shrink-0 text-lg font-black`}>
                        {tool.name.charAt(0)}
                      </div>

                      {/* Info block */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-white text-sm sm:text-base tracking-tight">{tool.name}</h4>
                          <span className={`text-[9px] font-black tracking-widest px-1.5 py-0.5 rounded border uppercase ${tool.badgeColor}`}>
                            {tool.badge}
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs mt-1 leading-relaxed">{tool.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* UNLIMITED MEMBERSHIP FOOTER CARD */}
              <div className="p-5 rounded-2xl bg-yellow-500/5 border border-yellow-500/10 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">ONE MEMBERSHIP. UNLIMITED ACCESS.</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Perfect for content creators, marketers, copywriters, researchers, students, and digital professionals. No usage caps, limits, or hidden fees.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: PROMPT BIBLE BONUS */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              {/* EXCLUSIVE BONUS CONTAINER */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#141A29] to-[#0E1320] border-2 border-yellow-500/30 p-6 sm:p-8 flex flex-col justify-between h-full shadow-lg">
                
                {/* Visual badge top */}
                <div className="self-start bg-yellow-500 text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-md mb-6">
                  EXCLUSIVE BONUS
                </div>

                <div className="text-left">
                  <div className="flex items-baseline gap-2">
                    <span className="text-red-500 text-5xl font-black tracking-tight uppercase">FREE</span>
                    <span className="text-white text-lg font-bold tracking-tight">PROMPT BIBLE INCLUDED</span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm mt-3 leading-relaxed">
                    Get the Prompt Bible — our ultimate collection of powerful AI prompts — <span className="text-yellow-400 font-semibold">absolutely FREE</span> when you choose this package!
                  </p>
                </div>

                {/* VISUAL 3D BOOK MOCKUP (crafted fully in CSS/Tailwind with Framer Motion) */}
                <div 
                  className="my-8 flex flex-col items-center justify-center select-none cursor-pointer"
                  onMouseEnter={() => setIsBookOpen(true)}
                  onMouseLeave={() => setIsBookOpen(false)}
                  onClick={() => setIsBookOpen(!isBookOpen)}
                >
                  <div className="relative" style={{ perspective: "1500px" }}>
                    
                    {/* Shadow underneath */}
                    <motion.div 
                      className="absolute -inset-2 bg-yellow-500/20 rounded-xl blur-xl"
                      animate={{ 
                        opacity: isBookOpen ? 0.6 : [0.4, 0.7, 0.4],
                        scale: isBookOpen ? 1.08 : [0.96, 1.05, 0.96]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: isBookOpen ? 0 : Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Book Cover & Pages Stack */}
                    <div className="relative w-44 h-60 sm:w-48 sm:h-64" style={{ transformStyle: "preserve-3d" }}>
                      
                      {/* PAGE 3 (BACK COVER/INSIDE BACK - Golden) */}
                      <div 
                        className="absolute inset-0 rounded-r-xl bg-gradient-to-br from-yellow-400 to-yellow-600 border border-yellow-500/30 flex flex-col justify-between p-4 shadow-[inset_10px_0_20px_rgba(0,0,0,0.3),0_4px_20px_rgba(0,0,0,0.5)]"
                        style={{ 
                          transformOrigin: "left center",
                          transform: "rotateY(-5deg) translateZ(-6px)",
                        }}
                      >
                        {/* Book spine shadow inside */}
                        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
                        
                        <div className="flex flex-col h-full justify-between text-yellow-950 p-1">
                          <div className="text-center">
                            <span className="text-[7px] font-mono tracking-widest font-bold uppercase opacity-80">COMPLETE SUITE</span>
                            <div className="w-8 h-0.5 bg-yellow-950/20 mx-auto my-1" />
                          </div>
                          
                          <div className="my-auto space-y-1 text-center">
                            <div className="text-[10px] font-black uppercase tracking-tight">UNLIMITED ACCESS</div>
                            <div className="text-[8px] font-medium leading-tight opacity-90">
                              Direct premium interface. No credit cards or complicated installations.
                            </div>
                          </div>
                          
                          <div className="border-t border-yellow-950/20 pt-1.5 text-center">
                            <div className="text-[8px] font-extrabold uppercase bg-black text-yellow-400 px-1 py-0.5 rounded-md inline-block">
                              PRO ONLY
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* PAGE 2 (Middle Page - Cream) */}
                      <motion.div 
                        className="absolute inset-0 rounded-r-xl bg-gradient-to-br from-white via-yellow-50/50 to-yellow-100/50 border-y border-r border-amber-900/10 flex flex-col justify-between p-4 shadow-[inset_10px_0_15px_rgba(0,0,0,0.1),0_4px_15px_rgba(0,0,0,0.15)]"
                        style={{ transformOrigin: "left center" }}
                        animate={{ 
                          rotateY: isBookOpen ? -45 : 0,
                          translateZ: isBookOpen ? -2 : -4,
                        }}
                        transition={{ type: "spring", stiffness: 180, damping: 20 }}
                      >
                        {/* Spine curve */}
                        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/25 via-black/5 to-transparent" />
                        
                        <div className="flex flex-col h-full justify-between text-slate-800 font-sans">
                          <div>
                            <div className="flex items-center justify-between text-[6px] font-mono text-amber-800 tracking-wider font-bold">
                              <span>CHAPTER 02</span>
                              <span>SECRET CODES</span>
                            </div>
                            <div className="h-px bg-amber-900/10 mt-1" />
                          </div>
                          
                          <div className="my-auto space-y-1.5 text-left pl-2">
                            <div className="text-[8px] font-black text-amber-900 uppercase">🔥 PROMPT BLUEPRINTS:</div>
                            <ul className="text-[7px] font-semibold text-slate-600 space-y-1">
                              <li className="flex items-center gap-1">
                                <span className="text-amber-600">▪</span> 10x Productive Coding
                              </li>
                              <li className="flex items-center gap-1">
                                <span className="text-amber-600">▪</span> Human-Like Articles
                              </li>
                              <li className="flex items-center gap-1">
                                <span className="text-amber-600">▪</span> High-Conversion Sales
                              </li>
                              <li className="flex items-center gap-1">
                                <span className="text-amber-600">▪</span> Viral Copy Formula
                              </li>
                            </ul>
                          </div>

                          <div className="text-[6px] text-slate-400 text-center font-mono font-bold">
                            PAGE 37
                          </div>
                        </div>
                      </motion.div>

                      {/* PAGE 1 (First Page Inside - Cream) */}
                      <motion.div 
                        className="absolute inset-0 rounded-r-xl bg-gradient-to-br from-white to-yellow-50/70 border-y border-r border-amber-900/10 flex flex-col justify-between p-4 shadow-[inset_10px_0_15px_rgba(0,0,0,0.15),0_4px_15px_rgba(0,0,0,0.2)]"
                        style={{ transformOrigin: "left center" }}
                        animate={{ 
                          rotateY: isBookOpen ? -90 : 0,
                          translateZ: isBookOpen ? 2 : -2,
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 22 }}
                      >
                        {/* Spine curve */}
                        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/30 via-black/5 to-transparent" />
                        
                        <div className="flex flex-col h-full justify-between text-slate-800 font-sans">
                          <div>
                            <div className="flex items-center justify-between text-[6px] font-mono text-amber-800 tracking-wider font-bold">
                              <span>CHAPTER 01</span>
                              <span>SYSTEM PROMPTING</span>
                            </div>
                            <div className="h-px bg-amber-900/10 mt-1" />
                          </div>
                          
                          <div className="my-auto text-left pl-1 bg-slate-50 border border-slate-100 p-1.5 rounded-md font-mono text-[6px] leading-relaxed text-slate-600">
                            <span className="text-amber-800 font-bold">{"{ system }"}</span><br />
                            Role: Senior Marketer<br />
                            Goal: High click-through CTR<br />
                            Output: 5 hook versions<br />
                            Tone: Urgent, persuasive
                          </div>

                          <div className="text-[6px] text-slate-400 text-center font-mono font-bold">
                            PAGE 01
                          </div>
                        </div>
                      </motion.div>

                      {/* FRONT COVER (Animated to rotateY wide open) */}
                      <motion.div
                        className="absolute inset-0 rounded-r-2xl bg-gradient-to-br from-[#0E121B] via-[#141A29] to-[#1F273D] border-y border-r border-white/10 flex flex-col justify-between p-5 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                        style={{ 
                          transformOrigin: "left center",
                          backfaceVisibility: "hidden", // perfectly hides itself when flipped fully so we see page 1 cleanly
                        }}
                        animate={{ 
                          rotateY: isBookOpen ? -135 : [0, -4, 0],
                          translateZ: isBookOpen ? 6 : 0,
                        }}
                        transition={{ 
                          rotateY: isBookOpen 
                            ? { type: "spring", stiffness: 180, damping: 22 }
                            : { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                          default: { type: "spring", stiffness: 180, damping: 22 }
                        }}
                      >
                        {/* Book spine line overlay */}
                        <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/60 via-transparent to-black/30 rounded-l-sm" />
                        
                        {/* Top Brain Indicator */}
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] font-mono tracking-widest text-gray-500 uppercase">THE PORTABLE WORKSPACE</span>
                          <Brain size={16} className="text-yellow-400 animate-pulse" />
                        </div>

                        {/* Main Title */}
                        <div className="text-center my-auto px-1">
                          <span className="text-yellow-400 text-[10px] font-extrabold uppercase tracking-widest block mb-1">THE</span>
                          <h4 className="text-white text-xl sm:text-2xl font-black tracking-tight leading-none uppercase">
                            PROMPT <br />
                            <span className="text-yellow-400 font-black">BIBLE</span>
                          </h4>
                          <div className="w-12 h-0.5 bg-yellow-500/50 mx-auto mt-2.5" />
                          <span className="text-[8px] text-gray-400 mt-2 block tracking-tight leading-tight">
                            The Ultimate Collection of Powerful AI Prompts
                          </span>
                        </div>

                        {/* Bottom Book Badges */}
                        <div className="grid grid-cols-4 gap-1 border-t border-white/5 pt-2.5 text-[6px] text-center text-gray-400 font-semibold uppercase tracking-tighter">
                          <div className="flex flex-col items-center">
                            <Zap size={8} className="text-yellow-500 mb-0.5" />
                            <span>Boost</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <Check size={8} className="text-green-500 mb-0.5" />
                            <span>Results</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <Lightbulb size={8} className="text-amber-500 mb-0.5" />
                            <span>Creative</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <BookOpen size={8} className="text-blue-500 mb-0.5" />
                            <span>Save Time</span>
                          </div>
                        </div>
                      </motion.div>

                    </div>
                  </div>

                  {/* Micro Hint Badge Underneath */}
                  <div className="mt-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono tracking-wider text-yellow-400 uppercase select-none shadow-md">
                    <span>{isBookOpen ? "📖 TAP OR HOVER TO CLOSE" : "✨ TAP OR HOVER TO OPEN & READ"}</span>
                  </div>
                </div>

                {/* Sub Features Grid */}
                <div className="grid grid-cols-2 gap-2 text-left pt-2 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-gray-300">
                    <span className="text-yellow-500">✔</span>
                    <span>Boost Productivity</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-300">
                    <span className="text-yellow-500">✔</span>
                    <span>Get Better Results</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-300">
                    <span className="text-yellow-500">✔</span>
                    <span>Creative Ideas</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-300">
                    <span className="text-yellow-500">✔</span>
                    <span>Save Time Everyday</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* BOTTOM ASSURANCES BADGES ROW */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/5">
            <div className="flex items-center justify-center gap-2.5 text-xs text-gray-300">
              <ShieldCheck className="text-yellow-500 shrink-0" size={16} />
              <span className="font-semibold">Secure Access</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-xs text-gray-300">
              <Flame className="text-yellow-500 shrink-0" size={16} />
              <span className="font-semibold">Instant Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-xs text-gray-300">
              <RefreshCw className="text-yellow-500 shrink-0" size={16} />
              <span className="font-semibold">Regular Updates</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-xs text-gray-300">
              <Headset className="text-yellow-500 shrink-0" size={16} />
              <span className="font-semibold">24/7 Dedicated Support</span>
            </div>
          </div>

        </div>

        {/* BOTTOM FINAL CONVERSION BLOCK & CALL TO ACTION */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-5"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackGetAccessClick("flyer_section")}
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-10 py-4.5 sm:py-5 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-black text-sm sm:text-base lg:text-lg font-black tracking-tight transition-all shadow-xl shadow-yellow-500/10 hover:shadow-yellow-500/25 active:scale-[0.98] text-center shrink-0 select-none border border-yellow-400/50 cursor-pointer"
            >
              <MessageCircle size={20} fill="currentColor" className="shrink-0" />
              <span className="whitespace-nowrap uppercase">GET UNLIMITED PRO ACCESS NOW!</span>
              <ArrowRight size={20} className="shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="text-gray-400 text-sm font-semibold tracking-wide flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <span>ALL IN ONE. ALL FOR</span>
              <span className="text-yellow-400 font-black text-base">$1.99!</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
