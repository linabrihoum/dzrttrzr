'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Ticket, ExternalLink } from 'lucide-react';

const Tour = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const venues = [
    {
      id: 1,
      name: 'GILT Nightclub',
      location: 'Orlando, FL',
      date: 'June 2023',
      status: 'played',
    },
    {
      id: 5,
      name: 'Wall Street Downtown Orlando',
      location: 'Orlando, FL',
      date: 'December 2023',
      status: 'played',
    },
    {
      id: 3,
      name: 'The Tavern East',
      location: 'Orlando, FL',
      date: 'January 2024',
      status: 'played',
    },
    {
      id: 8,
      name: 'Attic',
      location: 'Orlando, FL',
      date: 'February 2024',
      status: 'played',
    },
    {
      id: 6,
      name: 'Fixtion',
      location: 'Orlando, FL',
      date: 'July 2024',
      status: 'played',
    },
    {
      id: 7,
      name: 'Tiki Lounge',
      location: 'Tampa, FL',
      date: 'January 2025',
      status: 'played',
    },
    {
      id: 2,
      name: 'The Vanguard',
      location: 'Orlando, FL',
      date: '',
      status: 'played',
    },
    {
      id: 4,
      name: 'Treehouse',
      location: 'Orlando, FL',
      date: '',
      status: 'played',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'played':
        return 'text-green-500 bg-green-500/10 border-green-500/20';
      default:
        return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'played':
        return 'Played';
      default:
        return 'TBA';
    }
  };

  return (
    <section id="tour" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary-600 rounded-full blur-3xl"></div>
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
            Previous <span className="gradient-text">Played at</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-red mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Venues where DZRT TRZR has performed
          </motion.p>
        </motion.div>

        {/* Venues Grid */}
        <motion.div
          className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 border-b border-gray-800 bg-black/30">
            <div className="flex items-center space-x-2">
              <MapPin size={20} className="text-primary-500" />
              <span className="font-semibold text-white">Venue</span>
            </div>
            <div className="hidden md:block">
              <span className="font-semibold text-white">Location</span>
            </div>
            <div className="hidden md:block">
              <span className="font-semibold text-white">Date</span>
            </div>
            <div className="hidden md:block">
              <span className="font-semibold text-white">Status</span>
            </div>
          </div>

          {/* Venues List */}
          <div className="divide-y divide-gray-800">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.id}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 hover:bg-gray-900/50 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Venue Name */}
                <div className="flex flex-col">
                  <span className="text-white font-semibold">
                    {venue.name}
                  </span>
                  <span className="text-gray-400 text-sm md:hidden">{venue.location}</span>
                  {venue.date && (
                    <span className="text-gray-400 text-sm md:hidden">{venue.date}</span>
                  )}
                </div>

                {/* Location */}
                <div className="hidden md:block">
                  <span className="text-gray-300">{venue.location}</span>
                </div>

                {/* Date */}
                <div className="hidden md:block">
                  <span className="text-gray-300">{venue.date || '-'}</span>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between md:justify-start">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(venue.status)}`}>
                    {getStatusText(venue.status)}
                  </span>
                  
                  {/* Mobile Status */}
                  <span className={`md:hidden inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(venue.status)}`}>
                    {getStatusText(venue.status)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tour; 