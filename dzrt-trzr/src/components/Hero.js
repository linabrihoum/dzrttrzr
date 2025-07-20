'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Music, Cloud } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #ff0000 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #ff0000 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, #ff0000 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #ff0000 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="mb-6"
            animate={{
              filter: [
                'drop-shadow(0 0 20px #ff0000)',
                'drop-shadow(0 0 40px #ff0000)',
                'drop-shadow(0 0 20px #ff0000)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img 
              src="/dzrttrzr.png" 
              alt="DZRT TRZR" 
              className="mx-auto w-auto h-auto max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[560px] max-h-32 sm:max-h-40 md:max-h-48 lg:max-h-56 xl:max-h-64"
            />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Pushing the boundaries of electronic music with raw energy and innovative sound design. A project by Alex Negrin.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-red text-white font-semibold rounded-lg hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('music').scrollIntoView({ behavior: 'smooth' })}
          >
            Latest Music
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-primary-500 text-white font-semibold rounded-lg hover:bg-primary-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('venues').scrollIntoView({ behavior: 'smooth' })}
          >
            Played Venues
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-8 flex items-center justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          <motion.a
            href="https://www.instagram.com/dzrt.trzr/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-black/50 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-500 transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 15px rgba(236, 72, 153, 0.3)'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Instagram size={20} />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/dzrt.trzr/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-black/50 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Twitter size={20} />
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@dzrt.trzr?_t=ZT-8yC7Dqz67np&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-black/50 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://soundcloud.com/dzrttrzr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-black/50 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 15px rgba(249, 115, 22, 0.3)'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Cloud size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 