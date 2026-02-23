import { useState, useEffect } from 'react';

export interface BrowserState {
  isSafari: boolean;
  isChrome: boolean;
  isFirefox: boolean;
  isIPad: boolean; // Added for tablet-specific Safari
  isIOS: boolean;  // True for iPhone/iPad
  version: string | null;
}

export default function useBrowser(): BrowserState {
  const [browserInfo, setBrowserInfo] = useState<BrowserState>({
    isSafari: false,
    isChrome: false,
    isFirefox: false,
    isIPad: false,
    isIOS: false,
    version: null,
  });

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const vendor = navigator.vendor.toLowerCase();
    
    // 1. Basic Platform Detection
    const isApple = /apple/i.test(vendor);
    const isIPhone = /iphone|ipod/.test(ua);
    
    // 2. The iPad "Secret" Logic
    // If it's a Mac Intel but has touch points, it's an iPad
    const isIPad = /ipad/.test(ua) || 
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    const isIOS = isIPhone || isIPad;

    // 3. Browser Engine Detection
    const containsSafari = ua.includes('safari');
    const containsChrome = ua.includes('chrome') || ua.includes('crios');
    const containsFirefox = ua.includes('firefox') || ua.includes('fxios');

    // Genuine Safari (Not Chrome/Firefox on iOS)
    const isSafari = isApple && containsSafari && !containsChrome && !containsFirefox;

    // 4. Version Extraction
    const versionMatch = ua.match(/version\/(\d+(\.\d+)?)/);
    const version = isSafari && versionMatch ? versionMatch[1] : null;

    setBrowserInfo({
      isSafari,
      isChrome: containsChrome,
      isFirefox: containsFirefox,
      isIPad,
      isIOS,
      version,
    });
  }, []);

  return browserInfo;
}
