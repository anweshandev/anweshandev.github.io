import { motion } from 'motion/react';
import { profileData } from '../data';
import { Users, Lightbulb, TrendingUp, ShieldCheck, Heart, Zap } from 'lucide-react';
import SEO from '../components/layout/SEO';

const Leadership = () => {
  const principles = [
    {
      title: "Servant Leadership",
      description: "Empowering teams by removing blockers and providing the resources they need to excel.",
      icon: <Heart className="text-(--primary)" />
    },
    {
      title: "Data-Driven Strategy",
      description: "Aligning technical roadmaps with measurable business outcomes and performance metrics.",
      icon: <TrendingUp className="text-(--primary)" />
    },
    {
      title: "Mentorship & Growth",
      description: "Cultivating a high-performance culture through continuous learning and peer mentorship.",
      icon: <Users className="text-(--primary)" />
    },
    {
      title: "Outcome-Focused Delivery",
      description: "Prioritizing value delivery and user impact over rigid process adherence.",
      icon: <Zap className="text-(--primary)" />
    }
  ];

  return (
    <div className="min-h-screen py-24 bg-(--background)">
      <SEO title="Engineering Leadership" description="Technical leadership philosophy, mentorship approach, and team building principles." />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Engineering Leadership</h1>
          <p className="text-xl text-(--text)/60">
            Building resilient teams and scalable technical strategies that drive business growth.
          </p>
        </motion.div>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-(--primary)/5 border border-[--primary]/10 hover:border-(--primary)/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-(--background) shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-(--text)/70 leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-32 max-w-4xl mx-auto">
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Lightbulb className="text-[--primary]" /> Technical Strategy
              </h2>
              <p className="text-lg text-(--text)/70 mb-6">
                I believe in building systems that are not just technically sound, but strategically aligned. This means prioritizing scalability, cost-optimization, and future-proofing while maintaining rapid delivery cycles.
              </p>
              <ul className="space-y-4">
                {profileData.summary.leadershipStyle.map((style, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider opacity-60">
                    <ShieldCheck size={18} className="text-(--primary)" />
                    {style}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-(--text) text-(--background) p-12 rounded-[3rem] rotate-3">
              <p className="text-2xl font-serif italic opacity-80">
                "Leadership is not about being in charge. It is about taking care of those in your charge."
              </p>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold mb-12">Mentorship Approach</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl border border-(--text)/5">
                <h4 className="font-bold mb-2">1:1 Coaching</h4>
                <p className="text-sm opacity-60">Personalized career pathing and technical guidance.</p>
              </div>
              <div className="p-8 rounded-2xl border border-(--text)/5">
                <h4 className="font-bold mb-2">Code Quality</h4>
                <p className="text-sm opacity-60">Establishing high standards through peer reviews.</p>
              </div>
              <div className="p-8 rounded-2xl border border-(--text)/5">
                <h4 className="font-bold mb-2">Team Syncs</h4>
                <p className="text-sm opacity-60">Fostering collaboration and shared technical vision.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
