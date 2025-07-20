'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, Pause, ExternalLink, Heart, Volume2, SkipBack, SkipForward } from 'lucide-react';

const Music = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [playingTrack, setPlayingTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const releases = [
    {
      id: 1,
      title: 'DZRT TRZR Vol.1',
      artist: 'DZRT TRZR',
      cover: '/vol1.png',
      genre: 'Electronic Mix',
      year: '2022',
      duration: 'Mix',
      isLiked: true,
      soundcloudUrl: 'https://soundcloud.com/dzrttrzr/dzrt-trzr-vol-1?ref=clipboard&p=i&c=0&si=8DF46A9168E54C04B4F852ED621C1AAF&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      id: 2,
      title: 'DZRT TRZR Vol.2',
      artist: 'DZRT TRZR',
      cover: '/vol2.png',
      genre: 'Electronic Mix',
      year: '2023',
      duration: 'Mix',
      isLiked: false,
      soundcloudUrl: 'https://soundcloud.com/dzrttrzr/dzrt-trzr-vol-2?ref=clipboard&p=i&c=0&si=F0B716C7284440DD9880A57BF323CD2A&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      id: 3,
      title: 'DZRT TRZR Vol. 3',
      artist: 'DZRT TRZR',
      cover: '/vol3.png',
      genre: 'Electronic Mix',
      year: '2024',
      duration: 'Mix',
      isLiked: true,
      soundcloudUrl: 'https://soundcloud.com/dzrttrzr/dzrt-trzr-vol-3?ref=clipboard&p=i&c=0&si=697B93C125EE44E6B774BC1A5D439727&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      id: 4,
      title: 'DZRT TRZR Vol. 4',
      artist: 'DZRT TRZR',
      cover: '/vol4.png',
      genre: 'Electronic Mix',
      year: '2024',
      duration: 'Mix',
      isLiked: false,
      soundcloudUrl: 'https://soundcloud.com/dzrttrzr/dzrt-trzr-vol-4',
    },
    {
      id: 5,
      title: 'DZRT TRZR Vol. 5',
      artist: 'DZRT TRZR',
      cover: '/vol5.png',
      genre: 'Electronic Mix',
      year: '2024',
      duration: 'Mix',
      isLiked: true,
      soundcloudUrl: 'https://soundcloud.com/dzrttrzr/dzrt-trzr-vol-5',
    },
    {
      id: 6,
      title: 'Imsety Mix',
      artist: 'DZRT TRZR',
      cover: '/imsety.png',
      genre: 'Electronic Mix',
      year: '2022',
      duration: 'Mix',
      isLiked: false,
      soundcloudUrl: 'https://soundcloud.com/dzrttrzr/imsety?ref=clipboard&p=i&c=0&si=B12DF3DB600F4244B158780B8B8868BA&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  ];

  const toggleTrackPlay = (trackId) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId);
  };

  const toggleLike = (trackId) => {
    // In a real app, this would update the backend
    console.log('Toggle like for track:', trackId);
  };

  const openSoundCloud = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const newTime = percent * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section id="music" className="py-20 bg-black relative overflow-hidden">
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
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Latest <span className="gradient-text">Mixes</span>
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
            Explore the latest SoundCloud mixes from DZRT TRZR
          </motion.p>
        </motion.div>

        {/* Releases Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {releases.map((release, index) => (
            <motion.div
              key={release.id}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-primary-500 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Album Cover */}
              <div className="relative aspect-square bg-gradient-dark overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent"></div>
                <img 
                  src={release.cover} 
                  alt={release.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <motion.button
                  onClick={() => openSoundCloud(release.soundcloudUrl)}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center hover-glow">
                    <ExternalLink size={24} className="text-white" />
                  </div>
                </motion.button>
              </div>

              {/* Track Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {release.title}
                    </h3>
                    <p className="text-gray-400">{release.artist}</p>
                  </div>
                  <div className="flex space-x-2">
                    <motion.button
                      onClick={() => toggleLike(release.id)}
                      className={`p-2 rounded-full transition-colors duration-300 ${
                        release.isLiked
                          ? 'text-primary-500 hover:text-primary-400'
                          : 'text-gray-400 hover:text-primary-500'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart size={20} fill={release.isLiked ? 'currentColor' : 'none'} />
                    </motion.button>
                    <motion.button
                      onClick={() => openSoundCloud(release.soundcloudUrl)}
                      className="p-2 rounded-full text-gray-400 hover:text-primary-500 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{release.genre}</span>
                  <span>{release.duration}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{release.year}</span>
                    <motion.button
                      onClick={() => openSoundCloud(release.soundcloudUrl)}
                      className="px-4 py-2 bg-gradient-red text-white text-sm font-semibold rounded-lg hover-glow transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Listen on SoundCloud
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Audio Player for Vol.5 */}
        <motion.div
          className="mt-16 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Latest Mix - Vol.5</h3>
            <p className="text-gray-400">Listen to the full mix directly on the site</p>
          </div>
          
          {/* Hidden Audio Element */}
          <audio
            ref={audioRef}
            src="/vol5-audio.mp3"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
          />
          
          {/* Player Controls */}
          <div className="flex items-center justify-center space-x-6 mb-6">
            <motion.button
              onClick={togglePlay}
              className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center hover-glow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </motion.button>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div 
              className="w-full h-2 bg-gray-700 rounded-full cursor-pointer relative"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-primary-500 rounded-full transition-all duration-100"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          
          {/* Volume Control */}
          <div className="flex items-center justify-center space-x-4">
            <Volume2 size={20} className="text-gray-400" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-red text-white font-semibold rounded-lg hover-glow cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://soundcloud.com/dzrttrzr', '_blank', 'noopener,noreferrer')}
          >
            View All Mixes
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Music; 