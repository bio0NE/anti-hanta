import { motion } from "framer-motion";

export function Token() {
  return (
    <section id="token" className="py-32 px-6 relative z-20 bg-black border-y border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {[
              { title: "Community Driven", desc: "No central authority. Total resistance." },
              { title: "Meme Powered", desc: "Viral immunity mechanics." },
              { title: "Protocol Active", desc: "Constant liquidity shielding." },
              { title: "Trench Built", desc: "Designed for the harshest conditions." }
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/40 border border-primary/20 p-6 rounded-lg backdrop-blur-sm hover:border-primary/60 transition-colors group"
              >
                <div className="w-10 h-10 border border-primary text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-colors font-mono">
                  0{i+1}
                </div>
                <h4 className="text-white font-bold mb-2">{f.title}</h4>
                <p className="text-white/50 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center: Coin Emblem */}
          <motion.div 
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#050505] p-2 shadow-[0_0_50px_rgba(0,255,65,0.3)] border border-primary/50 group">
              {/* Inner Rim */}
              <div className="w-full h-full rounded-full border-4 border-dashed border-primary/40 flex items-center justify-center relative overflow-hidden group-hover:animate-[spin_10s_linear_infinite]">
                {/* Glowing Core */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.2)_0%,transparent_70%)]" />
                
                {/* Rat Logo inside coin */}
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 fill-primary drop-shadow-[0_0_10px_rgba(0,255,65,0.8)] z-10">
                  <path d="M50 20 C30 20, 20 40, 20 60 L80 60 C80 40, 70 20, 50 20 Z" />
                  <circle cx="35" cy="45" r="5" fill="#000" />
                  <circle cx="65" cy="45" r="5" fill="#000" />
                  <path d="M45 55 L55 55 L50 60 Z" fill="#000" />
                </svg>
              </div>

              {/* Surrounding Syringes */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-12 bg-primary/20 border border-primary rounded-sm shadow-[0_0_15px_rgba(0,255,65,0.5)]"></div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-12 bg-primary/20 border border-primary rounded-sm shadow-[0_0_15px_rgba(0,255,65,0.5)]"></div>
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 h-8 w-12 bg-primary/20 border border-primary rounded-sm shadow-[0_0_15px_rgba(0,255,65,0.5)]"></div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 h-8 w-12 bg-primary/20 border border-primary rounded-sm shadow-[0_0_15px_rgba(0,255,65,0.5)]"></div>
            </div>
          </motion.div>

          {/* Right: CTA Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left space-y-6"
          >
            <h3 className="font-['Bebas_Neue'] text-6xl md:text-8xl text-white leading-none">
              THE CURE<br/>HAS ARRIVED
            </h3>
            <p className="text-xl text-primary font-mono tracking-widest font-bold">
              $ANTI — THE CURE ON ETHEREUM
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <button className="bg-primary text-black font-['Bebas_Neue'] text-3xl px-8 py-4 hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,255,65,0.4)]">
                BUY $ANTI NOW
              </button>
              <button className="bg-transparent border border-white text-white font-['Bebas_Neue'] text-3xl px-8 py-4 hover:bg-white/10 transition-colors">
                ENTER THE LAB
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
