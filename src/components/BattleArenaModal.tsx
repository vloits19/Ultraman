import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Swords, Zap, Shield, Flame, Wind, Target, ChevronDown } from 'lucide-react';
import { ULTRAMAN_DATA, type Ultraman } from '@/types/ultraman';

interface BattleArenaModalProps {
  onClose: () => void;
}

const STAT_ICONS: Record<string, React.ReactNode> = {
  strength: <Flame className="w-4 h-4" />,
  speed: <Wind className="w-4 h-4" />,
  energy: <Zap className="w-4 h-4" />,
  defense: <Shield className="w-4 h-4" />,
  technique: <Target className="w-4 h-4" />,
};

const STAT_COLORS: Record<string, string> = {
  strength: "bg-red-500",
  speed: "bg-blue-500",
  energy: "bg-yellow-500",
  defense: "bg-emerald-500",
  technique: "bg-purple-500",
};

export default function BattleArenaModal({ onClose }: BattleArenaModalProps) {
  const [ultra1, setUltra1] = useState<Ultraman | null>(null);
  const [ultra2, setUltra2] = useState<Ultraman | null>(null);
  const [isBattling, setIsBattling] = useState(false);
  const [battleResult, setBattleResult] = useState<{
    winner: Ultraman | null;
    score1: number;
    score2: number;
    multiplier1: number;
    multiplier2: number;
    base1: number;
    base2: number;
  } | null>(null);

  const availableUltras = ULTRAMAN_DATA.filter(u => u.stats);

  const calculateTotalStats = (ultra: Ultraman) => {
    if (!ultra.stats) return 0;
    return Object.values(ultra.stats).reduce((a, b) => a + b, 0);
  };

  const handleBattle = () => {
    if (!ultra1 || !ultra2) return;

    setIsBattling(true);
    setBattleResult(null);

    // Simulate battle calculation
    setTimeout(() => {
      const base1 = calculateTotalStats(ultra1);
      const base2 = calculateTotalStats(ultra2);

      // Random factor between 0.8x and 1.2x
      const multiplier1 = 0.8 + Math.random() * 0.4;
      const multiplier2 = 0.8 + Math.random() * 0.4;

      const score1 = Math.round(base1 * multiplier1);
      const score2 = Math.round(base2 * multiplier2);

      let winner = null;
      if (score1 > score2) winner = ultra1;
      else if (score2 > score1) winner = ultra2;

      setBattleResult({
        winner,
        score1,
        score2,
        multiplier1,
        multiplier2,
        base1,
        base2
      });
      setIsBattling(false);
    }, 2000); // 2 seconds animation
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className={`relative w-full max-w-5xl max-h-[90vh] glass-strong rounded-3xl overflow-hidden flex flex-col border border-white/10 ${isBattling ? 'screen-shake' : ''}`}
        style={{ boxShadow: '0 0 40px rgba(0,0,0,0.5)' }}
      >
        {/* Header */}
        <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex items-center gap-2">
            <Swords className="w-6 h-6 text-yellow-500" />
            <h2 className="font-orbitron font-bold text-xl tracking-wider text-white">BATTLE ARENA</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start">

            {/* Fighter 1 */}
            <FighterSelect
              label="PLAYER 1"
              selected={ultra1}
              onSelect={setUltra1}
              options={availableUltras}
              isBattling={isBattling}
              resultClass={battleResult ? (battleResult.winner?.id === ultra1?.id ? 'ring-4 ring-yellow-400' : 'opacity-50 grayscale') : ''}
            />

            {/* VS Badge */}
            <div className="flex flex-col items-center justify-center self-center py-8">
              <div className="w-16 h-16 rounded-full glass-strong flex items-center justify-center border-2 border-yellow-500/50 relative">
                <span className="font-orbitron font-bold text-2xl text-yellow-500 absolute z-10">VS</span>
                {isBattling && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-t-2 border-b-2 border-yellow-400 opacity-50"
                  />
                )}
              </div>
            </div>

            {/* Fighter 2 */}
            <FighterSelect
              label="PLAYER 2"
              selected={ultra2}
              onSelect={setUltra2}
              options={availableUltras}
              isBattling={isBattling}
              resultClass={battleResult ? (battleResult.winner?.id === ultra2?.id ? 'ring-4 ring-yellow-400' : 'opacity-50 grayscale') : ''}
              alignRight
            />
          </div>

          {/* Battle Button */}
          <div className="mt-8 flex justify-center pb-4">
            <AnimatePresence mode="wait">
              {!battleResult ? (
                <motion.button
                  key="battle-btn"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleBattle}
                  disabled={!ultra1 || !ultra2 || isBattling}
                  className={`px-12 py-4 rounded-full font-orbitron font-bold text-xl tracking-widest transition-all duration-300 ${!ultra1 || !ultra2 || isBattling
                      ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed border border-gray-500/30'
                      : 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_30px_rgba(220,38,38,0.5)] border border-red-400/50 hover:scale-105'
                    }`}
                >
                  {isBattling ? 'FIGHTING...' : 'BATTLE!'}
                </motion.button>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full max-w-2xl mx-auto glass-strong rounded-2xl p-6 border border-white/10 text-center"
                >
                  <h3 className="font-orbitron text-2xl mb-4 text-white">
                    {battleResult.winner ? `${battleResult.winner.name} WINS!` : 'DRAW!'}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                    <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                      <div className="text-gray-400 mb-1">P1 Calculation</div>
                      <div className="text-white">Base: {battleResult.base1}</div>
                      <div className="text-yellow-400">RNG: x{battleResult.multiplier1.toFixed(2)}</div>
                      <div className="text-xl text-red-400 font-bold mt-2">Score: {battleResult.score1}</div>
                    </div>
                    <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                      <div className="text-gray-400 mb-1">P2 Calculation</div>
                      <div className="text-white">Base: {battleResult.base2}</div>
                      <div className="text-yellow-400">RNG: x{battleResult.multiplier2.toFixed(2)}</div>
                      <div className="text-xl text-blue-400 font-bold mt-2">Score: {battleResult.score2}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setBattleResult(null)}
                    className="mt-6 px-8 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-colors border border-white/10"
                  >
                    BATTLE AGAIN
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Subcomponent for selecting and viewing a fighter
function FighterSelect({
  label,
  selected,
  onSelect,
  options,
  isBattling,
  resultClass = '',
  alignRight = false
}: {
  label: string,
  selected: Ultraman | null,
  onSelect: (u: Ultraman) => void,
  options: Ultraman[],
  isBattling: boolean,
  resultClass?: string,
  alignRight?: boolean
}) {
  return (
    <div className={`flex flex-col gap-4 ${alignRight ? 'items-end' : 'items-start'} ${resultClass} transition-all duration-500`}>
      <h3 className="font-orbitron font-bold text-gray-400 tracking-widest">{label}</h3>

      {/* Selector */}
      <div className="relative w-full">
        <div className="relative">
          <select
            className="w-full appearance-none bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 truncate pr-10"
            value={selected?.id || ""}
            onChange={(e) => {
              const u = options.find(o => o.id === parseInt(e.target.value));
              if (u) onSelect(u);
            }}
            disabled={isBattling}
          >
            <option value="" disabled>Select Ultraman...</option>
            {options.map(u => (
              <option key={u.id} value={u.id} className="bg-gray-900">{u.name}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Stats Display */}
      {selected && selected.stats ? (
        <div className="w-full glass rounded-2xl p-4 sm:p-6 border border-white/5 relative overflow-hidden group">
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150"
            style={{ backgroundColor: selected.color_accent }}
          />

          <h4 className="font-orbitron font-bold text-xl mb-6 text-white text-center">{selected.name}</h4>

          <div className="space-y-4">
            {Object.entries(selected.stats).map(([stat, value]) => (
              <div key={stat} className="relative">
                <div className="flex justify-between items-center mb-1 text-sm">
                  <span className="flex items-center gap-1.5 text-gray-300 capitalize">
                    <span style={{ color: selected.color_accent }}>{STAT_ICONS[stat]}</span>
                    {stat}
                  </span>
                  <span className="font-mono font-bold text-white">{value}</span>
                </div>
                <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(value / 100) * 100}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full ${STAT_COLORS[stat] || 'bg-gray-500'}`}
                    style={{
                      boxShadow: `0 0 10px ${STAT_COLORS[stat]?.replace('bg-', '') || 'gray'}`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center bg-black/20 p-3 rounded-xl">
            <span className="text-gray-400 font-bold text-sm">TOTAL POWER</span>
            <span className="font-orbitron text-2xl" style={{ color: selected.color_accent }}>
              {Object.values(selected.stats).reduce((a, b) => a + b, 0)}
            </span>
          </div>
        </div>
      ) : (
        <div className="w-full aspect-[3/4] glass rounded-2xl border border-white/5 border-dashed flex items-center justify-center">
          <div className="text-gray-500 text-sm flex flex-col items-center gap-2">
            <Swords className="w-8 h-8 opacity-50" />
            <span>Select a fighter</span>
          </div>
        </div>
      )}
    </div>
  );
}
