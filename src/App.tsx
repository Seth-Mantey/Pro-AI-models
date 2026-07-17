/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import FlyerSection from "./components/FlyerSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Comparison from "./components/Comparison";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-white selection:bg-yellow-500/30 selection:text-yellow-200">
      {/* Premium Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Interactive Digital Package Flyer */}
      <FlyerSection />

      {/* Key Benefits and What's Included */}
      <Features />

      {/* Simple Onboarding Timeline */}
      <HowItWorks />

      {/* High-Contrast Cost Comparison */}
      <Comparison />

      {/* Verified Client Reviews */}
      <Testimonials />

      {/* Collapsible FAQ Section */}
      <FAQ />

      {/* Footer & Final Closing Conversion Block */}
      <Footer />

      {/* Mobile-Only Floating Action Sticky Bar */}
      <StickyCTA />
    </div>
  );
}

