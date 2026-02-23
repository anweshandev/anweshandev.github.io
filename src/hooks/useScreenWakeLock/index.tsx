import { useEffect, useState, useCallback } from 'react';

/**
 * Custom hook to prevent screen dimming and return the active status.
 * @returns {boolean} isActive - Whether the screen wake lock is currently held.
 */
export const useScreenWakeLock = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [sentinel, setSentinel] = useState<WakeLockSentinel | null>(null);

  const requestWakeLock = useCallback(async () => {
    if ('wakeLock' in navigator && document.visibilityState === 'visible') {
      try {
        const lock = await navigator.wakeLock.request('screen');
        
        // Listen for system-initiated releases
        lock.addEventListener('release', () => {
          setIsActive(false);
          setSentinel(null);
        });

        setSentinel(lock);
        setIsActive(true);
      } catch (err) {
        console.error('Wake Lock Request Failed:', err);
        setIsActive(false);
      }
    }
  }, []);

  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible') {
        await requestWakeLock();
      } else if (sentinel) {
        // The browser usually handles this, but explicit release is cleaner
        await sentinel.release();
        setSentinel(null);
        setIsActive(false);
      }
    };

    requestWakeLock();

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      sentinel?.release();
    };
  }, [requestWakeLock, sentinel]);

  return isActive;
};
