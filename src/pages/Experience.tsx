import { motion } from 'motion/react';
import { profileData } from '../data';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import SEO from '../components/layout/SEO';

const Experience = () => {
  return (
    <div className="min-h-screen py-24 bg-(--background)">
      <SEO title="Career Progression" description="Engineering leader career timeline and professional journey." />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Career Progression</h1>
          <p className="text-xl text-(--text)/60">
            A journey of technical excellence, leadership, and impactful delivery.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-(--primary) via-(--secondary) to-transparent" />

          <div className="space-y-24">
            {profileData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-(--background) border-2 border-(--primary) z-10 shadow-[0_0_10px_var(--primary)]" />

                <div className="md:w-1/2">
                  <div className={`p-8 rounded-3xl bg-(--primary)/5 border border-(--primary)/10 hover:border-(--primary)/30 transition-colors ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <div className={`flex items-center gap-3 mb-4 text-(--primary) ${
                      index % 2 === 0 ? '' : 'md:flex-row-reverse'
                    }`}>
                      <Briefcase size={20} />
                      <span className="font-bold uppercase tracking-wider text-sm">{exp.role}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-(--text)/50 mb-6 ${
                      index % 2 === 0 ? '' : 'md:justify-end'
                    }`}>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className={`flex items-start gap-3 text-(--text)/70 ${
                          index % 2 === 0 ? '' : 'md:flex-row-reverse'
                        }`}>
                          <CheckCircle2 size={16} className="mt-1 shrink-0 text-(--primary)" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.achievements && (
                      <div className="mt-6 pt-6 border-t border-(--text)/5 text-left">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-(--primary) mb-4">Key Achievements</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((ach, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-(--primary)/10 text-(--primary) text-xs font-medium">
                              {ach}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className={`flex flex-wrap gap-2 mt-6 ${
                      index % 2 === 0 ? '' : 'md:justify-end'
                    }`}>
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-(--text)/5 text-(--text)/60 text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <section className="mt-40 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Academic Foundation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {profileData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-(--text) text-(--background) relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-(--primary)/10 rounded-bl-full -translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-(--primary)">{edu.degree}</h3>
                <p className="font-medium mb-1">{edu.school}</p>
                <p className="text-sm opacity-60 mb-4">{edu.period}</p>
                {edu.focus && (
                  <div className="flex flex-wrap gap-2">
                    {edu.focus.map((f, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-md">
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
