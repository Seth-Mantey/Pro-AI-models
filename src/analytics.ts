/// <reference types="vite/client" />

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Global Analytics Configuration & Helper Utilities
 * Google Analytics 4 (GA4) & Microsoft Clarity Integration
 * 
 * Tracking IDs can be configured directly below or provided via environment variables:
 * - VITE_GA_MEASUREMENT_ID
 * - VITE_CLARITY_PROJECT_ID
 */

export const GA_MEASUREMENT_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string) || "G-XXXXXXXXXX";

export const CLARITY_PROJECT_ID =
  (import.meta.env.VITE_CLARITY_PROJECT_ID as string) || "XXXXXXXXXX";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    clarity: (...args: any[]) => void;
  }
}

/**
 * Initializes GA4 and Microsoft Clarity tracking scripts.
 * Runs once at application startup.
 */
export function initAnalytics() {
  if (typeof window === "undefined") return;

  // Ensure dataLayer & gtag stub exist
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  // 1. Initialize Google Analytics 4 (GA4)
  if (GA_MEASUREMENT_ID && !document.getElementById("ga-gtag-script")) {
    const script = document.createElement("script");
    script.id = "ga-gtag-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: true,
    });
  }

  // 2. Initialize Microsoft Clarity
  if (CLARITY_PROJECT_ID && !document.getElementById("clarity-script")) {
    (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.id = "clarity-script";
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      if (y && y.parentNode) {
        y.parentNode.insertBefore(t, y);
      } else {
        document.head.appendChild(t);
      }
    })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
  }
}

/**
 * Track the custom event 'get_access_clicked'
 * @param location Description of where the button was clicked (e.g., 'hero', 'header', 'footer', 'sticky_cta')
 */
export function trackGetAccessClick(location?: string) {
  if (typeof window === "undefined") return;

  // Track event in GA4
  if (typeof window.gtag === "function") {
    window.gtag("event", "get_access_clicked", {
      event_category: "engagement",
      event_label: location || "get_access_button",
      cta_location: location || "get_access_button",
    });
  }

  // Track event in Microsoft Clarity
  if (typeof window.clarity === "function") {
    window.clarity("event", "get_access_clicked");
  }
}

/**
 * Tracks explicit page views if needed
 */
export function trackPageView(pagePath?: string) {
  if (typeof window === "undefined") return;

  const path = pagePath || window.location.pathname;

  if (typeof window.gtag === "function" && GA_MEASUREMENT_ID) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
}
