'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Instagram, 
  Twitter, 
  Cloud,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://www.instagram.com/dzrt.trzr/' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://www.instagram.com/dzrt.trzr/' },
    { name: 'TikTok', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>, url: 'https://www.tiktok.com/@dzrt.trzr?_t=ZT-8yC7Dqz67np&_r=1' },
    { name: 'SoundCloud', icon: <Cloud size={20} />, url: 'https://soundcloud.com/dzrttrzr' },
  ];

  const footerLinks = [
    {
      title: 'Music',
      links: [
        { name: 'Latest Releases', url: '#music' },
        { name: 'Discography', url: '#music' },
        { name: 'Streaming', url: '#music' },
        { name: 'Downloads', url: '#music' },
      ],
    },
    {
      title: 'Tour',
      links: [
        { name: 'Upcoming Shows', url: '#tour' },
        { name: 'Past Shows', url: '#tour' },
        { name: 'Booking', url: '#contact' },
        { name: 'VIP Packages', url: '#tour' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'Biography', url: '#about' },
        { name: 'Press Kit', url: '#about' },
        { name: 'Photos', url: '#about' },
        { name: 'Videos', url: '#about' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'Get in Touch', url: '#contact' },
        { name: 'Management', url: '#contact' },
        { name: 'Press', url: '#contact' },
        { name: 'Support', url: '#contact' },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  DZRT TRZR
                </h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  Pushing the boundaries of electronic music with raw energy and innovative sound design. 
                  Join the revolution in underground electronic music.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black/50 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-500 hover:border-primary-500 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: '0 0 15px rgba(255, 0, 0, 0.3)'
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + sectionIndex * 0.1 }}
              >
                <h4 className="text-white font-semibold mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.url}
                        className="text-gray-400 hover:text-primary-500 transition-colors duration-300 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DZRT TRZR. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white hover-glow z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer; 