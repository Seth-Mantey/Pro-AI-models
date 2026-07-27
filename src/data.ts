/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Feature, Benefit, Step, Testimonial, FAQItem } from "./types";

export const WHATSAPP_NUMBER = "233549535810";
export const WHATSAPP_PREFILLED_MESSAGE = 
  "Hi SETEE CONCEPTS 👋,\n\nI've gone through everything on your landing page and I'm ready to get access.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PREFILLED_MESSAGE)}`;
export const GHANA_WHATSAPP_URL = WHATSAPP_URL;
export const WHATSAPP_DIRECT_URL = WHATSAPP_URL;

export const FEATURES: Feature[] = [
  {
    id: "content-creation",
    title: "Create Content 10x Faster",
    description: "Write premium social media copies, high-converting WhatsApp ads, articles, scripts, and product reviews in seconds.",
    longDescription: "Unleash human-grade copywriting instantly. Perfect for ambitious content creators, business owners, and freelancers who want to capture attention and scale their online sales effortlessly.",
    iconName: "Sparkles",
    badge: "Most Popular"
  },
  {
    id: "research",
    title: "Research Efficiently",
    description: "Analyze dense materials, summarize academic PDFs, verify facts, and get clear answers to complex questions immediately.",
    longDescription: "Whether you are a university student, researcher, or working professional, get accurate summaries and analytical breakdowns in seconds without reading hundreds of pages.",
    iconName: "SearchCode"
  },
  {
    id: "ideation",
    title: "Generate Fresh Ideas",
    description: "Break through creative blocks. Brainstorm business strategies, marketing campaigns, catchy names, and viral trends.",
    longDescription: "Never stare at a blank screen again. Get high-converting WhatsApp Status ideas, product mockups ideas, and creative solutions specifically tailored to your target audience.",
    iconName: "Lightbulb"
  },
  {
    id: "productivity",
    title: "Improve Daily Productivity",
    description: "Draft professional emails, organize detailed schedules, write code, debug scripts, and translate multi-lingual texts instantly.",
    longDescription: "Empower your workflow. Hand over your repetitive daily tasks to your browser-based AI workspace and focus purely on high-leverage execution.",
    iconName: "Zap",
    badge: "Essential"
  },
  {
    id: "task-completion",
    title: "Complete Tasks Instantly",
    description: "Automate complex calculations, design spreadsheets, format unorganized text, and solve tricky problems in real-time.",
    longDescription: "A reliable workspace helper on call 24/7. Execute complex tasks, analyze datasets, and export ready-to-use professional deliverables with simple commands.",
    iconName: "CheckCircle2"
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "email-login",
    title: "Login Using Your Own Email",
    description: "No complex username setups. Access the platform securely and natively with your personal email address.",
    iconName: "Mail"
  },
  {
    id: "cross-platform",
    title: "Works on Phone and PC",
    description: "Seamless synchronization across Android, iPhone, Windows, and macOS devices. Your workflow goes wherever you go.",
    iconName: "MonitorPhone"
  },
  {
    id: "browser-based",
    title: "Browser-Based Access",
    description: "No installation required. No heavy application files. Everything works securely through any web browser.",
    iconName: "Globe"
  },
  {
    id: "instant-activation",
    title: "Instant Access After Payment",
    description: "No waiting for days. Once payment is confirmed, your official access link and Prompt Bible are delivered in under 5 minutes.",
    iconName: "Flame"
  },
  {
    id: "prompt-bible",
    title: "Prompt Bible Bonus Included",
    description: "Gain immediate access to our secret directory of high-converting, copy-paste prompts designed to get elite results.",
    iconName: "BookOpenCheck"
  },
  {
    id: "customer-support",
    title: "Dedicated Support Team",
    description: "Experience professional, direct WhatsApp support to assist you with onboarding, setups, or questions at any time.",
    iconName: "Headset"
  }
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Make Secure Payment",
    description: "Initiate our fast WhatsApp-based checkout. We will guide you through our convenient, secure payment options.",
    iconName: "WalletCards"
  },
  {
    number: 2,
    title: "Receive Access Link",
    description: "Receive your premium web link, quick setup instructions, and the valuable Premium Prompt Bible bonus on WhatsApp.",
    iconName: "KeyRound"
  },
  {
    number: 3,
    title: "Access with Your Own Email",
    description: "Access the official web platform link using your browser, and securely sign in with your personal email.",
    iconName: "UserCheck"
  },
  {
    number: 4,
    title: "Start Using Premium AI Tools",
    description: "Enjoy instant, unlimited capabilities. Boost your school, business, creation, or professional workflow in real-time.",
    iconName: "Sparkles"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Pretty Tammy",
    rating: 5,
    review: "I was skeptical at first because there are many scams online. I decided to try it and everything worked exactly as described. I received my access, the Prompt Bible and instructions on how to use everything.",
    avatarLetter: "P"
  },
  {
    id: "t2",
    name: "Fizzy Fortune",
    rating: 5,
    review: "I received my access and everything is working perfectly. The process was simple and straightforward.",
    avatarLetter: "F"
  },
  {
    id: "t3",
    name: "Iloh Chinemerem",
    rating: 5,
    review: "I got access today and I am already enjoying the platform. Everything was easy to set up.",
    avatarLetter: "I"
  },
  {
    id: "t4",
    name: "Segun Ajibode",
    rating: 5,
    review: "The package is very useful. The Prompt Bible is valuable and the platform has made my workflow easier.",
    avatarLetter: "S"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-how-receive",
    question: "How do I receive access?",
    answer: "After completing your payment via WhatsApp, our support agent will instantly send the official web link and your Premium Prompt Bible directly in our WhatsApp conversation."
  },
  {
    id: "faq-how-login",
    question: "How do I login?",
    answer: "Simply visit the premium web-based URL we send you in any browser, and log in directly using your personal email. No complex configurations or extra credentials are required."
  },
  {
    id: "faq-phone-use",
    question: "Can I use it on my phone?",
    answer: "Yes! It is fully responsive and works perfectly on all mobile browsers on both Android phones and iPhones with no slow-downs."
  },
  {
    id: "faq-computer-use",
    question: "Can I use it on my computer?",
    answer: "Absolutely. The platform runs beautifully on Windows PCs, Macs, Chromebooks, and laptops. All you need is a browser like Chrome, Safari, or Edge."
  },
  {
    id: "faq-how-fast",
    question: "How fast do I get access?",
    answer: "Onboarding is exceptionally fast. As soon as you send your payment receipt screenshot to our WhatsApp support, we will verify it and send your premium access link in under 5 minutes."
  }
];
