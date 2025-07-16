import type { App } from 'vue';
import { config } from '@/config';

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

function addGtagScript() {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.google_analytics.measurement_id}`;
  document.head.appendChild(script);
}

function initializeGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: any[]) => {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
}

export const gtag = {
  install: (app: App) => {
    if (!config.google_analytics.isTrackerEnabled) {
      window.gtag = () => {};
      app.provide('gtag', window.gtag);
      return;
    }

    addGtagScript();
    initializeGtag();

    window.gtag('config', config.google_analytics.measurement_id);

    app.provide('gtag', window.gtag);
  },
}; 