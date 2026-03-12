import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, Repeat, Repeat1, Volume2, VolumeX } from 'lucide-react';

import ost_blazar from '@/assest/ost/ost_blazar.mp3';
import ost_mebius from '@/assest/ost/ost_mebius.mp3';
import ost_orb from '@/assest/ost/ost_orb.mp3';
import ost_tiga from '@/assest/ost/ost_tiga.mp3';
import ost_x from '@/assest/ost/ost_x.mp3';

const PLAYLIST = [
  { title: "Ultraman Tiga OST", src: ost_tiga },
  { title: "Ultraman Mebius OST", src: ost_mebius },
  { title: "Ultraman X OST", src: ost_x },
  { title: "Ultraman Orb OST", src: ost_orb },
  { title: "Ultraman Blazar OST", src: ost_blazar },
];

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Auto-play starts true
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [loopMode, setLoopMode] = useState<'none' | 'all' | 'one'>('all');
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt auto-play on mount, but browsers might block it until interaction
    if (audioRef.current && isPlaying && !hasInteracted) {
      audioRef.current.play().catch(error => {
        console.log("Auto-play prevented by browser. Waiting for user interaction.", error);
        setIsPlaying(false);
      });
    }
  }, [hasInteracted, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.muted = isMuted;
    }
  }, [isMuted]);


  const handlePlayPause = () => {
    setHasInteracted(true);
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    setHasInteracted(true);
    if (currentTrackIndex < PLAYLIST.length - 1) {
      setCurrentTrackIndex(prev => prev + 1);
    } else {
      setCurrentTrackIndex(0); // Loop back to start
    }
    setIsPlaying(true);
  };

  const handleTrackEnded = () => {
    if (loopMode === 'one') {
      if(audioRef.current){
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else if (loopMode === 'all') {
      handleNextTrack();
    } else {
      // none
      if (currentTrackIndex < PLAYLIST.length - 1) {
        setCurrentTrackIndex(prev => prev + 1);
      } else {
        setIsPlaying(false);
      }
    }
  };

  const toggleLoopMode = () => {
    if (loopMode === 'none') setLoopMode('all');
    else if (loopMode === 'all') setLoopMode('one');
    else setLoopMode('none');
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };


  return (
    <div className="fixed bottom-6 left-6 z-50 glass rounded-full px-4 py-2 flex items-center gap-4 bg-black/40 border border-white/10 backdrop-blur-md transition-all hover:bg-black/60 group">
      <audio
        ref={audioRef}
        src={PLAYLIST[currentTrackIndex].src}
        onEnded={handleTrackEnded}
      />
      
      {/* Track Info (Hover to reveal full title, otherwise marquee or short info) */}
      <div className="w-0 overflow-hidden group-hover:w-32 transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-semibold text-white/80">
        {PLAYLIST[currentTrackIndex].title}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <button 
          onClick={handlePlayPause}
          className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
        </button>
        
        <button 
          onClick={handleNextTrack}
          className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
          title="Skip"
        >
          <SkipForward size={18} />
        </button>
        
        <button 
          onClick={toggleLoopMode}
          className={`p-2 rounded-full hover:bg-white/20 transition-colors ${loopMode !== 'none' ? 'text-blue-400' : 'text-white/60'}`}
          title={`Loop: ${loopMode}`}
        >
          {loopMode === 'one' ? <Repeat1 size={18} /> : <Repeat size={18} />}
        </button>

        <button 
          onClick={toggleMute}
          className="p-2 rounded-full hover:bg-white/20 transition-colors text-white/80"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

      </div>
    </div>
  );
};
