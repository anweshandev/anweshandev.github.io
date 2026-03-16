import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
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

let app: ReturnType<typeof initializeApp> | undefined;
let db: ReturnType<typeof getFirestore> | undefined;
let appCheck: ReturnType<typeof initializeAppCheck> | undefined;
let analytics: ReturnType<typeof getAnalytics> | undefined;
let ai: ReturnType<typeof getAI> | undefined;
let aiModel: ReturnType<typeof getTemplateGenerativeModel> | undefined;

if(import.meta.env.PROD) {

	// 1. Initialize Firebase App
	app = initializeApp(firebaseConfig);
	
	// 2. Initialize App Check
	if (typeof window !== "undefined") {
	  appCheck = initializeAppCheck(app, {
		provider: new ReCaptchaEnterpriseProvider(import.meta.env.VITE_RECAPTCHA_ENTERPRISE_KEY),
		isTokenAutoRefreshEnabled: true,
	  });
	}
	
	// 3. Initialize Firestore
	db = getFirestore(app);
	
	// 4. Initialize Analytics (Safe export)
	analytics = typeof window !== "undefined" ? getAnalytics(app) : undefined;
	
	// 5. Initialize AI SDK (Gemini Backend)
	ai = getAI(app, { backend: new GoogleAIBackend() });
	aiModel = getTemplateGenerativeModel(ai);
}


// 6. Environment-Specific Logic
if (import.meta.env.DEV && typeof db !== 'undefined') {
  connectFirestoreEmulator(db, '127.0.0.1', 9001);
  console.log("🛠️ Firestore Emulator connected: http://127.0.0.1:9001");
}

export {
	db, appCheck, analytics, ai, aiModel
}

export default app;
