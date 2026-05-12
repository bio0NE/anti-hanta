import { motion } from "framer-motion";

export function Origin() {
  return (
    <section id="about" className="py-32 px-6 relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-xl border border-primary/40 bg-card/80 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,65,0.15)] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-10 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-primary/20">
              <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl text-white mb-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
                THE ORIGIN OF <br/><span className="text-primary">THE CURE</span>
              </h2>
              <div className="space-y-6 text-white/70 text-lg font-medium">
                <p>
                  Year 2024. The Ethereum network was overrun. Malicious viral tokens spread uncontrollably, 
                  infecting wallets and draining liquidity. The market was sick.
                </p>
                <p>
                  Deep within an underground bio-lab, a rogue faction of developers synthesized the ultimate counter-measure. 
                  They didn't build another virus. They built immunity.
                </p>
                <p className="text-primary/90 font-bold border-l-2 border-primary pl-4">
                  ANTI HANTA was born—a heavily armored, tactical protocol designed to cleanse the trenches and establish a new era of survival.
                </p>
              </div>
            </div>
            
            <div className="relative p-10 md:p-16 flex items-center justify-center min-h-[400px] bg-black/50 overflow-hidden">
              {/* Scanlines overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff41 2px, #00ff41 4px)" }}></div>
              
              {/* Serum Bottle SVG */}
              <div className="relative w-48 h-80 z-10">
                <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-[0_0_30px_rgba(0,255,65,0.6)]">
                  <defs>
                    <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                      <stop offset="20%" stopColor="rgba(255,255,255,0.1)" />
                      <stop offset="80%" stopColor="rgba(255,255,255,0.1)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
                    </linearGradient>
                    <linearGradient id="liquid" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#00ff41" />
                      <stop offset="70%" stopColor="#00cc33" />
                      <stop offset="100%" stopColor="rgba(0,255,65,0.8)" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Cap */}
                  <rect x="70" y="20" width="60" height="30" rx="5" fill="#333" stroke="#555" strokeWidth="2" />
                  <rect x="75" y="10" width="50" height="10" rx="2" fill="#111" />
                  
                  {/* Bottle Neck */}
                  <path d="M85 50 L115 50 L125 90 L75 90 Z" fill="url(#glass)" stroke="rgba(255,255,255,0.5)" />
                  
                  {/* Main Bottle Body */}
                  <rect x="40" y="90" width="120" height="280" rx="20" fill="url(#glass)" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
                  
                  {/* Liquid Inside */}
                  <g filter="url(#glow)">
                    <rect x="45" y="140" width="110" height="225" rx="15" fill="url(#liquid)" className="animate-pulse" />
                    {/* Bubbles */}
                    <circle cx="70" cy="300" r="5" fill="#fff" opacity="0.6" />
                    <circle cx="100" cy="250" r="8" fill="#fff" opacity="0.4" />
                    <circle cx="130" cy="180" r="4" fill="#fff" opacity="0.8" />
                    <circle cx="80" cy="200" r="6" fill="#fff" opacity="0.5" />
                  </g>
                  
                  {/* Label */}
                  <rect x="35" y="180" width="130" height="80" fill="#111" stroke="#00ff41" strokeWidth="2" />
                  <text x="100" y="210" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle" letterSpacing="1">ANTI HANTA</text>
                  <text x="100" y="230" fill="#00ff41" fontSize="10" textAnchor="middle">IMMUNITY SERUM</text>
                  <text x="100" y="245" fill="#555" fontSize="8" textAnchor="middle">LOT #0x8F9...3B2</text>
                  
                  {/* Volume markings */}
                  <line x1="165" y1="130" x2="155" y2="130" stroke="#fff" strokeWidth="2" opacity="0.5" />
                  <line x1="165" y1="200" x2="155" y2="200" stroke="#fff" strokeWidth="2" opacity="0.5" />
                  <line x1="165" y1="270" x2="155" y2="270" stroke="#fff" strokeWidth="2" opacity="0.5" />
                  <line x1="165" y1="340" x2="155" y2="340" stroke="#fff" strokeWidth="2" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
