/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import LucideIcon from "./LucideIcon";
import { WHATSAPP_URL } from "../data";
import { trackGetAccessClick } from "../analytics";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
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
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0D14]/80 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:border-yellow-500/50 transition-all">
              <LucideIcon name="Sparkles" className="text-yellow-500" size={18} />
            </div>
            <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-yellow-400 transition-colors">
              SETEE CONCEPTS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("flyer")}
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer font-bold text-yellow-500"
            >
              PRO Version
            </button>
            <button
              onClick={() => scrollToSection("what-you-get")}
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              What's Included
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Why SETEE
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Right Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackGetAccessClick("header_desktop")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-semibold transition-all shadow-md shadow-yellow-500/10 hover:shadow-yellow-500/20 active:scale-95 cursor-pointer"
            >
              <LucideIcon name="Mail" size={16} />
              <span>Get Access</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <LucideIcon name={isOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card border-b border-white/10 py-6 px-4 flex flex-col gap-4 animate-fade-in">
          <button
            onClick={() => scrollToSection("flyer")}
            className="text-left py-2 px-3 rounded-lg text-yellow-500 font-bold hover:bg-white/5 transition-all"
          >
            PRO Version
          </button>
          <button
            onClick={() => scrollToSection("what-you-get")}
            className="text-left py-2 px-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-all"
          >
            What's Included
          </button>
          <button
            onClick={() => scrollToSection("why-choose-us")}
            className="text-left py-2 px-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-all"
          >
            Why SETEE
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-left py-2 px-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-all"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-left py-2 px-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-all"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-left py-2 px-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-all"
          >
            FAQ
          </button>
          <hr className="border-white/5 my-2" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setIsOpen(false);
              trackGetAccessClick("header_mobile");
            }}
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition-all shadow-md cursor-pointer"
          >
            <LucideIcon name="Mail" size={18} />
            <span>Get Access</span>
          </a>
        </div>
      )}
    </header>
  );
}
