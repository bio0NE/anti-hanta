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
                  Year 2026. The HANTA virus went viral across the Ethereum network. Malicious tokens spread like a digital plague, infecting wallets, draining liquidity, and turning the trenches into chaos. Panic consumed the market. No protocol was safe.
                </p>
                <p>
                  Deep beneath the surface, inside a hidden underground bio-lab, a rogue faction of developers began engineering a countermeasure. They didn’t create another virus. They created immunity.
                </p>
                <p className="text-primary/90 font-bold border-l-2 border-primary pl-4">
                  ANTI HANTA was born — a heavily armored, tactical protocol forged to hunt the infection, cleanse the blockchain trenches, and restore survival to a collapsing ecosystem.
                </p>
              </div>
            </div>
            
            <div className="relative p-10 md:p-16 flex items-center justify-center min-h-[400px] bg-black/50 overflow-hidden">
              {/* Scanlines overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff41 2px, #00ff41 4px)" }}></div>
              
            {/* LAB IMAGE */}
            <div className="relative z-10 group">

              {/* green glow */}
              <div className="absolute inset-0 bg-[#00ff41]/20 blur-[70px] scale-110 rounded-full" />

              {/* animated image */}
              <motion.img
                src="/images/lab-glass.png"
                alt="ANTI HANTA Lab Glass"
                className="relative w-[320px] md:w-[420px] object-contain drop-shadow-[0_0_40px_rgba(0,255,65,0.45)] select-none pointer-events-none"
                draggable={false}
                animate={{
                  y: [0, -12, 0],
                  rotate: [-1, 1, -1],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* scan glow */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(0,255,65,0.35) 50%, transparent 100%)",
                  backgroundSize: "100% 200px",
                  animation: "scanMove 4s linear infinite",
                }}
              />

              {/* floating particles */}
              {[...Array(14)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[#7fff00]"
                  initial={{
                    opacity: 0,
                    x: Math.random() * 300 - 150,
                    y: 100,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: -180,
                  }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                  }}
                  style={{
                    left: "50%",
                    bottom: "10%",
                    boxShadow: "0 0 12px #7fff00",
                  }}
                />
              ))}
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
