import { motion } from 'motion/react';
import { profileData } from '../data';
import Hero3D from '../components/home/Hero3D';
import { ArrowRight, Brain, Download, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SEO from '../components/layout/SEO';
import { useVisitorStats } from '../hooks/useVisitorStats';
import CompetencyOrbit from '../components/home/CompetencyOrbit';

const Home = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const { stats, trackInteraction } = useVisitorStats();

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % profileData.meta.siteTitleVariants.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <SEO />
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <Hero3D />
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center gap-3 mb-6">
                <span className="inline-block py-1 px-3 rounded-full bg-(--primary)/10 text-(--primary) text-xs font-bold uppercase tracking-widest border border-(--primary)/20">
                    {profileData.header.availability}
                </span>
                {stats.views > 0 && (
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 py-1 px-3 rounded-full bg-white/5 text-(--text)/60 text-[10px] font-bold uppercase tracking-widest border border-white/10 backdrop-blur-md"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        {stats.views} Global Visits
                    </motion.span>
                )}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-6">
              I'm <span className="text-(--primary) drop-shadow-[0_0_15px_rgba(74,250,14,0.3)]">{profileData.header.name}</span>
            </h1>
            
            <div className="h-20 md:h-24">
              <motion.p
                key={titleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-lg sm:text-xl md:text-3xl text-(--text)/70 font-bold tracking-tight italic"
              >
                {profileData.meta.siteTitleVariants[titleIndex]}
              </motion.p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-12">
              <Link
                to="/projects"
                onClick={trackInteraction}
                className="group relative flex items-center justify-center gap-3 bg-(--primary) text-(--background) px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(74,250,14,0.4)]"
              >
                Launch Portfolio <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInteraction}
                className="flex items-center justify-center gap-3 border-2 border-(--text)/10 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black hover:bg-(--text) hover:text-(--background) transition-all active:scale-95"
              >
                Architect Resume <Download size={22} />
              </a>
            </div>

            {stats.interactions > 0 && (
                <div className="mt-12 flex items-center justify-center gap-2 opacity-40">
                    <Zap size={14} className="text-(--primary)" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                        {stats.interactions} Strategic Engagements Today
                    </span>
                </div>
            )}
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
          <div className="w-px h-20 bg-linear-to-b from-(--primary) to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-(--text) text-(--background) relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-(--primary) rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-(--primary) rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            <motion.div whileHover={{ y: -10 }} className="transition-transform">
              <h3 className="text-5xl md:text-7xl font-black text-(--primary) mb-3 tracking-tighter">
                {profileData.header.socialProof.yearsExperience}+
              </h3>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Years of Evolution</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="transition-transform">
              <h3 className="text-5xl md:text-7xl font-black text-(--primary) mb-3 tracking-tighter">
                {profileData.header.socialProof.teamsLed}
              </h3>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Teams Orchestrated</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="transition-transform">
              <h3 className="text-5xl md:text-7xl font-black text-(--primary) mb-3 tracking-tighter">
                {profileData.header.socialProof.appsDelivered}+
              </h3>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Production Deployments</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="transition-transform">
              <h3 className="text-5xl md:text-7xl font-black text-(--primary) mb-3 tracking-tighter">
                {profileData.header.socialProof.cloudCostOptimizations}
              </h3>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Efficiency Uplift</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-40 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Architectural Philosophy</h2>
            <div className="w-20 h-1.5 bg-(--primary) mx-auto rounded-full" />
          </div>
          
          <p className="text-2xl md:text-4xl leading-tight text-(--text)/90 font-medium tracking-tight text-center mb-32 italic">
            "{profileData.summary.long}"
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-12 rounded-[3rem] bg-(--text) text-(--background) shadow-2xl relative overflow-hidden group h-full"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={80} />
              </div>
              <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
                <span className="text-(--primary)">01</span>
                Core Competencies
              </h3>
              <CompetencyOrbit />
            </motion.div>
            
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-12 rounded-[3rem] bg-(--primary) text-(--background) shadow-2xl shadow-(--primary)/20 relative overflow-hidden group h-full"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
                <Brain size={80} />
              </div>
              <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
                <span>02</span>
                Leadership Style
              </h3>
              <ul className="space-y-5">
                {profileData.summary.leadershipStyle.map((style, i) => (
                  <li key={i} className="flex items-center gap-4 text-(--background)/80 font-bold uppercase tracking-widest text-xs">
                    <div className="w-2 h-2 rounded-full bg-(--background)" />
                    {style}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
