'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
  Shuffle,
  Repeat,
  Heart
} from 'lucide-react';

const Player = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const currentTrack = {
    title: 'DZRT TRZR Vol.5',
    artist: 'DZRT TRZR',
    album: 'SoundCloud Mix',
    soundcloudUrl: 'https://soundcloud.com/dzrttrzr/dzrt-trzr-vol-5',
    // Using a placeholder audio file for demonstration
    // In a real app, you'd use the actual audio stream from SoundCloud
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', // Placeholder audio
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      if (isRepeating) {
        audio.currentTime = 0;
        audio.play();
        setIsPlaying(true);
      }
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [isRepeating]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        // Set the audio source if not already set
        if (!audio.src) {
          audio.src = currentTrack.audioUrl;
        }
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      // Fallback: open SoundCloud in new tab
      openSoundCloud();
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const toggleRepeat = () => {
    setIsRepeating(!isRepeating);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseInt(e.target.value);
    audio.volume = newVolume / 100;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const openSoundCloud = () => {
    window.open(currentTrack.soundcloudUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        preload="metadata"
        style={{ display: 'none' }}
      />
      
      <AnimatePresence>
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-gray-800 z-40"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
        >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Track Info */}
            <div className="flex items-center space-x-4 flex-1 min-w-0">
              <div className="w-12 h-12 bg-gradient-red rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">DZRT</span>
              </div>
              <motion.button
                onClick={openSoundCloud}
                className="min-w-0 flex-1 text-left hover:opacity-80 transition-opacity duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-white font-medium truncate">
                  {currentTrack.title}
                </div>
                <div className="text-gray-400 text-sm truncate">
                  {currentTrack.artist}
                </div>
              </motion.button>
              <motion.button
                onClick={toggleLike}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isLiked
                    ? 'text-primary-500 hover:text-primary-400'
                    : 'text-gray-400 hover:text-primary-500'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
              </motion.button>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleShuffle}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isShuffled ? 'text-primary-500' : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Shuffle size={16} />
              </motion.button>

              <motion.button
                className="p-2 rounded-full text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SkipBack size={16} />
              </motion.button>

              <motion.button
                onClick={togglePlay}
                className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover-glow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? (
                  <Pause size={20} className="text-white" />
                ) : (
                  <Play size={20} className="text-white ml-0.5" />
                )}
              </motion.button>

              <motion.button
                className="p-2 rounded-full text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SkipForward size={16} />
              </motion.button>

              <motion.button
                onClick={toggleRepeat}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isRepeating ? 'text-primary-500' : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Repeat size={16} />
              </motion.button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center space-x-4 flex-1 max-w-md">
              <span className="text-gray-400 text-xs w-12 text-right">
                {formatTime(currentTime)}
              </span>
              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleProgressChange}
                  className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #ff0000 0%, #ff0000 ${(currentTime / duration) * 100}%, #374151 ${(currentTime / duration) * 100}%, #374151 100%)`
                  }}
                />
              </div>
              <span className="text-gray-400 text-xs w-12">
                {formatTime(duration)}
              </span>
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-2">
              <motion.button
                onClick={toggleMute}
                className="p-2 rounded-full text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX size={16} />
                ) : (
                  <Volume2 size={16} />
                )}
              </motion.button>
              <div className="w-20">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #ff0000 0%, #ff0000 ${isMuted ? 0 : volume}%, #374151 ${isMuted ? 0 : volume}%, #374151 100%)`
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Custom slider styles */}
        <style jsx>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 12px;
            width: 12px;
            border-radius: 50%;
            background: #ff0000;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
          }
          
          .slider::-moz-range-thumb {
            height: 12px;
            width: 12px;
            border-radius: 50%;
            background: #ff0000;
            cursor: pointer;
            border: none;
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
    </>
  );
};

export default Player; 