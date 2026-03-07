import { useState } from 'react';
import { motion } from 'motion/react';
import { profileData } from '../data';
import { Mail, Linkedin, Github, Send, Sparkles, CheckCircle } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import SEO from '../components/layout/SEO';
import AIChat from '../components/contact/AIChat';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: serverTimestamp()
      });
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen py-24 bg-[--background]">
      <SEO title="Contact" description="Get in touch for engineering leadership roles, consulting, or technical architecture engagements." />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Connect</h1>
          <p className="text-xl text-[--text]/60">
            Have a project in mind or just want to discuss technical leadership?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-10 rounded-[3rem] bg-[--text] text-[--background] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[--primary]/20 rounded-bl-full translate-x-8 -translate-y-8" />
              <h2 className="text-3xl font-bold mb-8 relative z-10">Contact Information</h2>
              
              <div className="space-y-6 relative z-10">
                <a
                  href={`mailto:${profileData.header.contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[--primary]/10 flex items-center justify-center text-[--primary]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-40 mb-1">Email</p>
                    <p className="font-bold">{profileData.header.contact.email}</p>
                  </div>
                </a>

                <a
                  href={profileData.header.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[--primary]/10 flex items-center justify-center text-[--primary]">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-40 mb-1">LinkedIn</p>
                    <p className="font-bold">anweshandev</p>
                  </div>
                </a>

                <a
                  href={profileData.header.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[--primary]/10 flex items-center justify-center text-[--primary]">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-40 mb-1">GitHub</p>
                    <p className="font-bold">anweshandev</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-12 p-6 rounded-2xl bg-[--primary]/10 border border-[--primary]/20">
                <div className="flex items-center gap-2 mb-2 text-[--primary]">
                  <Sparkles size={18} />
                  <span className="font-bold text-sm uppercase tracking-wider">Availability</span>
                </div>
                <p className="text-sm opacity-70">{profileData.header.availability}</p>
              </div>
            </div>

            <div className="p-8 rounded-4xl border border-[--text]/10 bg-[--primary]/5">
              <h3 className="font-bold mb-4 flex items-center gap-2 text-[--primary]">
                <Sparkles size={18} />
                Try the AI Assistant
              </h3>
              <p className="text-sm text-[--text]/60">
                Ask the AI anything about Anweshan's experience, projects, or leadership philosophy. Click the bubble in the corner!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-10 md:p-12 rounded-[3rem] border border-[--text]/10 bg-white/50 dark:bg-black/20 backdrop-blur-xl">
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-40 ml-4">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-[--text]/5 border border-transparent focus:border-[--primary]/50 focus:outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-40 ml-4">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-[--text]/5 border border-transparent focus:border-[--primary]/50 focus:outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-40 ml-4">Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="Leadership Inquiry"
                    className="w-full px-6 py-4 rounded-2xl bg-[--text]/5 border border-transparent focus:border-[--primary]/50 focus:outline-none transition-all"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-40 ml-4">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 rounded-2xl bg-[--text]/5 border border-transparent focus:border-[--primary]/50 focus:outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  disabled={status === 'submitting'}
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-[--primary] text-[--background] font-bold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : status === 'success' ? (
                    <>Sent Successfully <CheckCircle size={20} /></>
                  ) : (
                    <>Send Message <Send size={20} /></>
                  )}
                </button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or contact me via LinkedIn.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <AIChat />
    </div>
  );
};

export default Contact;
