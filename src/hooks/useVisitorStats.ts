import { useState, useEffect, useCallback } from 'react';
import { db } from '../lib/firebase';
import { doc, getDoc, setDoc, updateDoc, increment, onSnapshot } from 'firebase/firestore';

export const useVisitorStats = () => {
  const [stats, setStats] = useState({ views: 0, interactions: 0 });

  useEffect(() => {
	if(!db) return;
    const statsDoc = doc(db, 'analytics', 'global');

    // Increment view count on mount (only once per session)
    const incrementViews = async () => {
      const sessionKey = 'has_visited_session';
      if (sessionStorage.getItem(sessionKey)) return;

      try {
        const docSnap = await getDoc(statsDoc);
        if (docSnap.exists()) {
          await updateDoc(statsDoc, { views: increment(1) });
        } else {
          await setDoc(statsDoc, { views: 1, interactions: 0 });
        }
        sessionStorage.setItem(sessionKey, 'true');
      } catch (e) {
        // Silently fail to not disrupt user experience
        console.warn("Analytics update skipped:", e);
      }
    };

    incrementViews();

    // Listen for real-time updates
    const unsubscribe = onSnapshot(statsDoc, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setStats({
            views: data.views || 0,
            interactions: data.interactions || 0
        });
      }
    }, (error) => {
        console.warn("Analytics listener error:", error);
    });

    return () => unsubscribe();
  }, []);

  const trackInteraction = useCallback(async () => {
	if(!db) return;

    const statsDoc = doc(db, 'analytics', 'global');
    try {
      await updateDoc(statsDoc, { interactions: increment(1) });
    } catch (e) {
      console.warn("Interaction tracking skipped:", e);
    }
  }, []);

  return { stats, trackInteraction };
};
