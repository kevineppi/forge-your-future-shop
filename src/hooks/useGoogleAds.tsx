import { useEffect } from 'react';

// Type declarations for Google gtag (Analytics & Ads)
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

export const useGoogleAds = (adsConversionId?: string) => {
  useEffect(() => {
    // gtag is already loaded via index.html for GA4
    // Only configure Google Ads if conversion ID is provided
    if (adsConversionId && window.gtag && adsConversionId.startsWith('AW-')) {
      window.gtag('config', adsConversionId);
    }
  }, [adsConversionId]);

  const trackConversion = (conversionLabel: string, value?: number) => {
    if (!window.gtag) {
      console.warn('Google gtag not initialized');
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
