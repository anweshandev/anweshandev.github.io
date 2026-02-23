import { profileData } from '../../data';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--text)]/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{profileData.header.name}</h3>
            <p className="text-[var(--text)]/60 text-sm max-w-md">
              Engineering leader specializing in AI-driven applications and scalable full-stack systems.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href={profileData.header.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text)]/60 hover:text-[var(--primary)] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profileData.header.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text)]/60 hover:text-[var(--primary)] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${profileData.header.contact.email}`}
              className="text-[var(--text)]/60 hover:text-[var(--primary)] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[var(--text)]/5 text-center text-[var(--text)]/40 text-xs">
          <p>&copy; {new Date().getFullYear()} {profileData.header.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
