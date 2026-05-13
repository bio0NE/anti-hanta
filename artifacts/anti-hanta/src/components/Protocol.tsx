import { motion } from "framer-motion";

export function Protocol() {
  return (
    <section className="relative z-20 overflow-hidden bg-black py-32 px-6">

      {/* ================= ATMOSPHERE ================= */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Green glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(0,255,65,0.12), transparent 35%),
              radial-gradient(circle at 20% 20%, rgba(0,255,65,0.05), transparent 30%),
              radial-gradient(circle at 80% 10%, rgba(0,255,65,0.04), transparent 30%)
            `,
          }}
        />

        {/* Scanlines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,1) 3px)",
          }}
        />

        {/* Matrix code */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none font-mono text-[10px] text-primary leading-none flex flex-wrap">
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse"
              style={{
                animationDuration: `${Math.random() * 3 + 1}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {Math.random().toString(36).substring(2, 14)}
            </div>
          ))}
        </div>

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.92) 100%)",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-5 py-2 mb-8 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-mono text-xs tracking-[0.3em]">
              COMMAND CENTER ONLINE
            </span>
          </div>

          <h2
            className="font-['Bebas_Neue'] leading-[0.9] text-white"
            style={{
              fontSize: "clamp(72px,10vw,170px)",
              textShadow:
                "0 0 30px rgba(0,255,65,0.35), 0 10px 40px rgba(0,0,0,0.9)",
            }}
          >
            IMMUNE
            <br />
            <span
              className="text-primary"
              style={{
                textShadow:
                  "0 0 40px rgba(0,255,65,0.9), 0 0 120px rgba(0,255,65,0.3)",
              }}
            >
              PROTOCOL
            </span>
          </h2>
        </motion.div>

        {/* ================= MAIN PANEL ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
            relative
            w-full
            max-w-6xl
            mx-auto
            overflow-hidden
            rounded-[28px]
            border
            border-primary/20
            bg-[#050505]/90
            backdrop-blur-xl
            shadow-[0_0_80px_rgba(0,255,65,0.12)]
          "
        >

          {/* Top glow line */}
          <div className="absolute inset-x-0 top-0 h-px bg-primary/50" />

          {/* Radar BG */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="relative w-[700px] h-[700px]">

              {/* Radar circles */}
              <div className="absolute inset-0 rounded-full border border-primary/10" />
              <div className="absolute inset-[15%] rounded-full border border-primary/10" />
              <div className="absolute inset-[30%] rounded-full border border-primary/10" />
              <div className="absolute inset-[45%] rounded-full border border-primary/10" />

              {/* Crosshair */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/10 -translate-x-1/2" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/10 -translate-y-1/2" />

              {/* Rotating sweep */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 70%, rgba(0,255,65,0.35) 100%)",
                }}
              />
            </div>
          </div>

          {/* GRID */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 p-8 md:p-14 min-h-[700px]">

            {/* LEFT STATUS */}
            <div className="space-y-5">

              {[
                ["IMMUNITY", "100%"],
                ["THREAT LEVEL", "CONTAINED"],
                ["ETHEREUM SHIELD", "ACTIVE"],
                ["OUTBREAK STATUS", "CONTROLLED"],
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-primary/20 bg-primary/5 p-5 backdrop-blur-sm"
                >
                  <div className="text-xs font-mono tracking-[0.25em] text-white/40 mb-2">
                    {item[0]}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />

                    <div className="text-primary font-bold tracking-wider">
                      {item[1]}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER CORE */}
            <div className="flex flex-col items-center justify-center">

              {/* Core */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(0,255,65,0.2)",
                    "0 0 80px rgba(0,255,65,0.45)",
                    "0 0 40px rgba(0,255,65,0.2)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                }}
                className="
                  relative
                  w-72
                  h-72
                  rounded-full
                  border
                  border-primary/40
                  flex
                  items-center
                  justify-center
                  bg-black/70
                "
              >

                {/* Inner pulse */}
                <div className="absolute inset-[18%] rounded-full border border-primary/30 animate-pulse" />

                {/* Center */}
                <div className="text-center">
                  <div className="font-['Bebas_Neue'] text-[120px] leading-none text-primary">
                    100
                  </div>

                  <div className="font-mono text-xs tracking-[0.35em] text-white/60">
                    IMMUNE SCORE
                  </div>
                </div>
              </motion.div>

              {/* Subtitle */}
              <div className="mt-8 text-center">
                <div className="text-primary font-mono tracking-[0.3em] text-sm">
                  ETHEREUM DEFENSE MATRIX
                </div>
              </div>
            </div>

            {/* RIGHT TERMINAL */}
            <div className="flex flex-col justify-between">

              {/* Terminal */}
              <div className="border border-primary/20 bg-black/70 p-5 font-mono text-sm text-primary h-full">
                <div className="text-white/40 mb-4">
                  SYSTEM TERMINAL
                </div>

                <div className="space-y-2">
                  <div>{">"} Initializing resistance nodes...</div>
                  <div>{">"} Connecting Ethereum shield...</div>
                  <div>{">"} Liquidity protection enabled...</div>
                  <div>{">"} Anti-virus memes deployed...</div>
                  <div>{">"} Scanning infected sectors...</div>

                  <div className="text-white/50">
                    {">"} Awaiting further commands...
                  </div>
                </div>

                {/* blinking cursor */}
                <div className="mt-3 flex items-center gap-1">
                  <span className="text-primary">{">"}</span>
                  <span className="w-3 h-5 bg-primary animate-pulse" />
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex justify-between text-xs font-mono text-white/30 tracking-wider">
                <span>SYS.VER 4.9.2</span>
                <span>UPTIME 99.99%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}