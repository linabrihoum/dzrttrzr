'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Music, Headphones, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: <Music size={32} />,
      title: 'Innovative Sound Design',
      description: 'Pushing the boundaries of electronic music with cutting-edge production techniques.',
    },
    {
      icon: <Headphones size={32} />,
      title: 'Live Performance',
      description: 'High-energy performances that create unforgettable experiences for audiences worldwide.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Raw Energy',
      description: 'Delivering intense, powerful soundscapes that resonate with the underground scene.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <span className="gradient-text">DZRT TRZR</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-red mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The Sound of Innovation
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                DZRT TRZR has emerged as a force to be reckoned with in the electronic music scene, 
                known for pushing the boundaries of sound design and creating immersive audio experiences 
                that challenge conventional electronic music norms.
              </p>
              <p>
                With a unique blend of industrial textures, heavy basslines, and experimental soundscapes, 
                DZRT TRZR has carved out a distinctive niche in the underground electronic music community. 
                Each track is a journey through sonic landscapes that defy categorization.
              </p>
              <p>
                From intimate club settings to massive festival stages, DZRT TRZR delivers performances 
                that are as visually stunning as they are sonically powerful, creating unforgettable 
                experiences for audiences worldwide.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">5+</div>
                <div className="text-sm text-gray-400">Releases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">10+</div>
                <div className="text-sm text-gray-400">Shows</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">20k+</div>
                <div className="text-sm text-gray-400">Streams</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-primary-500 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary-500 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-red text-white font-semibold rounded-lg hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://soundcloud.com/dzrttrzr', '_blank', 'noopener,noreferrer')}
          >
            Explore the Music
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 