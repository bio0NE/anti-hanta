import { motion } from "framer-motion";

export function Resistance() {
  return (
    <section id="community" className="py-32 relative z-20 overflow-hidden bg-black flex items-center justify-center min-h-[80vh]">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black"></div>
      
      {/* Smoke Effects */}
      <div className="absolute inset-0 opacity-30" 
        style={{
          background: "radial-gradient(circle at 30% 70%, rgba(0,255,65,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(0,255,65,0.15) 0%, transparent 50%)"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        {/* Resistance Army SVG Concept */}
        <div className="relative w-full h-[300px] mb-12 flex justify-center opacity-60 mix-blend-screen">
          <svg viewBox="0 0 1000 300" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,255,65,0.5)]">
            <defs>
              <linearGradient id="flagGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00ff41" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00aa22" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Center Leader */}
            <g transform="translate(500, 200) scale(1.5)">
              <path d="M-20 0 L0 -60 L20 0 Z" fill="#fff" />
              <circle cx="0" cy="-70" r="15" fill="#fff" />
              {/* Flag Pole */}
              <line x1="-10" y1="-50" x2="-30" y2="-150" stroke="#555" strokeWidth="3" />
              {/* Flag */}
              <path d="M-30 -150 Q20 -160 50 -130 Q20 -120 -25 -110 Z" fill="url(#flagGrad)" className="animate-pulse" />
            </g>

            {/* Left Army */}
            <g transform="translate(400, 220) scale(1.2)">
              <path d="M-15 0 L0 -50 L15 0 Z" fill="#ccc" />
              <circle cx="0" cy="-60" r="12" fill="#ccc" />
            </g>
            <g transform="translate(300, 240)">
              <path d="M-15 0 L0 -50 L15 0 Z" fill="#999" />
              <circle cx="0" cy="-60" r="12" fill="#999" />
            </g>
            <g transform="translate(200, 250) scale(0.8)">
              <path d="M-15 0 L0 -50 L15 0 Z" fill="#666" />
              <circle cx="0" cy="-60" r="12" fill="#666" />
            </g>

            {/* Right Army */}
            <g transform="translate(600, 220) scale(1.2)">
              <path d="M-15 0 L0 -50 L15 0 Z" fill="#ccc" />
              <circle cx="0" cy="-60" r="12" fill="#ccc" />
            </g>
            <g transform="translate(700, 240)">
              <path d="M-15 0 L0 -50 L15 0 Z" fill="#999" />
              <circle cx="0" cy="-60" r="12" fill="#999" />
              {/* Flag Pole */}
              <line x1="10" y1="-40" x2="30" y2="-120" stroke="#444" strokeWidth="2" />
              {/* Flag */}
              <path d="M30 -120 Q-10 -130 -30 -100 Q0 -90 25 -80 Z" fill="url(#flagGrad)" className="animate-pulse" />
            </g>
            <g transform="translate(800, 250) scale(0.8)">
              <path d="M-15 0 L0 -50 L15 0 Z" fill="#666" />
              <circle cx="0" cy="-60" r="12" fill="#666" />
            </g>
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Bebas_Neue'] text-7xl md:text-[120px] leading-none text-white drop-shadow-[0_0_30px_rgba(0,255,65,0.6)] mb-8">
            JOIN THE <br className="md:hidden" />
            <span className="text-primary border-b-8 border-primary inline-block pb-2">RESISTANCE</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium">
            The infected swarms are multiplying. The only way to survive is together. 
            Arm yourself with $ANTI and hold the line.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#0088cc] hover:bg-[#00aaff] text-white font-bold px-10 py-4 text-xl tracking-wider flex items-center justify-center gap-3 transition-colors shadow-[0_0_20px_rgba(0,136,204,0.4)]">
              TELEGRAM COMMS
            </button>
            <button className="bg-[#5865F2] hover:bg-[#7289da] text-white font-bold px-10 py-4 text-xl tracking-wider flex items-center justify-center gap-3 transition-colors shadow-[0_0_20px_rgba(88,101,242,0.4)]">
              DISCORD BARRACKS
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
