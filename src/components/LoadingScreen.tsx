import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
  progress?: number;
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  isLoading, 
  progress = 0, 
  message = "Loading CareerPanda..." 
}) => {
  const [currentMessage, setCurrentMessage] = useState(message);
  const [dots, setDots] = useState('');

  const loadingMessages = [
    "🐼 Initializing CareerPanda...",
    "🚀 Loading AI-powered features...",
    "📄 Preparing resume templates...",
    "💼 Setting up career portal...",
    "✨ Almost ready to help you succeed!"
  ];

  useEffect(() => {
    if (!isLoading) return;

    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => {
        const otherMessages = loadingMessages.filter(m => m !== prev);
        return otherMessages[Math.floor(Math.random() * otherMessages.length)] || prev;
      });
    }, 7500);

    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 1000);

    const initialDelay = setTimeout(() => {
      setCurrentMessage(loadingMessages[1]);
    }, 2000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(dotsInterval);
      clearTimeout(initialDelay);
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center overflow-hidden"
      >
        {/* Responsive Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                scale: 0
              }}
              animate={{
                y: [null, -100],
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: Math.random() * 3,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        {/* Main Loading Content - Responsive */}
        <div className="relative z-10 text-center px-4 w-full max-w-lg">
          {/* CareerPanda Logo Animation - Responsive */}
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ 
              duration: 2.5, 
              ease: [0.16, 1, 0.3, 1],
              rotate: { 
                type: 'spring',
                damping: 10,
                stiffness: 60,
                mass: 1.5
              }
            }}
            className="mb-6 sm:mb-8"
          >
            <div className="relative">
              {/* Responsive Panda Logo */}
              <motion.div
                animate={{ 
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.08, 1],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-2xl"
              >
                <div className="text-4xl sm:text-6xl">🐼</div>
              </motion.div>
              
              {/* Responsive Glowing Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 mx-auto border-2 sm:border-4 border-transparent border-t-white/50 border-r-blue-400/50 rounded-full"
              />
            </div>
          </motion.div>

          {/* Responsive Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-3 sm:mb-4"
          >
            Career<span className="text-blue-400">Panda</span>
          </motion.h1>

          {/* Responsive Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8"
          >
            AI-Powered Career Success Platform
          </motion.p>

          {/* Responsive Loading Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mb-6 sm:mb-8"
          >
            <p className="text-base sm:text-lg text-white/90 mb-2">
              {currentMessage}{dots}
            </p>
          </motion.div>

          {/* Responsive Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="w-full max-w-sm mx-auto"
          >
            <div className="bg-white/20 rounded-full h-2 sm:h-3 overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <p className="text-white/70 text-xs sm:text-sm mt-2">{Math.round(progress)}% Complete</p>
          </motion.div>

          {/* Responsive Loading Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center space-x-2 mt-6 sm:mt-8"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 sm:w-3 sm:h-3 bg-white/60 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>

          {/* Responsive Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto"
          >
            {[
              { icon: "🤖", text: "AI Resume Analysis" },
              { icon: "💼", text: "Smart Job Matching" },
              { icon: "📊", text: "Career Insights" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20"
              >
                <div className="text-lg sm:text-2xl mb-1 sm:mb-2">{feature.icon}</div>
                <p className="text-white/80 text-xs sm:text-sm font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Responsive Floating Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl sm:text-4xl opacity-10"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                }}
                animate={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {['📄', '💼', '🎯', '⭐', '🚀', '💡'][i]}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;