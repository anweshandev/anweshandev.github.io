import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import { getAI, getTemplateGenerativeModel, GoogleAIBackend } from "firebase/ai";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (Safe export)
const analytics = typeof window !== "undefined" ? getAnalytics(app) : undefined;

// Initialize App Check
let appCheck: ReturnType<typeof initializeAppCheck> | undefined;
if (typeof window !== "undefined" && import.meta.env.PROD) {
  appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(import.meta.env.VITE_RECAPTCHA_ENTERPRISE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
}

// Initialize AI SDK (Gemini Backend)
const ai = getAI(app, { backend: new GoogleAIBackend() });
const aiModel = getTemplateGenerativeModel(ai);

export {
	db, appCheck, analytics, ai, aiModel
}

export default app;
