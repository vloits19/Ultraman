import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Zap } from 'lucide-react';
import { AudioPlayer } from './components/AudioPlayer';
import './App.css';

import Hero from '@/sections/Hero';
import EraFilter from '@/components/EraFilter';
import UltraCard from '@/components/UltraCard';
import UltraModal from '@/components/UltraModal';
import BetaCapsule from '@/components/BetaCapsule';
import GuessGameModal from '@/components/GuessGameModal';
import BattleArenaModal from '@/components/BattleArenaModal';
import { ULTRAMAN_DATA, HIDDEN_ULTRA, type EraFilter as EraFilterType, type Ultraman } from '@/types/ultraman';

// Konami code: SHUWATCH
const KONAMI_CODE = ['S', 'H', 'U', 'W', 'A', 'T', 'C', 'H'];


function App() {
  const [showHero, setShowHero] = useState(true);
  const [selectedEra, setSelectedEra] = useState<EraFilterType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [konamiProgress, setKonamiProgress] = useState(0);
  const [showHiddenUltra, setShowHiddenUltra] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [randomAccent, setRandomAccent] = useState('#EF4444');
  const [showTransformEffect, setShowTransformEffect] = useState(false);
  const [selectedUltra, setSelectedUltra] = useState<Ultraman | null>(null);
  const [showGame, setShowGame] = useState(false);
  const [showBattleArena, setShowBattleArena] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const stars = useMemo(() => {
    return Array.from({ length: 50 }).map(() => {
      const size = Math.random() * 3 + 1;
      return {
        left: `${Math.random() * 100}%`,
        size: size,
        duration: 10 + Math.random() * 20,
        delay: -(Math.random() * 30),
      };
    });
  }, []);

  // Filter Ultras based on era and search
  const filteredUltras = ULTRAMAN_DATA.filter((ultra) => {
    const matchesEra = selectedEra === 'All' 
                       ? ultra.era !== 'Dark' 
                       : (selectedEra === 'Secondary' ? ultra.isSecondary 
                       : (selectedEra === 'Tertiary' ? ultra.isTertiary : ultra.era === selectedEra));
    const matchesSearch = ultra.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ultra.motif.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ultra.transformation_item.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesEra && matchesSearch;
  });

  const triggerKonamiEffect = useCallback(() => {
    setIsShaking(true);
    setShowHiddenUltra(true);

    // Scroll to hidden ultra after shake
    setTimeout(() => {
      setIsShaking(false);
      const hiddenElement = document.getElementById('hidden-ultra');
      if (hiddenElement) {
        hiddenElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 800);
  }, []);

  // Konami code handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();

      if (key === KONAMI_CODE[konamiProgress]) {
        const newProgress = konamiProgress + 1;
        setKonamiProgress(newProgress);

        if (newProgress === KONAMI_CODE.length) {
          // Konami code completed!
          triggerKonamiEffect();
          setKonamiProgress(0);
        }
      } else {
        setKonamiProgress(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiProgress, triggerKonamiEffect]);

  // Transformation effect (Random Ultra Selection)
  const handleTransformation = useCallback(() => {
    setShowTransformEffect(true);

    // Filter out Dark Ultras from random selection and Hidden Ultra to keep it fair
    const availableUltras = ULTRAMAN_DATA.filter(u => u.era !== 'Dark');
    const randomUltra = availableUltras[Math.floor(Math.random() * availableUltras.length)];
    
    // Set random accent to the selected Ultra's color
    setRandomAccent(randomUltra.color_accent);

    // End flash effect, show modal
    setTimeout(() => {
      setShowTransformEffect(false);
      setSelectedUltra(randomUltra);
    }, 500); // Shorter duration to match capsule animation tail
  }, []);

  const handleInitialize = () => {
    setShowHero(false);
    setTimeout(() => {
      mainRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className={`relative min-h-screen ${isShaking ? 'screen-shake' : ''}`}>
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Dark overlay for Dark era */}
        <div
          className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
          style={{ backgroundColor: '#000000', opacity: selectedEra === 'Dark' ? 0.85 : 0 }}
        />

        {/* Gradient orbs */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl transition-colors duration-1000"
          style={{ background: selectedEra === 'Dark' ? 'radial-gradient(circle, #7F1D1D80, transparent 70%)' : `radial-gradient(circle, ${randomAccent}40, transparent 70%)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl transition-colors duration-1000"
          style={{ background: selectedEra === 'Dark' ? 'radial-gradient(circle, #4C1D9580, transparent 70%)' : 'radial-gradient(circle, #3B82F640, transparent 70%)' }}
        />

        {/* Stars */}
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: star.left,
              top: 0,
              width: star.size,
              height: star.size,
            }}
            animate={{
              y: ['110vh', '-10vh'],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "linear",
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <AnimatePresence>
        {showHero && (
          <motion.div
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onInitialize={handleInitialize} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main ref={mainRef} className="relative z-10">
        {/* Navigation Bar */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="sticky top-0 z-40 glass-strong border-b border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center p-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${randomAccent}, ${randomAccent}80)`,
                    boxShadow: `0 0 15px ${randomAccent}60`
                  }}
                >
                  <img src="/favicon.png" alt="Logo" className="w-full h-full object-contain rounded-full" />
                </div>
                <span className="font-orbitron font-bold text-lg hidden sm:block">NEBULA M78</span>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search Ultras..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              {/* Stats & Game Button */}
              <div className="hidden md:flex items-center gap-4 text-sm text-gray-400">
                <span>{filteredUltras.length} Ultras</span>
                <button 
                  onClick={() => setShowBattleArena(true)}
                  className="px-4 py-2 bg-red-500/20 text-red-500 font-bold border border-red-500/50 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-[0_0_15px_rgba(239,68,68,0.2)] flex items-center gap-2"
                >
                  <span className="text-lg">⚔️</span> Battle Arena
                </button>
                <button 
                  onClick={() => setShowGame(true)}
                  className="px-4 py-2 bg-yellow-500/20 text-yellow-500 font-bold border border-yellow-500/50 rounded-full hover:bg-yellow-500 hover:text-black transition-colors shadow-[0_0_15px_rgba(234,179,8,0.2)]"
                >
                  Guess The Ultra!?
                </button>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <EraFilter selectedEra={selectedEra} onEraChange={setSelectedEra} />
            </motion.div>
          </div>
        </section>

        {/* Ultra Grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 pb-32">
          <div className="max-w-7xl mx-auto">
            {/* Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredUltras.map((ultra, index) => (
                  <UltraCard
                    key={ultra.id}
                    ultra={showTransformEffect ? { ...ultra, color_accent: randomAccent } : ultra}
                    index={index}
                    onClick={() => setSelectedUltra(ultra)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Hidden Ultra (Konami Code Reward) */}
            <AnimatePresence>
              {showHiddenUltra && (
                <motion.div
                  id="hidden-ultra"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', bounce: 0.3 }}
                  className="mt-12"
                >
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30"
                    >
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-orbitron text-sm">SECRET UNLOCKED</span>
                      <Zap className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                  </div>

                  <div className="max-w-md mx-auto">
                    <UltraCard 
                       ultra={HIDDEN_ULTRA} 
                       index={0} 
                       isHidden 
                       onClick={() => setSelectedUltra(HIDDEN_ULTRA)}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Empty State */}
            {filteredUltras.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-orbitron text-xl text-white mb-2">No Ultras Found</h3>
                <p className="text-gray-400">Try adjusting your search or filter</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* Beta Capsule Easter Egg */}
      {!showHero && <BetaCapsule onTransform={handleTransformation} />}

      {/* Konami Code Hint (subtle) */}
      {!showHero && konamiProgress > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40"
        >
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
            <span className="text-xs text-gray-400">Typing:</span>
            <span className="font-orbitron text-sm text-yellow-400">
              {KONAMI_CODE.slice(0, konamiProgress).join('')}
              <span className="animate-pulse">_</span>
            </span>
          </div>
        </motion.div>
      )}

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedUltra && (
          <UltraModal 
            ultra={selectedUltra} 
            onClose={() => setSelectedUltra(null)} 
          />
        )}
        {showGame && (
          <GuessGameModal onClose={() => setShowGame(false)} />
        )}
        {showBattleArena && (
          <BattleArenaModal onClose={() => setShowBattleArena(false)} />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Nebula M78 Database • Celebrating 58 Years of Ultraman
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Type "SHUWATCH" for a surprise ✨
          </p>
        </div>
      </footer>
      
      {/* Audio Player */}
      <AudioPlayer />
    </div>
  );
}

export default App;
