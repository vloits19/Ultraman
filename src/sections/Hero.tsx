import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronDown } from 'lucide-react';
import { ULTRAMAN_DATA } from '../types/ultraman';

interface HeroProps {
  onInitialize: () => void;
}

export default function Hero({ onInitialize }: HeroProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Explore the Nebula M78';

  const ultrasCount = ULTRAMAN_DATA.length;
  const erasCount = new Set(ULTRAMAN_DATA.map(u => u.era)).size;
  const yearsCount = new Set(ULTRAMAN_DATA.map(u => u.year)).size;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const duration = 10 + Math.random() * 20;
          return (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: 0,
              }}
              animate={{
                y: ['110vh', '-10vh'],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: -(Math.random() * 30),
              }}
            />
          );
        })}
        
        {/* Nebula effect */}
        <div className="absolute inset-0 bg-gradient-radial from-green-900/20 via-transparent to-transparent" 
             style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }} />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo/Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-24 h-24 mx-auto relative">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: 'linear-gradient(135deg, #4ADE80, #22C55E)' }}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(34, 197, 94, 0.5), 0 0 60px rgba(34, 197, 94, 0.3)',
                    '0 0 50px rgba(34, 197, 94, 0.8), 0 0 100px rgba(34, 197, 94, 0.5)',
                    '0 0 30px rgba(34, 197, 94, 0.5), 0 0 60px rgba(34, 197, 94, 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                <Star className="w-10 h-10 text-green-500" fill="currentColor" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Title with typing effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {displayText}
          </span>
          <span 
            className={`inline-block w-1 h-12 md:h-16 bg-green-500 ml-2 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.1s' }}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Discover the legendary heroes of the Land of Light across all eras
        </motion.p>

        {/* Initialize Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.button
            onClick={onInitialize}
            className="group relative inline-flex items-center gap-3 px-8 py-4 font-orbitron font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button glow background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
            
            {/* Button content */}
            <span className="relative z-10 text-white flex items-center gap-3">
              <Star className="w-5 h-5 flex-shrink-0" fill="currentColor" />
              Initialize Grid
              <Star className="w-5 h-5 flex-shrink-0" fill="currentColor" />
            </span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { value: ultrasCount.toString(), label: 'Ultras' },
            { value: erasCount.toString(), label: 'Eras' },
            { value: yearsCount.toString(), label: 'Years' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-500"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
