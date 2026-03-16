import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { doc, getDoc, setDoc, updateDoc, increment, onSnapshot } from 'firebase/firestore';

export const useVisitorStats = () => {
  const [stats, setStats] = useState({ views: 0, interactions: 0 });

  useEffect(() => {
	if(typeof db === "undefined") return () => {};
    const statsDoc = doc(db, 'analytics', 'global');

    // Increment view count on mount (only once per session)
    const incrementViews = async () => {
      const sessionKey = 'has_visited_session';
      if (!sessionStorage.getItem(sessionKey)) {
        try {
          const docSnap = await getDoc(statsDoc);
          if (docSnap.exists()) {
            await updateDoc(statsDoc, { views: increment(1) });
          } else {
            await setDoc(statsDoc, { views: 1, interactions: 0 });
          }
          sessionStorage.setItem(sessionKey, 'true');
        } catch (e) {
          console.error("Error updating stats:", e);
        }
      }
    };

    incrementViews();

    // Listen for real-time updates
    const unsubscribe = onSnapshot(statsDoc, (doc) => {
      if (doc.exists()) {
        setStats(doc.data() as { views: number, interactions: number });
      }
    });

    return () => unsubscribe();
  }, []);

  const trackInteraction = async () => {
	if(typeof db === "undefined") return;

    const statsDoc = doc(db, 'analytics', 'global');
    try {
      await updateDoc(statsDoc, { interactions: increment(1) });
    } catch (e) {
      console.error("Error tracking interaction:", e);
    }
  };

  return { stats, trackInteraction };
};
