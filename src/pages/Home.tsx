import { motion } from 'motion/react';
import { profileData } from '../data';
import Hero3D from '../components/home/Hero3D';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SEO from '../components/layout/SEO';

const Home = () => {
  const [titleIndex, setTitleIndex] = useState(0);

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
            <span className="inline-block py-1 px-3 rounded-full bg-(--primary)/10 text-(--primary) text-sm font-medium mb-6">
              {profileData.header.availability}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              I'm <span className="text-(--primary)">{profileData.header.name}</span>
            </h1>
            
            <div className="h-20 md:h-24">
              <motion.p
                key={titleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xl md:text-2xl text-(--text)/70 font-medium"
              >
                {profileData.meta.siteTitleVariants[titleIndex]}
              </motion.p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/projects"
                className="group flex items-center gap-2 bg-(--primary) text-(--background) px-8 py-4 rounded-full font-bold transition-transform hover:scale-105"
              >
                View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-(--text)/20 px-8 py-4 rounded-full font-bold hover:bg-(--text)/5 transition-colors"
              >
                Download Resume <Download size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-1 h-12 rounded-full bg-linear-to-b from-(--primary) to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-(--text) text-(--background)">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-(--primary) mb-2">
                {profileData.header.socialProof.yearsExperience}+
              </h3>
              <p className="text-sm uppercase tracking-widest opacity-60">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-(--primary) mb-2">
                {profileData.header.socialProof.teamsLed}
              </h3>
              <p className="text-sm uppercase tracking-widest opacity-60">Teams Led</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-(--primary) mb-2">
                {profileData.header.socialProof.appsDelivered}+
              </h3>
              <p className="text-sm uppercase tracking-widest opacity-60">Apps Delivered</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-(--primary) mb-2">
                {profileData.header.socialProof.cloudCostOptimizations}
              </h3>
              <p className="text-sm uppercase tracking-widest opacity-60">Cloud Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-32 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Executive Summary</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-(--text)/80">
            {profileData.summary.long}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-20 text-left">
            <div className="p-8 rounded-3xl bg-(--primary)/5 border border-(--primary)/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-(--primary) text-(--background) flex items-center justify-center text-sm">01</span>
                Core Competencies
              </h3>
              <ul className="space-y-3">
                {profileData.coreCompetencies.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-(--text)/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-(--primary)" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-8 rounded-3xl bg-(--secondary)/5 border border-(--secondary)/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-(--secondary) text-(--background) flex items-center justify-center text-sm">02</span>
                Leadership Style
              </h3>
              <ul className="space-y-3">
                {profileData.summary.leadershipStyle.map((style, i) => (
                  <li key={i} className="flex items-center gap-2 text-(--text)/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-(--secondary)" />
                    {style}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
