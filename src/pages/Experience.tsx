import { motion } from 'motion/react';
import { profileData } from '../data';
import { Briefcase, MapPin, Calendar, CheckCircle2, TrendingUp, Award, Rocket } from 'lucide-react';
import SEO from '../components/layout/SEO';
import Experience3D from '../components/experience/Experience3D';

const Experience = () => {
  return (
    <div className="min-h-screen py-32 bg-(--background) relative overflow-hidden">
      <SEO title="Career Progression" description="Engineering leader career timeline and professional journey." />
      <Experience3D />
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-(--primary) rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-(--secondary) rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto mb-32 text-center"
        >
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter">Career Evolution</h1>
          <p className="text-xl md:text-3xl text-(--text)/60 font-medium tracking-tight mb-20 max-w-3xl mx-auto italic">
            "From writing code to architecting systems and leading high-performance teams."
          </p>

          {/* Career Path Indicator */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
            <div className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 rounded-2xl bg-(--text)/5 flex items-center justify-center text-(--text)/40 group-hover:bg-(--primary)/10 group-hover:text-(--primary) transition-all">
                    <Rocket size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Engineer</span>
            </div>
            <div className="hidden md:block w-20 h-0.5 bg-(--text)/10 relative">
                <div className="absolute top-1/2 left-0 w-full h-full bg-linear-to-r from-transparent via-(--primary) to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
            </div>
            <div className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 rounded-2xl bg-(--text)/5 flex items-center justify-center text-(--text)/40 group-hover:bg-(--primary)/10 group-hover:text-(--primary) transition-all scale-110">
                    <Award size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Senior</span>
            </div>
            <div className="hidden md:block w-20 h-0.5 bg-(--text)/10" />
            <div className="flex flex-col items-center gap-3 group">
                <div className="w-20 h-20 rounded-4xl bg-(--primary) flex items-center justify-center text-(--background) shadow-xl shadow-(--primary)/20 group-hover:scale-105 transition-all">
                    <TrendingUp size={28} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-(--primary)">Team Lead</span>
            </div>
          </div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-(--primary) via-(--secondary) to-transparent opacity-20" />

          <div className="space-y-40">
            {profileData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col lg:flex-row gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute -left-1.25 lg:left-1/2 lg:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-(--primary) z-10 shadow-[0_0_20px_var(--primary)]" />

                <div className="lg:w-[45%] pl-8 lg:pl-0">
                  <div className={`p-6 sm:p-10 rounded-4xl sm:rounded-[3rem] bg-(--text) text-(--background) shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-all ${
                    index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
                  }`}>
                    {/* Decorative Number */}
                    <div className="absolute -top-2.5 sm:-top-5 -right-2.5 sm:-right-5 text-7xl sm:text-9xl font-black text-(--background)/5 pointer-events-none">
                        0{profileData.experience.length - index}
                    </div>

                    <div className={`flex items-center gap-4 mb-6 sm:mb-8 text-(--primary) font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs ${
                      index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                    }`}>
                      <Briefcase size={18} />
                      <span>{exp.role}</span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-black mb-4 tracking-tighter">{exp.company}</h3>
                    
                    <div className={`flex flex-wrap gap-4 sm:gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-(--background)/60 mb-8 sm:mb-10 ${
                      index % 2 === 0 ? '' : 'lg:justify-end'
                    }`}>
                      <span className="flex items-center gap-2"><MapPin size={14} className="text-(--primary)" /> {exp.location}</span>
                      <span className="flex items-center gap-2"><Calendar size={14} className="text-(--primary)" /> {exp.period}</span>
                    </div>

                    <ul className="space-y-4 mb-8 sm:mb-10">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className={`flex items-start gap-4 text-(--background)/80 text-xs sm:text-sm leading-relaxed font-medium ${
                          index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                        }`}>
                          <CheckCircle2 size={18} className="mt-1 shrink-0 text-(--primary)" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.achievements && (
                      <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-(--background)/10 text-left">
                        <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-(--primary) mb-6">Strategic Impact</h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.achievements.map((ach, i) => (
                            <span key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-(--background)/5 text-(--background)/90 text-[9px] sm:text-[10px] font-black uppercase tracking-wider border border-(--background)/10 group-hover:bg-(--primary) group-hover:text-(--background) transition-colors">
                              {ach}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className={`flex flex-wrap gap-2 mt-8 sm:mt-10 ${
                      index % 2 === 0 ? '' : 'lg:justify-end'
                    }`}>
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-(--background)/5 text-(--background)/40 text-[9px] font-black uppercase tracking-widest border border-(--background)/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:block lg:w-[10%]" />
                
                <div className="lg:w-[45%] flex flex-col justify-center pl-8 lg:pl-0">
                    <div className={`space-y-6 sm:space-y-8 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        {exp.keyProjects?.map((project: any, pi: number) => (
                            <motion.div 
                                key={pi}
                                whileHover={{ x: index % 2 === 0 ? -10 : 10 }}
                                className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-(--primary)/5 border border-(--primary)/10 hover:bg-(--primary)/10 transition-all cursor-default"
                            >
                                <h4 className="font-black text-xs sm:text-sm uppercase tracking-widest mb-1">{project.name}</h4>
                                <p className="text-[10px] sm:text-xs text-(--text)/50 font-medium">{project.tagline}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <section className="mt-60 max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Academic Foundation</h2>
            <div className="w-20 h-1.5 bg-(--primary) mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {profileData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-12 rounded-[3rem] bg-(--text) text-(--background) relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-(--primary)/10 rounded-bl-full -translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform" />
                <Award className="text-(--primary) mb-8" size={40} />
                <h3 className="text-2xl font-black mb-4 text-(--primary) tracking-tight">{edu.degree}</h3>
                <p className="text-xl font-bold mb-2 tracking-tight">{edu.school}</p>
                <p className="text-xs font-black uppercase tracking-[0.3em] opacity-40 mb-10">{edu.period}</p>
                {edu.focus && (
                  <div className="flex flex-wrap gap-3">
                    {edu.focus.map((f, i) => (
                      <span key={i} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-(--background)/10 rounded-xl border border-(--background)/20 text-(--background)/60">
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
