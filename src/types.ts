/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Feature {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // Used to dynamic map Lucide icons
  badge?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  rating: number; // e.g. 5
  review: string;
  avatarLetter: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
