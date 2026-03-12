import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, RefreshCcw, CheckCircle, XCircle, Search } from 'lucide-react';
import { ULTRAMAN_DATA, type Ultraman } from '@/types/ultraman';
import { getImageUrl } from '@/utils/imagePath';

interface GuessGameModalProps {
  onClose: () => void;
}

export default function GuessGameModal({ onClose }: GuessGameModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [targetUltra, setTargetUltra] = useState<Ultraman | null>(null);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setAttempts(0);
    pickNewUltra();
  };

  const pickNewUltra = () => {
    const hiddenUltraNames = ["Ultraman King", "Evil Tiga", "Dark Zagi", "Belial", "Ultraman Tregear"];
    // Filter out Dark Ultras/Hidden for a fair game
    const available = ULTRAMAN_DATA.filter(u => !hiddenUltraNames.includes(u.name));
    const random = available[Math.floor(Math.random() * available.length)];
    setTargetUltra(random);
    setGuess('');
    setResult('idle');
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guess.trim() || !targetUltra) return;

    // Normalize strings for comparison (remove spaces, lower case, remove "Ultraman")
    const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '').replace('ultraman', '');
    
    const isCorrect = normalize(guess) === normalize(targetUltra.name);

    if (isCorrect) {
      setResult('correct');
      setScore(s => s + 1);
    } else {
      setResult('wrong');
    }
    
    setAttempts(a => a + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
    >
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-2xl bg-black border border-white/10 rounded-3xl shadow-2xl overflow-hidden glass z-10"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
          <h2 className="font-orbitron font-bold text-2xl text-white flex items-center gap-3">
            <Search className="text-yellow-400" />
            Who's that Ultraman?!
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {!isPlaying ? (
            <div className="text-center py-12">
              <div className="w-32 h-32 mx-auto mb-8 relative">
                 <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl animate-pulse" />
                 <img 
                    src={getImageUrl(ULTRAMAN_DATA[0])} 
                    alt="Mystery" 
                    className="w-full h-full object-contain filter brightness-0 relative z-10"
                 />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to test your knowledge?</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Guess the silhouette of the Ultraman. You can just type their name (e.g. "Tiga" or "Ultraman Tiga").
              </p>
              <button
                onClick={startGame}
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full transition-all hover:scale-105"
              >
                <Play className="w-5 h-5" fill="currentColor" />
                START GAME
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              {/* Score Board */}
              <div className="w-full flex justify-between items-center mb-8 px-4 py-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-gray-400 font-semibold">
                  Attempt: <span className="text-white text-lg">{attempts}</span>
                </div>
                <div className="text-gray-400 font-semibold">
                  Score: <span className="text-yellow-400 text-xl">{score}</span>
                </div>
              </div>

              {/* Game Area */}
              <AnimatePresence mode="wait">
                {targetUltra && (
                  <motion.div
                    key={targetUltra.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="w-64 h-64 mb-8 relative flex items-center justify-center"
                  >
                    {/* Glow effect only when correct */}
                    {result === 'correct' && (
                        <div 
                          className="absolute inset-0 blur-3xl opacity-50 rounded-full transition-all duration-1000"
                          style={{ background: targetUltra.color_accent }}
                        />
                    )}
                    
                    <img
                      src={getImageUrl(targetUltra)}
                      alt="Mystery Ultra"
                      className={`w-full h-full object-contain relative z-10 transition-all duration-1000 drop-shadow-2xl ${
                        result === 'idle' ? 'brightness-0 contrast-200 drop-shadow-none' : 'brightness-100'
                      }`}
                      style={result === 'idle' ? { filter: 'brightness(0) drop-shadow(0 0 0 rgba(0,0,0,0))' } : {}}
                      draggable={false}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="w-full max-w-md relative">
                <div className="relative flex items-center">
                    <input
                      ref={inputRef}
                      type="text"
                      value={guess}
                      onChange={(e) => setGuess(e.target.value)}
                      disabled={result !== 'idle'}
                      placeholder="Type the name..."
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white text-xl text-center focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all disabled:opacity-50"
                      autoComplete="off"
                    />
                    
                    {/* Result Icon */}
                    {result === 'correct' && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-4">
                            <CheckCircle className="w-8 h-8 text-green-500 rounded-full bg-white/10" />
                        </motion.div>
                    )}
                    {result === 'wrong' && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-4">
                            <XCircle className="w-8 h-8 text-red-500 rounded-full bg-white/10" />
                        </motion.div>
                    )}
                </div>

                <AnimatePresence>
                  {result !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 text-center"
                    >
                      <p className={`text-xl font-bold mb-4 ${result === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
                        {result === 'correct' ? 'CORRECT!' : `WRONG! It was ${targetUltra?.name}`}
                      </p>
                      <button
                        type="button"
                        onClick={pickNewUltra}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                      >
                        <RefreshCcw className="w-4 h-4" />
                        Next Ultra
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
