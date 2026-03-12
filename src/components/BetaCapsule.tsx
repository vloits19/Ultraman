import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import henshinSound from '@/assets/sound/Henshin.mp3';
interface BetaCapsuleProps {
  onTransform: () => void;
}

export default function BetaCapsule({ onTransform }: BetaCapsuleProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    
    // Play sound effect
    const audio = new Audio(henshinSound);
    audio.play().catch(e => console.error("Error playing sound:", e));
    
    // Play animation first, then trigger transformation logic
    setTimeout(() => {
        onTransform();
        setIsAnimating(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Beta Capsule Button */}
      <motion.button
        onClick={handleClick}
        className="fixed bottom-8 right-8 z-50 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          {/* Outer glow rings */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                '0 0 20px rgba(220, 38, 38, 0.4), 0 0 40px rgba(220, 38, 38, 0.2)',
                '0 0 40px rgba(220, 38, 38, 0.6), 0 0 80px rgba(220, 38, 38, 0.4)',
                '0 0 20px rgba(220, 38, 38, 0.4), 0 0 40px rgba(220, 38, 38, 0.2)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Capsule body */}
          <div className="relative w-16 h-16 rounded-full beta-capsule flex items-center justify-center overflow-hidden">
            {/* Inner shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            
            {/* Icon */}
            <motion.div
              animate={isAnimating ? { rotate: 720, scale: [1, 1.5, 1] } : { rotate: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
          </div>

          {/* Tooltip */}
          <motion.div
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
          >
            <div className="glass px-3 py-1.5 rounded-lg text-sm text-white font-orbitron">
              Henshin! (Random Ultra)
            </div>
          </motion.div>
        </div>
      </motion.button>

      {/* Screen Flash Effect */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="fixed inset-0 z-[100] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.8, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, times: [0, 0.1, 0.3, 1] }}
          >
              {/* White flash */}
              <div className="absolute inset-0 bg-white" />
              
              {/* Color beam effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'conic-gradient(from 0deg at 50% 50%, #EF4444, #3B82F6, #EAB308, #A855F7, #EF4444)',
                }}
                animate={{ rotate: 720 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              
              {/* Center burst */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: [0, 5, 10], opacity: [1, 1, 0] }}
                transition={{ duration: 1.2, ease: "easeIn" }}
              >
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-white via-blue-200 to-white blur-md" />
              </motion.div>
            </motion.div>
          )}
      </AnimatePresence>

      {/* Sound wave animation (visual only) */}
      <AnimatePresence>
        {isAnimating && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="fixed bottom-16 right-16 z-[60] pointer-events-none"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 3 + i, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: i * 0.15 }}
              >
                <div 
                  className="w-16 h-16 rounded-full border-2"
                  style={{ borderColor: `rgba(220, 38, 38, ${0.5 - i * 0.15})` }}
                />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </>
  );
}
