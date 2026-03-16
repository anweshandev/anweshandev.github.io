import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import MainLayout from "./components/layout/MainLayout";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { useScript } from "@uidotdev/usehooks";
import useNoop from "./hooks/useNoop";
import { useAnalytics } from "./hooks/useAnalytics";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Awards = lazy(() => import("./pages/Awards"));
const Contact = lazy(() => import("./pages/Contact"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const ScrollToTop = () => {
	useScrollToTop();
  useAnalytics();
	return null;
};

const LoadingScreen = () => (
  <div className="h-screen w-full flex items-center justify-center bg-(--background)">
    <div className="w-12 h-12 border-4 border-(--primary) border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
	const isLocalHost =
		typeof window !== "undefined" &&
		(window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
	const shouldLoadAppzi = import.meta.env.PROD && !isLocalHost;
	const useScriptHook = shouldLoadAppzi ? useScript : useNoop;

	const status = useScriptHook("https://w.appzi.io/w.js?token=WsM7K", {
		removeOnUnmount: true,
	});

	useEffect(() => {
		if (shouldLoadAppzi && status === "ready") {
			console.log("Appzi should be ready in production");
		}
	}, [shouldLoadAppzi, status]);

	return (
		<Router>
			<ScrollToTop />
			<Suspense fallback={<LoadingScreen />}>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path="experience" element={<Experience />} />
						<Route path="projects" element={<Projects />} />
						<Route path="leadership" element={<Leadership />} />
						<Route path="awards" element={<Awards />} />
						<Route path="contact" element={<Contact />} />
						<Route path="legal/terms-of-service" element={<TermsOfService />} />
						<Route path="legal/privacy-policy" element={<PrivacyPolicy />} />
					</Route>
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
