import { useState } from 'react';
import { motion } from 'framer-motion';
import { type Ultraman } from '@/types/ultraman';
import { getImageUrl } from '@/utils/imagePath';
import StatRadarChart from './StatRadarChart';
import { X, Calendar, Tag, Shield, Zap } from 'lucide-react';
import {
  Star, Eye, Sword, Sun, Flame, Link, Crown, BookOpen, Heart,
  Mountain, BatteryCharging, Rocket, Droplets, Triangle, Globe, Earth, Waves,
  Moon, Scale, Network, FastForward, Infinity as InfinityIcon, FlaskConical, Swords, Sparkles,
  ArrowDownToLine, Cpu, Circle, Dna, Smile, Dumbbell, Wind, LetterText, Leaf,
  Orbit, Tent, Rainbow, Gem
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface UltraModalProps {
  ultra: Ultraman;
  onClose: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  Star, Eye, Shield, Sword, Sun, Flame, Link, Crown, Zap, BookOpen, Heart,
  Mountain, BatteryCharging, Rocket, Droplets, Triangle, Globe, Earth, Waves,
  Moon, Scale, Network, FastForward, Infinity: InfinityIcon, FlaskConical, Swords,
  Sparkles, ArrowDownToLine, Cpu, Circle, Dna, Smile, Dumbbell, Wind,
  LetterText, Leaf, Orbit, Tent, Rainbow, Gem
};

export default function UltraModal({ ultra, onClose }: UltraModalProps) {
  const [activeFormIndex, setActiveFormIndex] = useState(0);

  // Use the active form's data if it exists, otherwise fallback to base ultra
  const currentData = ultra.forms && ultra.forms.length > 0
    ? ultra.forms[activeFormIndex]
    : ultra;

  const colorAccent = currentData.color_accent || ultra.color_accent;

  const handleClose = () => {
    setTimeout(onClose, 300);
  };
  const getEraClass = (era: string) => {
    switch (era) {
      case 'Showa': return 'era-showa';
      case 'Heisei': return 'era-heisei';
      case 'New Generation': return 'era-newgen';
      case 'Reiwa': return 'era-reiwa';
      default: return 'era-showa';
    }
  };

  const IconComponent = iconMap[currentData.icon || ultra.icon] || Zap;
  // Make sure we pass the full Ultra object merging the base with the form overlay for getImageUrl
  const mergedUltraForImage = currentData === ultra ? ultra : { ...ultra, ...currentData };
  const imagePath = getImageUrl(mergedUltraForImage as Ultraman);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      />

      {/* Modal Content */}
      <motion.div
        layoutId={`card-${ultra.id}`}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden flex flex-col md:flex-row glass border shadow-2xl z-10"
        style={{
          borderColor: colorAccent,
          boxShadow: `0 0 50px ${colorAccent}40`,
          borderRadius: '24px'
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full relative overflow-hidden bg-gradient-to-br from-black/80 to-slate-900 border-r border-white/10 flex items-center justify-center p-8">
          {/* Background glow for image */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at center, ${colorAccent}, transparent 70%)`
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* The Image */}
          <motion.img
            key={`img-${ultra.id}-${activeFormIndex}`}
            src={imagePath}
            alt={currentData.name || ultra.name}
            className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onError={(e) => {
              // Fallback to initial display or placeholder if image not found
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${currentData.name || ultra.name}&background=random&color=fff&size=512`;
            }}
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col">
          <div className="mb-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="font-orbitron font-bold text-3xl sm:text-4xl text-white mb-2 text-glow"
              style={{ textShadow: `0 0 20px ${colorAccent}80` }}
            >
              {currentData.name || ultra.name}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getEraClass(ultra.era)}`}>
                {ultra.era}
              </span>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-orbitron font-bold"
                style={{ background: `${colorAccent}20`, color: colorAccent, border: `1px solid ${colorAccent}` }}
              >
                {ultra.id}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 flex-1"
          >
            {/* Year */}
            <div className="flex items-center gap-4 text-gray-300 p-3 rounded-xl bg-white/5 border border-white/5">
              <Calendar className="w-5 h-5" style={{ color: colorAccent }} />
              <div>
                <p className="text-xs text-gray-500 uppercase">Year of Appearance</p>
                <p className="text-lg">{ultra.year}</p>
              </div>
            </div>

            {/* Motif */}
            <div className="flex items-center gap-4 text-gray-300 p-3 rounded-xl bg-white/5 border border-white/5">
              <Tag className="w-5 h-5" style={{ color: colorAccent }} />
              <div>
                <p className="text-xs text-gray-500 uppercase">Motif / Design Concept</p>
                <p className="text-lg">{currentData.motif || ultra.motif}</p>
              </div>
            </div>

            {/* Transformation Item */}
            <div className="flex items-center gap-4 text-gray-300 p-4 rounded-xl relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{ background: `linear-gradient(90deg, ${colorAccent}, transparent)` }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <IconComponent className="w-8 h-8 relative z-10" style={{ color: colorAccent }} />
              </motion.div>
              <div className="relative z-10">
                <p className="text-xs text-white/50 uppercase tracking-widest mb-1 font-orbitron">Transformation Device</p>
                <p className="font-bold text-xl text-white text-glow" style={{ textShadow: `0 0 10px ${colorAccent}` }}>
                  {currentData.transformation_item || ultra.transformation_item}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-4 p-4 rounded-xl relative overflow-hidden bg-black/20 border border-white/5">
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ background: colorAccent }}
              />
              <p className="text-sm leading-relaxed text-gray-300">
                {currentData.description || ultra.description}
              </p>
            </div>

            {/* Radar Chart for Stats */}
            {currentData.stats && (
              <div className="w-full flex justify-center">
                <StatRadarChart stats={currentData.stats} color={colorAccent} />
              </div>
            )}
          </motion.div>

          {/* Decorative Bottom */}
          <motion.div
            className="h-2 w-full mt-8 rounded-full"
            style={{ background: `linear-gradient(90deg, ${colorAccent}, transparent)` }}
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          {/* Form Selector */}
          {ultra.forms && ultra.forms.length > 0 && (
            <div className="mt-8 border-t border-white/10 pt-6">
              <h4 className="text-white/80 text-sm uppercase tracking-wider font-semibold mb-4">Type Change</h4>
              <div className="flex flex-wrap gap-3">
                {ultra.forms.map((form, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFormIndex(idx)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${activeFormIndex === idx
                        ? 'text-white border-transparent'
                        : 'text-white/60 border-white/10 hover:border-white/30 hover:text-white/80'
                      }`}
                    style={activeFormIndex === idx ? {
                      background: `linear-gradient(135deg, ${form.color_accent}, ${form.color_accent}80)`,
                      boxShadow: `0 0 15px ${form.color_accent}40`
                    } : {}}
                  >
                    {form.name.replace(ultra.name + " ", "")}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
