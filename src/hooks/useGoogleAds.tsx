import { useEffect } from 'react';

// Type declarations for Google Ads gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

export const useGoogleAds = (conversionId?: string) => {
  useEffect(() => {
    // Initialize gtag if conversion ID is provided
    if (conversionId && !window.gtag) {
      // Create dataLayer
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer?.push(arguments);
      };
      window.gtag('js', new Date() as any);
      
      // Load Google Ads script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`;
      document.head.appendChild(script);
      
      // Configure Google Ads
      window.gtag('config', conversionId);
    }
  }, [conversionId]);

  const trackConversion = (conversionLabel: string, value?: number) => {
    if (!window.gtag) {
      console.warn('Google Ads gtag not initialized');
      return;
    }

    const conversionData: Record<string, any> = {
      'send_to': conversionLabel,
    };

    // Add conversion value if provided
    if (value !== undefined) {
      conversionData['value'] = value;
      conversionData['currency'] = 'EUR';
    }

    window.gtag('event', 'conversion', conversionData);
    console.log('Google Ads conversion tracked:', conversionLabel, value);
  };

  return { trackConversion };
};
