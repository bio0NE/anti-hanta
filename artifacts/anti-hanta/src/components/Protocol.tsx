import { motion } from "framer-motion";

export function Protocol() {
  return (
    <section className="py-24 px-4 bg-black relative z-20 overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none font-mono text-[10px] text-primary leading-none overflow-hidden flex flex-wrap" aria-hidden="true">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="animate-pulse" style={{ animationDuration: `${Math.random() * 2 + 1}s`, animationDelay: `${Math.random() * 2}s` }}>
            {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-['Bebas_Neue'] text-6xl md:text-8xl text-white drop-shadow-[0_0_20px_rgba(0,255,65,0.6)]">
            IMMUNE <span className="text-primary">PROTOCOL</span>
          </h2>
          <p className="text-primary font-mono tracking-[0.3em] mt-4 font-bold">COMMAND CENTER ONLINE</p>
        </div>

        {/* Hologram Display */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video md:aspect-[21/9] border border-primary/50 bg-primary/5 rounded-lg backdrop-blur-sm shadow-[0_0_50px_rgba(0,255,65,0.15)] flex items-center justify-center overflow-hidden">
          {/* Radar Background */}
          <div className="absolute w-[80%] h-[80%] rounded-full border border-primary/20 flex items-center justify-center">
            <div className="absolute w-[66%] h-[66%] rounded-full border border-primary/20"></div>
            <div className="absolute w-[33%] h-[33%] rounded-full border border-primary/20"></div>
            <div className="absolute w-full h-[1px] bg-primary/20"></div>
            <div className="absolute h-full w-[1px] bg-primary/20"></div>
            {/* Radar Sweep */}
            <div className="absolute inset-0 rounded-full border border-primary/40 origin-center animate-[spin_4s_linear_infinite]"
              style={{
                background: "conic-gradient(from 0deg, transparent 70%, rgba(0,255,65,0.4) 100%)"
              }}
            ></div>
          </div>

          {/* Status Readouts */}
          <div className="absolute top-4 left-4 font-mono text-xs text-primary space-y-2">
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-primary animate-pulse"></div> IMMUNITY: 100%</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-primary animate-pulse"></div> THREAT LEVEL: CONTAINED</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-primary animate-pulse"></div> ETHEREUM SHIELD: ACTIVE</div>
          </div>

          <div className="absolute bottom-4 right-4 font-mono text-xs text-white/50 text-right">
            <div>SYS.VER: 4.9.2</div>
            <div>UPTIME: 99.99%</div>
            <div className="text-primary mt-1 animate-pulse">AWAITING ORDERS...</div>
          </div>

          {/* Animated Data Streams */}
          <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 animate-[pulse_2s_ease-in-out_infinite]"></div>
          <div className="absolute inset-y-0 right-1/3 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 animate-[pulse_3s_ease-in-out_infinite]"></div>

          {/* Lab Silhouettes */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end gap-10 opacity-40">
            <svg viewBox="0 0 50 100" className="w-12 h-24 fill-primary">
              <rect x="15" y="80" width="20" height="20" />
              <path d="M15 40 L35 40 L40 80 L10 80 Z" />
              <circle cx="25" cy="25" r="15" />
            </svg>
            <svg viewBox="0 0 50 100" className="w-10 h-20 fill-primary translate-y-4">
              <rect x="15" y="80" width="20" height="20" />
              <path d="M15 40 L35 40 L40 80 L10 80 Z" />
              <circle cx="25" cy="25" r="15" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
