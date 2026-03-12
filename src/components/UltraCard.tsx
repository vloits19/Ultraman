import { useState } from 'react';
import { motion } from 'framer-motion';
import { type Ultraman } from '@/types/ultraman';
import {
  Star, Eye, Shield, Sword, Sun, Flame, Link, Crown, Zap, BookOpen, Heart,
  Mountain, BatteryCharging, Rocket, Droplets, Triangle, Globe, Earth, Waves,
  Moon, Scale, Network, FastForward, Infinity as InfinityIcon, FlaskConical, Swords, Sparkles,
  ArrowDownToLine, Cpu, Circle, Dna, Smile, Dumbbell, Wind, LetterText, Leaf,
  Orbit, Tent, Rainbow, Gem, Calendar, Tag
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface UltraCardProps {
  ultra: Ultraman;
  index: number;
  isHidden?: boolean;
  onClick?: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  Star, Eye, Shield, Sword, Sun, Flame, Link, Crown, Zap, BookOpen, Heart,
  Mountain, BatteryCharging, Rocket, Droplets, Triangle, Globe, Earth, Waves,
  Moon, Scale, Network, FastForward, Infinity: InfinityIcon, FlaskConical, Swords,
  Sparkles, ArrowDownToLine, Cpu, Circle, Dna, Smile, Dumbbell, Wind,
  LetterText, Leaf, Orbit, Tent, Rainbow, Gem
};

export default function UltraCard({ ultra, index, isHidden = false, onClick }: UltraCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getEraClass = (era: string) => {
    switch (era) {
      case 'Showa': return 'era-showa';
      case 'Heisei': return 'era-heisei';
      case 'New Generation': return 'era-newgen';
      case 'Reiwa': return 'era-reiwa';
      case 'Dark': return 'era-dark';
      default: return 'era-showa';
    }
  };

  // Get dynamic icon component, fallback to Zap if not found
  const IconComponent = iconMap[ultra.icon] || Zap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.34, 1.56, 0.64, 1]
      }}
      className={`relative group ${isHidden ? 'glitch' : ''}`}
      data-text={isHidden ? ultra.name : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        layoutId={`card-${ultra.id}`}
        onClick={onClick}
        className="relative rounded-2xl overflow-hidden glass card-lift cursor-pointer"
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${ultra.color_accent}60, 0 0 60px ${ultra.color_accent}30, inset 0 1px 0 rgba(255,255,255,0.1)`
            : 'inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
          borderColor: isHovered ? ultra.color_accent : 'rgba(255,255,255,0.08)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Border glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? `inset 0 0 20px ${ultra.color_accent}40, 0 0 0 1px ${ultra.color_accent}60`
              : 'inset 0 0 0 transparent, 0 0 0 1px rgba(255,255,255,0.08)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Card header with color accent */}
        <div
          className="h-2 w-full"
          style={{ background: `linear-gradient(90deg, ${ultra.color_accent}, ${ultra.color_accent}80)` }}
        />

        <div className="p-5 sm:p-6">
          {/* Header: Name and Era */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-glow transition-all duration-300"
                style={{ color: isHovered ? ultra.color_accent : 'white' }}>
                {ultra.name}
              </h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getEraClass(ultra.era)}`}>
                {ultra.era}
              </span>
            </div>

            {/* ID badge */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-orbitron font-bold text-sm"
              style={{
                background: `${ultra.color_accent}20`,
                color: ultra.color_accent,
                boxShadow: `0 0 10px ${ultra.color_accent}40`
              }}
            >
              {ultra.id}
            </div>
          </div>

          {/* Info grid */}
          <div className="space-y-3">
            {/* Year */}
            <div className="flex items-center gap-3 text-gray-400">
              <Calendar className="w-4 h-4" style={{ color: ultra.color_accent }} />
              <span className="text-sm">{ultra.year}</span>
            </div>

            {/* Motif */}
            <div className="flex items-center gap-3 text-gray-400">
              <Tag className="w-4 h-4" style={{ color: ultra.color_accent }} />
              <span className="text-sm truncate">{ultra.motif}</span>
            </div>

            {/* Transformation Item - Highlighted */}
            <motion.div
              className="relative mt-4 p-3 rounded-xl overflow-hidden"
              animate={{
                backgroundColor: isHovered ? `${ultra.color_accent}15` : 'rgba(30, 41, 59, 0.5)',
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow background on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${ultra.color_accent}20, transparent)`,
                }}
              />

              <div className="relative flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: isHovered ? 360 : 0,
                    scale: isHovered ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent className="w-5 h-5" style={{ color: ultra.color_accent }} />
                </motion.div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Transformation Item</p>
                  <p className="text-sm font-medium text-white group-hover:text-glow"
                    style={{ textShadow: isHovered ? `0 0 10px ${ultra.color_accent}` : 'none' }}>
                    {ultra.transformation_item}
                  </p>
                </div>
                <IconComponent
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: ultra.color_accent }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="h-1 w-full"
          animate={{
            background: isHovered
              ? `linear-gradient(90deg, transparent, ${ultra.color_accent}, transparent)`
              : 'transparent',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full pointer-events-none"
              style={{ backgroundColor: ultra.color_accent }}
              initial={{
                opacity: 1,
                x: '50%',
                y: '50%',
                scale: 1
              }}
              animate={{
                opacity: 0,
                x: `${50 + (Math.random() - 0.5) * 100}%`,
                y: `${50 + (Math.random() - 0.5) * 100}%`,
                scale: 0
              }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
}
