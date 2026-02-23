import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../lib/firebase';
import { logEvent, isSupported } from 'firebase/analytics';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!analytics) return;

    isSupported().then(yes => {
      if (yes) {
        logEvent(analytics!, 'page_view', {
          page_path: location.pathname,
          page_title: document.title
        });
      }
    });
  }, [location]);

  const trackClick = (elementName: string) => {
    if (!analytics) return;

    isSupported().then(yes => {
      if (yes) {
        logEvent(analytics!, 'select_content', {
          content_type: 'button',
          item_id: elementName
        });
      }
    });
  };

  return { trackClick };
};
