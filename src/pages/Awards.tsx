import { motion } from 'motion/react';
import { profileData } from '../data';
import { Award, Star, ShieldCheck, Trophy } from 'lucide-react';
import SEO from '../components/layout/SEO';

const Awards = () => {
  return (
    <div className="min-h-screen py-24 bg-(--background)">
      <SEO title="Honors & Recognition" description="Award-winning engineering leader with a track record of excellence." />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Honors & Recognition</h1>
          <p className="text-xl text-(--text)/60">
            A testament to technical excellence and a commitment to delivering exceptional value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32">
          {profileData.honorsAndAwards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-1 bg-linear-to-br from-(--primary)/20 to-transparent rounded-[2.5rem]"
            >
              <div className="h-full p-10 bg-(--background) rounded-[2.4rem] border border-(--text)/5 flex flex-col justify-between group overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-(--primary)/5 rounded-bl-full -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform" />
                <Award className="absolute bottom-8 right-8 text-(--primary)/10 scale-[4] opacity-20" />

                <div>
                  <div className="w-16 h-16 rounded-2xl bg-(--primary) text-(--background) flex items-center justify-center mb-8 shadow-[0_0_20px_var(--primary)]">
                    <Trophy size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{award.title}</h3>
                  <div className="flex items-center gap-2 text-sm font-bold text-(--primary) uppercase tracking-widest mb-6">
                    <Star size={14} fill="currentColor" /> {award.year}
                  </div>
                  <p className="text-(--text)/70 text-lg leading-relaxed mb-8">
                    {award.impact}
                  </p>
                </div>
                
                <div className="pt-8 border-t border-(--text)/5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-40">Pravaah Consulting Inc.</span>
                  <ShieldCheck className="text-(--primary) opacity-50" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {profileData.certifications.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-(--text)/10 text-center hover:bg-(--primary)/5 hover:border-(--primary)/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-(--text)/5 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-(--primary)" />
                </div>
                <h4 className="font-bold text-sm uppercase tracking-wider">{cert}</h4>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Awards;
