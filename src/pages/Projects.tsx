import { motion } from 'motion/react';
import { profileData } from '../data';
import { ExternalLink, Github, Layers, Target, TrendingUp, Zap } from 'lucide-react';
import SEO from '../components/layout/SEO';
import Project3D from '../components/projects/Project3D';

const Projects = () => {
  // Extract all projects from experience
  const allProjects = profileData.experience.flatMap(exp => 
    exp.keyProjects ? exp.keyProjects.map(p => ({ ...p, company: exp.company, role: exp.role })) : []
  );

  return (
    <div className="min-h-screen py-24 bg-(--background)">
      <SEO title="Featured Projects" description="Showcase of scalable cloud platforms, AI-driven applications, and mobile products." />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Featured Portfolio</h1>
          <p className="text-xl text-(--text)/60">
            A selection of high-impact products and technical solutions built for global enterprises.
          </p>
        </motion.div>

        <div className="grid gap-20 sm:gap-32">
          {allProjects.map((project: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid xl:grid-cols-12 gap-12 sm:gap-16 items-start"
            >
              {/* Project Info */}
              <div className="xl:col-span-7 space-y-8 sm:space-y-12">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-(--primary)/10 text-(--primary) text-[10px] sm:text-xs font-black uppercase tracking-widest border border-(--primary)/20">
                      {project.category || 'Software Engineering'}
                    </span>
                    {project.starProject && (
                      <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-(--accent)/10 text-(--accent) text-[10px] sm:text-xs font-black uppercase tracking-widest border border-(--accent)/20">
                        <Zap size={14} /> Star Project
                      </span>
                    )}
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter">{project.name}</h2>
                  <p className="text-xl sm:text-2xl text-(--text)/60 font-bold tracking-tight italic">{project.tagline}</p>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-base sm:text-lg leading-relaxed text-(--text)/80 font-medium">
                    {project.overview || project.details}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {project.problemStatement && (
                    <div className="p-8 rounded-4xl bg-(--text) text-(--background) shadow-xl">
                      <div className="flex items-center gap-3 mb-6 text-(--primary)">
                        <Target size={20} />
                        <h4 className="font-black text-[10px] uppercase tracking-[0.3em]">The Challenge</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-(--background)/70 font-medium leading-relaxed">{project.problemStatement}</p>
                    </div>
                  )}
                  {project.businessImpact && (
                    <div className="p-8 rounded-4xl bg-(--primary) text-(--background) shadow-xl shadow-(--primary)/10">
                      <div className="flex items-center gap-3 mb-6">
                        <TrendingUp size={20} />
                        <h4 className="font-black text-[10px] uppercase tracking-[0.3em]">Business Impact</h4>
                      </div>
                      <ul className="text-xs sm:text-sm text-(--background)/80 space-y-3 font-bold">
                        {(Array.isArray(project.businessImpact) ? project.businessImpact : [project.businessImpact]).map((impact: string, i: number) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-(--background)/40">•</span>
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {project.architectureHighlights && (
                  <div className="p-10 rounded-[3rem] border-2 border-(--text)/5 bg-(--text)/2">
                    <div className="flex items-center gap-3 mb-10 text-(--text)">
                      <Layers size={22} className="text-(--primary)" />
                      <h4 className="font-black text-[10px] sm:text-xs uppercase tracking-[0.4em]">Architecture Highlights</h4>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-6">
                      {project.architectureHighlights.map((highlight: string, i: number) => (
                        <li key={i} className="flex items-start gap-4 text-xs sm:text-sm text-(--text)/70 font-medium leading-relaxed">
                          <div className="mt-2 w-2 h-2 rounded-full bg-(--primary) shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="xl:col-span-5 xl:sticky xl:top-32 space-y-8">
                <Project3D />
                <div className="p-10 rounded-[3rem] bg-(--text) text-(--background) shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-(--primary)/10 rounded-full blur-[80px]" />
                  
                  <div className="relative z-10">
                    <div className="mb-12">
                        <h4 className="text-(--primary) text-[10px] font-black uppercase tracking-[0.4em] mb-6">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                        {(project.tech || (project.techStack && Object.values(project.techStack).flat()) || []).map((t: string, i: number) => (
                            <span key={i} className="px-4 py-2 rounded-xl bg-(--background)/10 text-(--background)/50 text-[10px] font-black uppercase tracking-widest border border-(--background)/20 group-hover:border-(--primary)/30 transition-colors">
                            {t}
                            </span>
                        ))}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-8 mb-12">
                        <div>
                        <h4 className="text-(--primary) text-[9px] font-black uppercase tracking-[0.3em] mb-3 opacity-60">Company</h4>
                        <p className="font-black text-sm tracking-tight">{project.company || project.partnership}</p>
                        </div>
                        <div>
                        <h4 className="text-(--primary) text-[9px] font-black uppercase tracking-[0.3em] mb-3 opacity-60">My Role</h4>
                        <p className="font-black text-sm tracking-tight">{project.role}</p>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                        {project.website && (
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-3 bg-(--primary) text-(--background) py-5 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-(--primary)/20"
                        >
                            Live Demo <ExternalLink size={20} />
                        </a>
                        )}
                        {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-3 border-2 border-(--background)/20 py-5 rounded-2xl font-black hover:bg-(--background)/5 transition-all active:scale-95"
                        >
                            GitHub <Github size={20} />
                        </a>
                        )}
                    </div>
                  </div>
                </div>

                {project.impact && (
                  <div className="p-10 rounded-[3rem] border-2 border-(--text)/5 bg-(--text)/5 backdrop-blur-sm">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-40">Key Performance Indicators</h4>
                    <div className="space-y-8">
                      {project.impact.map((imp: string, i: number) => (
                        <div key={i} className="flex gap-6 items-start group">
                          <div className="w-12 h-12 rounded-2xl bg-(--primary)/10 flex items-center justify-center text-(--primary) font-black shrink-0 border border-(--primary)/20 group-hover:bg-(--primary) group-hover:text-(--background) transition-colors">
                            {i + 1}
                          </div>
                          <p className="text-(--text) font-bold leading-tight sm:text-lg tracking-tight pt-1">{imp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Divider for all except last */}
              {index !== allProjects.length - 1 && (
                <div className="xl:col-span-12 h-px bg-(--text)/5 mt-20 sm:mt-32" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
