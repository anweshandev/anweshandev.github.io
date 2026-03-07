import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, X, MessageSquare } from 'lucide-react';
import { aiModel } from '../../lib/firebase';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: "Hi! I'm Anweshan's AI Assistant. How can I help you learn more about his work?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      // Direct call to the AI SDK using the server-configured 'blank-template'
      // Pass required variables (like userQuery) defined in your template
      const result = await aiModel.generateContent(
        'blank-template',
        {
          userQuery: userMessage,
          // You can also pass context if your template expects it, 
          // but keeping it on the server is more secure.
        }
      );

      const responseText = result.response.text();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: responseText 
      }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I encountered an error. Please try again or contact Anweshan directly!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[--primary] text-[--background] shadow-2xl transition-transform hover:scale-110 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-100 h-150 bg-[--background] border border-[--text]/10 rounded-4xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-[--text] text-[--background] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[--primary] flex items-center justify-center text-[--background]">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Anweshan's AI</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[--primary] animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest opacity-60">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100 transition-opacity">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[--primary] text-[--background] rounded-tr-none' 
                      : 'bg-[--text]/5 text-[--text] rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[--text]/5 p-4 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[--primary] animate-bounce" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[--primary] animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[--primary] animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-6 border-t border-[--text]/5 bg-white/5 dark:bg-black/5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask about my projects..."
                  className="w-full pl-6 pr-12 py-4 rounded-xl bg-[--text]/5 border border-transparent focus:border-[--primary]/50 focus:outline-none transition-all text-sm"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-[--primary] text-[--background] disabled:opacity-50 transition-transform hover:scale-105"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-center mt-4 opacity-40 uppercase tracking-widest font-bold">
                Powered by Firebase AI SDK & Gemini
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
