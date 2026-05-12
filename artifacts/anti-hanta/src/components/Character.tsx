import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Character() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const width1 = useTransform(scrollYProgress, [0, 1], ["0%", "98%"]);
  const width2 = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);
  const width3 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const width4 = useTransform(scrollYProgress, [0, 1], ["0%", "99%"]);

  return (
    <section ref={ref} className="py-24 px-4 w-full relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="relative border-2 border-primary/30 bg-black/80 backdrop-blur-md p-8 md:p-12 overflow-hidden">
          {/* Tech Corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>
          
          {/* Scanlines overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "repeating-linear-gradient(to bottom, transparent, transparent 2px, #00ff41 2px, #00ff41 4px)" }}></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
            <div className="md:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[300px] aspect-square rounded-full border border-primary/40 bg-primary/5 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(0,255,65,0.2)]">
                <svg viewBox="0 0 200 200" className="w-[120%] h-[120%] drop-shadow-[0_0_15px_rgba(0,255,65,0.5)]">
                  {/* Character Portrait */}
                  <defs>
                    <linearGradient id="armorGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fff" />
                      <stop offset="100%" stopColor="#ccc" />
                    </linearGradient>
                  </defs>
                  <path d="M50 200 C50 120, 80 80, 100 80 C120 80, 150 120, 150 200 Z" fill="url(#armorGrad)" stroke="#00ff41" />
                  <path d="M70 120 Q100 70 130 120 Q100 160 70 120 Z" fill="#f8fafc" />
                  <ellipse cx="60" cy="90" rx="15" ry="25" transform="rotate(-20 60 90)" fill="#fff" />
                  <ellipse cx="140" cy="90" rx="15" ry="25" transform="rotate(20 140 90)" fill="#fff" />
                  <path d="M75 110 Q100 130 125 110 L120 135 Q100 150 80 135 Z" fill="#111" />
                  <circle cx="90" cy="120" r="6" fill="#00ff41" className="animate-pulse" />
                  <circle cx="110" cy="120" r="6" fill="#00ff41" className="animate-pulse" />
                  <rect x="90" y="150" width="20" height="30" fill="#222" rx="4" stroke="#00ff41" />
                </svg>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="inline-block bg-primary/20 text-primary px-3 py-1 text-xs font-mono font-bold tracking-widest border border-primary/50 mb-6 self-start animate-pulse">
                IMMUNITY STATUS: PROTECTED
              </div>
              
              <h3 className="font-['Bebas_Neue'] text-5xl text-white tracking-wide mb-4">
                SUBJECT: <span className="text-primary">THE WHITE RAT</span>
              </h3>
              
              <p className="text-white/70 mb-8 font-medium">
                The sole survivor of the great rug-pull contagion. Adapted. Enhanced. Armed with cryptographic serum. The White Rat leads the charge against the viral swarms infecting the network.
              </p>

              <div className="space-y-5 font-mono text-sm font-bold tracking-wider">
                <div>
                  <div className="flex justify-between text-white/80 mb-1">
                    <span>IMMUNITY</span>
                    <span className="text-primary">98%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden border border-primary/30">
                    <motion.div style={{ width: width1 }} className="h-full bg-primary shadow-[0_0_10px_rgba(0,255,65,1)]" />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-white/80 mb-1">
                    <span>COMBAT POWER</span>
                    <span className="text-primary">95%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden border border-primary/30">
                    <motion.div style={{ width: width2 }} className="h-full bg-primary shadow-[0_0_10px_rgba(0,255,65,1)]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-white/80 mb-1">
                    <span>VIRAL RESISTANCE</span>
                    <span className="text-primary">100%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden border border-primary/30">
                    <motion.div style={{ width: width3 }} className="h-full bg-primary shadow-[0_0_10px_rgba(0,255,65,1)]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-white/80 mb-1">
                    <span>MEME FORCE</span>
                    <span className="text-primary">99%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden border border-primary/30">
                    <motion.div style={{ width: width4 }} className="h-full bg-primary shadow-[0_0_10px_rgba(0,255,65,1)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
