import { motion } from 'framer-motion';
import { type EraFilter as EraFilterType } from '@/types/ultraman';

interface EraFilterProps {
  selectedEra: EraFilterType;
  onEraChange: (era: EraFilterType) => void;
}

const eras: { value: EraFilterType; label: string; color: string }[] = [
  { value: 'All', label: 'All Eras', color: '#EF4444' },
  { value: 'Showa', label: 'Showa', color: '#DC2626' },
  { value: 'Heisei', label: 'Heisei', color: '#3B82F6' },
  { value: 'New Generation', label: 'New Generation', color: '#A855F7' },
  { value: 'Reiwa', label: 'Reiwa', color: '#F59E0B' },
  { value: 'Secondary', label: 'Secondary', color: '#10B981' },
  { value: 'Tertiary', label: 'Tertiary', color: '#14B8A6' },
  { value: 'Dark', label: 'Dark', color: '#7E22CE' },
];

export default function EraFilter({ selectedEra, onEraChange }: EraFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {eras.map((era) => {
        const isSelected = selectedEra === era.value;
        return (
          <motion.button
            key={era.value}
            onClick={() => onEraChange(era.value)}
            className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-full font-orbitron text-sm sm:text-base font-medium transition-all duration-300 ${
              isSelected ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                backgroundColor: isSelected ? era.color : 'rgba(30, 41, 59, 0.5)',
                boxShadow: isSelected
                  ? `0 0 20px ${era.color}80, 0 0 40px ${era.color}40`
                  : '0 0 0px transparent',
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Border glow */}
            <motion.div
              className="absolute inset-0 rounded-full border"
              animate={{
                borderColor: isSelected ? `${era.color}80` : 'rgba(255, 255, 255, 0.1)',
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Label */}
            <span className="relative z-10">{era.label}</span>

            {/* Selected indicator */}
            {isSelected && (
              <motion.div
                layoutId="selectedEra"
                className="absolute inset-0 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${era.color}40, ${era.color}20)`,
                }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
