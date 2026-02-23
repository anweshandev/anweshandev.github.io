import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// 1. Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 2. Initialize App Check (Always runs if window is defined)
if (typeof window !== "undefined") {
  // If you need to test App Check locally, uncomment the line below:
  // (self as any).FIREBASE_APPCHECK_DEBUG_TOKEN = true;

  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(import.meta.env.VITE_RECAPTCHA_ENTERPRISE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
}

// 3. Initialize Firestore
export const db = getFirestore(app);

// 4. Environment-Specific Logic
if (import.meta.env.DEV) {
  // Connect to Local Emulator
  connectFirestoreEmulator(db, '127.0.0.1', 9001);
  console.log("🛠️ Firestore Emulator connected: http://127.0.0.1:9001");
} else {
  // Production-only Analytics
  isSupported().then(yes => yes ? getAnalytics(app) : null);
}

export default app;
