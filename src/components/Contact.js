'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  Instagram, 
  Twitter, 
  Cloud,
  Mail,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/dzrt.trzr/',
      color: 'hover:text-pink-500',
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: 'https://www.instagram.com/dzrt.trzr/',
      color: 'hover:text-blue-400',
    },
    {
      name: 'TikTok',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>,
      url: 'https://www.tiktok.com/@dzrt.trzr?_t=ZT-8yC7Dqz67np&_r=1',
      color: 'hover:text-white',
    },
    {
      name: 'SoundCloud',
      icon: <Cloud size={24} />,
      url: 'https://soundcloud.com/dzrttrzr',
      color: 'hover:text-orange-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: isMobile ? 1.2 : 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: isMobile ? 1.2 : 0.8, delay: isMobile ? 0.3 : 0.2 }}
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-red mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: isMobile ? 1.2 : 0.8, delay: isMobile ? 0.5 : 0.4 }}
          />
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: isMobile ? 1.2 : 0.8, delay: isMobile ? 0.7 : 0.6 }}
          >
            Connect with DZRT TRZR on social media and stay updated with the latest releases
          </motion.p>
        </motion.div>

        {/* Social Links and Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: isMobile ? 1.2 : 0.8, delay: isMobile ? 0.4 : 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">
              Follow DZRT TRZR
            </h3>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-2xl mx-auto">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-primary-500 transition-all duration-300 min-w-[140px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: isMobile ? 1.0 : 0.6, delay: (isMobile ? 0.8 : 0.6) + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)'
                  }}
                >
                  <div className={`text-gray-400 group-hover:text-primary-500 transition-colors duration-300 mb-3 ${social.color}`}>
                    {social.icon}
                  </div>
                  <span className="text-white font-medium text-sm">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 place-items-center gap-8 max-w-2xl mx-auto">
              <motion.div
                className="flex items-center justify-center space-x-4 p-6 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: isMobile ? 1.0 : 0.6, delay: isMobile ? 1.2 : 1.0 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">dzrttrzrmusic@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 