import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const characterImg = "/images/white-rat.png";

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
              <div className="relative w-full max-w-[340px] aspect-square rounded-full border border-primary/40 bg-primary/5 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(0,255,65,0.2)]">
                <div className="relative w-full h-full flex items-center justify-center">

                  {/* LAB GLOW */}
                  <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full animate-pulse" />

                  {/* ROTATING RING */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 14,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-[88%] h-[88%] rounded-full border border-primary/30"
                  />

                  {/* CHARACTER IMAGE */}
                  <motion.img
                    src={characterImg}
                    alt="White Rat"
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 w-[120%] h-[120%] object-contain translate-x-[-20px] translate-y-[20px]"
                    style={{
                      filter:
                        "drop-shadow(0 0 30px rgba(0,255,65,0.55)) drop-shadow(0 0 70px rgba(0,255,65,0.25))",
                    }}
                  />

                  {/* SCAN EFFECT */}
                  <motion.div
                    animate={{
                      y: ["-120%", "120%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent blur-2xl"
                  />
                </div>
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
