import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, X, MessageSquare, Brain } from 'lucide-react';
import { aiModel } from '../../lib/firebase';
import { profileData } from '../../data';

const SUGGESTED_QUESTIONS = [
  "Tell me about Octopus SaaS",
  "What is your leadership style?",
  "Tell me about ChiroScript.ai",
  "What are your core technical skills?"
];

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: `Hi! I'm Anweshan's AI Assistant. I can tell you about his ${profileData.header.socialProof.yearsExperience}+ years of experience, his leadership at ${profileData.experience[0].company}, or any of his 20+ delivered apps. How can I help?` }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (messageText?: string) => {
    const userMessage = messageText || input.trim();
    if (!userMessage || isTyping) return;

    if (!aiModel) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "AI assistant is currently unavailable in this environment. Please try again later or contact Anweshan directly at anweshanrc15@gmail.com!"
      }]);
      return;
    }

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const result = await aiModel.generateContent(
        'blank-template',
        { userQuery: userMessage }
      );

      const responseText = result.response.text();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: responseText 
      }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I encountered an error. Please try again or contact Anweshan directly at anweshanrc15@gmail.com!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-(--primary) text-(--background) shadow-2xl transition-all hover:scale-110 active:scale-95 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <div className="relative">
          <MessageSquare size={24} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 100, scale: 0.8, filter: 'blur(10px)' }}
            className="fixed bottom-8 right-8 z-50 w-[95vw] md:w-110 h-[80vh] md:h-160 bg-(--background) border border-(--text)/10 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden backdrop-blur-xl"
          >
            <div className="p-8 bg-linear-to-br from-(--text) to-(--text)/90 text-(--background) flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-(--primary) flex items-center justify-center text-(--background) shadow-lg shadow-(--primary)/20">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg tracking-tight">Executive AI</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-(--primary) animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-60">Architect Mode</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-5 rounded-[2rem] text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-(--primary) text-(--background) rounded-tr-none' 
                      : 'bg-(--text)/5 text-(--text) rounded-tl-none border border-(--text)/5'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-(--text)/5 p-5 rounded-[2rem] rounded-tl-none">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-(--primary) animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-(--primary) animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 rounded-full bg-(--primary) animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {messages.length === 1 && !isTyping && (
              <div className="px-8 pb-4 flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-[11px] font-bold uppercase tracking-wider py-2 px-4 rounded-full border border-(--text)/10 hover:border-(--primary) hover:text-(--primary) transition-all bg-white/5"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }} 
              className="p-8 border-t border-(--text)/5 bg-white/2 backdrop-blur-sm"
            >
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Ask about my architecture..."
                  className="w-full pl-6 pr-14 py-5 rounded-2xl bg-(--text)/5 border border-transparent focus:border-(--primary)/30 focus:outline-none transition-all text-sm group-hover:bg-(--text)/8 shadow-inner"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-(--primary) text-(--background) disabled:opacity-50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg shadow-(--primary)/20"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="flex items-center justify-center gap-2 mt-6">
                <Sparkles size={12} className="text-(--primary)" />
                <p className="text-[9px] uppercase tracking-[0.3em] font-black opacity-30">
                  Gemini Flash 3.0 • Firebase AI Logic
                </p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
