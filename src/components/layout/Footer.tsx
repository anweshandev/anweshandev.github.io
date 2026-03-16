import { profileData } from '../../data';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-(--background) border-t border-(--text)/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{profileData.header.name}</h3>
            <p className="text-(--text)/60 text-sm max-w-md">
              Engineering leader specializing in AI-driven applications and scalable full-stack systems.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href={profileData.header.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--text)/60 hover:text-(--primary) transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profileData.header.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--text)/60 hover:text-(--primary) transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${profileData.header.contact.email}`}
              className="text-(--text)/60 hover:text-(--primary) transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-(--text)/5 text-center text-(--text)/40 text-xs">
          <p className="mb-2">
            <Link
              to="/legal/terms-of-service"
              className="underline decoration-dotted underline-offset-4 hover:text-(--primary) transition-colors"
            >
              Terms of Service
            </Link>
          </p>
          <p className="mb-2">
            <Link
              to="/legal/privacy-policy"
              className="underline decoration-dotted underline-offset-4 hover:text-(--primary) transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
          <p>&copy; {new Date().getFullYear()} {profileData.header.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
