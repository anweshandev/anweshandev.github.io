import { motion } from 'motion/react';
import { profileData } from '../data';
import { ExternalLink, Github, Layers, Target, TrendingUp, Zap } from 'lucide-react';
import SEO from '../components/layout/SEO';

const Projects = () => {
  // Extract all projects from experience
  const allProjects = profileData.experience.flatMap(exp => 
    exp.keyProjects ? exp.keyProjects.map(p => ({ ...p, company: exp.company, role: exp.role })) : []
  );

  return (
    <div className="min-h-screen py-24 bg-[--background]">
      <SEO title="Featured Projects" description="Showcase of scalable cloud platforms, AI-driven applications, and mobile products." />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Featured Portfolio</h1>
          <p className="text-xl text-[--text]/60">
            A selection of high-impact products and technical solutions built for global enterprises.
          </p>
        </motion.div>

        <div className="grid gap-20">
          {allProjects.map((project: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-12 gap-12 items-start"
            >
              {/* Project Info */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[--primary]/10 text-[--primary] text-xs font-bold uppercase tracking-widest">
                      {project.category || 'Software Engineering'}
                    </span>
                    {project.starProject && (
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[--accent]/10 text-[--accent] text-xs font-bold uppercase tracking-widest">
                        <Zap size={12} /> Star Project
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">{project.name}</h2>
                  <p className="text-xl text-[--text]/60 font-medium">{project.tagline}</p>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-[--text]/80">
                    {project.overview || project.details}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {project.problemStatement && (
                    <div className="p-6 rounded-2xl bg-[--text]/5 border border-[--text]/10">
                      <div className="flex items-center gap-2 mb-3 text-[--primary]">
                        <Target size={18} />
                        <h4 className="font-bold text-sm uppercase tracking-wider">The Challenge</h4>
                      </div>
                      <p className="text-sm text-[--text]/70">{project.problemStatement}</p>
                    </div>
                  )}
                  {project.businessImpact && (
                    <div className="p-6 rounded-2xl bg-[--secondary]/5 border border-[--secondary]/10">
                      <div className="flex items-center gap-2 mb-3 text-[--secondary]">
                        <TrendingUp size={18} />
                        <h4 className="font-bold text-sm uppercase tracking-wider">Business Impact</h4>
                      </div>
                      <ul className="text-sm text-[--text]/70 space-y-2">
                        {(Array.isArray(project.businessImpact) ? project.businessImpact : [project.businessImpact]).map((impact: string, i: number) => (
                          <li key={i} className="flex gap-2">
                            <span>•</span>
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {project.architectureHighlights && (
                  <div className="p-8 rounded-3xl bg-[--primary]/5 border border-[--primary]/10">
                    <div className="flex items-center gap-2 mb-6 text-[--primary]">
                      <Layers size={20} />
                      <h4 className="font-bold uppercase tracking-widest">Architecture Highlights</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {project.architectureHighlights.map((highlight: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[--text]/70">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[--primary] shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
                <div className="p-8 rounded-3xl bg-[--text] text-[--background]">
                  <div className="mb-8">
                    <h4 className="text-[--primary] text-xs font-bold uppercase tracking-widest mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {(project.tech || (project.techStack && Object.values(project.techStack).flat()) || []).map((t: string, i: number) => (
                        <span key={i} className="px-3 py-1 rounded-md bg-white/10 text-xs font-medium border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[--primary] text-xs font-bold uppercase tracking-widest mb-2">Company / Partnership</h4>
                      <p className="font-bold">{project.company || project.partnership}</p>
                    </div>
                    <div>
                      <h4 className="text-[--primary] text-xs font-bold uppercase tracking-widest mb-2">My Role</h4>
                      <p className="font-bold">{project.role}</p>
                    </div>
                    <div>
                      <h4 className="text-[--primary] text-xs font-bold uppercase tracking-widest mb-2">Timeline</h4>
                      <p className="font-bold">{project.period}</p>
                    </div>
                  </div>

                  <div className="mt-10 flex gap-4">
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-[--primary] text-[--background] py-3 rounded-xl font-bold transition-transform hover:scale-105"
                      >
                        Live Demo <ExternalLink size={18} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 border border-white/20 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                      >
                        GitHub <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {project.impact && (
                  <div className="p-8 rounded-3xl border border-[--text]/10">
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-40">Key Performance Indicators</h4>
                    <div className="space-y-6">
                      {project.impact.map((imp: string, i: number) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-[--primary]/10 flex items-center justify-center text-[--primary] font-bold shrink-0">
                            {i + 1}
                          </div>
                          <p className="text-[--text] font-medium leading-tight">{imp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Divider for all except last */}
              {index !== allProjects.length - 1 && (
                <div className="lg:col-span-12 h-px bg-[--text]/5 mt-20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
