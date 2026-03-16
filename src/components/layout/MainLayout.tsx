import Navbar from './Navbar';
import Footer from './Footer';
import Ambient3D from './Ambient3D';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, Outlet } from 'react-router-dom';

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-(--background) text-(--text) selection:bg-(--primary) selection:text-(--background)">
      <Ambient3D />
      <Navbar />
      <main className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
