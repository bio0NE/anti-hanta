import { motion } from "framer-motion";

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-32 px-6 relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="rounded-[30px] overflow-hidden border border-[#7fff00]/20 bg-black/60 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,255,65,0.12)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* =========================
                LEFT CONTENT
            ========================== */}
            <div className="p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">

              {/* glow */}
              <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00ff41]/10 blur-[120px]" />

              <h2
                className="relative z-10 text-white leading-[0.9] mb-10"
                style={{
                  fontFamily: "'Rubik Distressed', sans-serif",
                  fontSize: "clamp(60px,8vw,120px)",
                  textShadow:
                    "0 0 30px rgba(0,255,65,0.4), 0 0 80px rgba(0,255,65,0.15)",
                }}
              >
                TOKENOMICS
              </h2>

              <div className="relative z-10 space-y-5">

                {/* SUPPLY */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group relative overflow-hidden rounded-2xl border border-[#7fff00]/30 bg-[#7fff00]/10 p-5"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_left,rgba(127,255,0,0.25),transparent_70%)]" />
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-[#b7ff7a] text-sm tracking-[0.3em] uppercase">
                        Total Supply
                      </p>
                      <h3 className="text-3xl font-black text-white">
                        100%
                      </h3>
                    </div>

                    <div className="w-5 h-5 rounded-full bg-[#7fff00] shadow-[0_0_25px_#7fff00]" />
                  </div>
                </motion.div>

                {/* LIQUIDITY */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_left,rgba(34,211,238,0.25),transparent_70%)]" />
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-cyan-300 text-sm tracking-[0.3em] uppercase">
                        Liquidity
                      </p>
                      <h3 className="text-3xl font-black text-white">
                        95%
                      </h3>
                    </div>

                    <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_25px_cyan]" />
                  </div>
                </motion.div>

                {/* MARKETING */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group relative overflow-hidden rounded-2xl border border-orange-400/30 bg-orange-400/10 p-5"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_left,rgba(251,146,60,0.25),transparent_70%)]" />
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-orange-300 text-sm tracking-[0.3em] uppercase">
                        Marketing + Research
                      </p>
                      <h3 className="text-3xl font-black text-white">
                        3%
                      </h3>
                    </div>

                    <div className="w-5 h-5 rounded-full bg-orange-400 shadow-[0_0_25px_orange]" />
                  </div>
                </motion.div>

                {/* TEAM */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group relative overflow-hidden rounded-2xl border border-red-400/30 bg-red-400/10 p-5"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_left,rgba(248,113,113,0.25),transparent_70%)]" />
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-red-300 text-sm tracking-[0.3em] uppercase">
                        Team Medical
                      </p>
                      <h3 className="text-3xl font-black text-white">
                        2%
                      </h3>
                    </div>

                    <div className="w-5 h-5 rounded-full bg-red-400 shadow-[0_0_25px_red]" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* =========================
                RIGHT LAB GLASS
            ========================== */}
            <div className="relative min-h-[650px] overflow-hidden bg-black flex items-center justify-center">

              {/* LAB GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.12),transparent_70%)]" />

              {/* scanlines */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,255,65,0.5) 3px)",
                }}
              />

              {/* floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-[#7fff00]"
                    initial={{
                      y: 500,
                      x: Math.random() * 400,
                      opacity: 0,
                    }}
                    animate={{
                      y: -100,
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 5,
                      repeat: Infinity,
                      delay: Math.random() * 4,
                    }}
                  />
                ))}
              </div>

              {/* GLASS TUBE */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[240px] h-[520px]"
              >
                {/* outer glow */}
                <div className="absolute inset-0 rounded-[120px] bg-[#00ff41]/20 blur-[50px]" />

                {/* glass */}
                <div className="absolute inset-0 rounded-[120px] border border-white/20 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[inset_0_0_50px_rgba(255,255,255,0.08)]">

                  {/* liquid */}
                  <motion.div
                    animate={{
                      height: ["55%", "70%", "60%", "75%", "55%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                      background:
                        "linear-gradient(to top, #00ff41 0%, #00c853 100%)",
                      boxShadow:
                        "0 0 50px rgba(0,255,65,0.6)",
                    }}
                  />

                  {/* moving wave */}
                  <motion.div
                    animate={{
                      x: [-40, 40, -40],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute bottom-[58%] w-[200%] h-16 opacity-40"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
                    }}
                  />

                  {/* glass reflection */}
                  <div className="absolute top-0 left-[18%] w-[30px] h-full bg-white/10 blur-md rotate-[8deg]" />
                </div>

                {/* top cap */}
                <div className="absolute top-[-25px] left-1/2 -translate-x-1/2 w-[140px] h-[50px] rounded-xl bg-zinc-900 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.08)]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}