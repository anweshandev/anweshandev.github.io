import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { profileData } from '../../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Awards', path: '/awards' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Terms', path: '/legal/terms-of-service' },
    { name: 'Privacy', path: '/legal/privacy-policy' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-(--background)/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-(--primary)">
          {profileData.header.name.split(' ').map(n => n[0]).join('')}
          <span className="text-(--text)">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-(--primary) ${
                location.pathname === link.path ? 'text-(--primary)' : 'text-(--text)/70'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-(--text)/15 bg-(--background)/50">
            <span className="text-[10px] uppercase tracking-widest text-(--text)/45">Legal</span>
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs transition-colors hover:text-(--primary) ${
                  location.pathname === link.path ? 'text-(--primary)' : 'text-(--text)/65'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-(--primary)/10 transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-(--primary)/10 transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-(--text)">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-(--background) border-t border-(--text)/10"
      >
        <div className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium ${
                location.pathname === link.path ? 'text-(--primary)' : 'text-(--text)/70'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2 mt-2 border-t border-(--text)/10">
            <p className="text-[10px] uppercase tracking-widest text-(--text)/45 mb-2">Legal</p>
            <div className="flex gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm ${
                    location.pathname === link.path ? 'text-(--primary)' : 'text-(--text)/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
