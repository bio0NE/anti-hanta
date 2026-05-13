import { motion } from "framer-motion";

export function AppMockup() {
  return (
    <section id="app" className="py-32 px-6 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        
        <div className="flex-1 space-y-8">
          <h2 className="font-['Bebas_Neue'] text-6xl md:text-8xl text-white">
            POCKET <span className="text-primary">IMMUNITY</span>
          </h2>
          <p className="text-xl text-white/70 font-medium">
            Monitor your protection status on the go. The Anti Hanta app provides real-time threat detection, survival leaderboards, and direct access to the serum liquidity pools.
          </p>
          <ul className="space-y-4 font-bold font-mono tracking-wide text-sm text-white/90">
            <li className="flex items-center gap-3">
              <div className="w-4 h-4 bg-primary shadow-[0_0_8px_rgba(0,255,65,0.8)]" />
              REAL-TIME OUTBREAK RADAR
            </li>
            <li className="flex items-center gap-3">
              <div className="w-4 h-4 bg-primary shadow-[0_0_8px_rgba(0,255,65,0.8)]" />
              IMMUNE SCORE TRACKING
            </li>
            <li className="flex items-center gap-3">
              <div className="w-4 h-4 bg-primary shadow-[0_0_8px_rgba(0,255,65,0.8)]" />
              SURVIVAL LEADERBOARDS
            </li>
          </ul>
          <button className="mt-8 bg-black border border-primary text-primary px-8 py-3 font-bold hover:bg-primary hover:text-black transition-colors shadow-[0_0_15px_rgba(0,255,65,0.2)]">
            COMING SOON
          </button>
        </div>

        <div className="flex-1 flex justify-center w-full">
          {/* Phone Frame */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[300px] h-[600px] bg-black border-[4px] border-[#222] rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,255,65,0.2)] overflow-hidden"
          >
            {/* Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-[#222] rounded-b-xl w-32 mx-auto z-50"></div>
            
            {/* App UI */}
            <div className="absolute inset-0 bg-[#050505] p-6 pt-12 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="font-['Bebas_Neue'] text-2xl text-primary tracking-widest">ANTI HANTA</div>
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                </div>
              </div>

{/* Circular Gauge */}
<div className="relative w-36 h-36 mx-auto mb-8 flex items-center justify-center">

  {/* Ambient Glow */}
  <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl scale-125" />

  <svg
    viewBox="0 0 160 160"
    className="absolute inset-0 w-full h-full -rotate-90"
  >
    {/* Background Ring */}
    <circle
      cx="80"
      cy="80"
      r="58"
      fill="none"
      stroke="#111"
      strokeWidth="8"
    />

    {/* Soft Glow Ring */}
    <circle
      cx="80"
      cy="80"
      r="58"
      fill="none"
      stroke="rgba(0,255,65,0.18)"
      strokeWidth="14"
      className="blur-[4px]"
    />

    {/* Progress Ring */}
    <circle
      cx="80"
      cy="80"
      r="58"
      fill="none"
      stroke="#00ff41"
      strokeWidth="8"
      strokeLinecap="round"
      strokeDasharray="364.4"
      strokeDashoffset="36.4"
      className="drop-shadow-[0_0_10px_rgba(0,255,65,0.85)]"
    />
  </svg>

  {/* Center Text */}
  <div className="relative z-10 text-center">
    <div
      className="text-4xl font-['Bebas_Neue'] text-white leading-none"
      style={{
        textShadow: "0 0 14px rgba(255,255,255,0.2)",
      }}
    >
      100
    </div>

    <div className="mt-1 text-[9px] tracking-[0.22em] font-mono text-primary font-bold">
      IMMUNE SCORE
    </div>
  </div>
</div>

              {/* Status */}
              <div className="bg-[#111] border border-primary/30 rounded-xl p-4 mb-6 text-center">
                <div className="text-xs text-white/50 font-mono mb-1">PROTECTION STATUS</div>
                <div className="text-primary font-bold tracking-widest">ACTIVE</div>
              </div>

              {/* Leaderboard */}
              <div className="flex-1">
                <div className="text-xs text-white/50 font-mono mb-3">SURVIVAL LEADERBOARD</div>
                <div className="space-y-2">
                  {[
                    { id: "0x8F...3B2", score: "99.9" },
                    { id: "0x4A...9C1", score: "98.5" },
                    { id: "0x7D...2E4", score: "97.2" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center bg-[#0a0a0a] p-3 rounded-lg border border-white/5">
                      <span className="font-mono text-xs text-white/80">{row.id}</span>
                      <span className="font-mono text-sm text-primary font-bold">{row.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
