import { motion } from "framer-motion";

const features = [
  {
    icon: "☣",
    title: "Meme Culture",
    desc: "Born from the chaos of the infected market. The ultimate counter-narrative."
  },
  {
    icon: "⚡",
    title: "Survival Energy",
    desc: "Powered by resistance and an unbreakable diamond-handed community."
  },
  {
    icon: "🧬",
    title: "Futuristic Immunity",
    desc: "Next-gen token technology designed to withstand the harshest bear markets."
  },
  {
    icon: "🤖",
    title: "AI Health Utility",
    desc: "Smart immune protocol systems continuously monitoring network threats."
  },
  {
    icon: "⚔",
    title: "Ethereum Trench Warfare",
    desc: "Battle-hardened on-chain survival mechanisms. We don't flinch."
  }
];

export function Features() {
  return (
    <section className="py-32 px-6 relative z-20 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-['Bebas_Neue'] text-6xl md:text-8xl text-white drop-shadow-[0_0_15px_rgba(0,255,65,0.4)]">
            BUILT <span className="text-primary">DIFFERENT</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 shadow-[0_0_10px_rgba(0,255,65,0.8)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-card/60 backdrop-blur-sm border border-primary/20 border-l-4 border-l-primary p-6 rounded-r-lg hover:bg-card/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex gap-6 items-start">
                  <div className="text-3xl text-primary drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-wide uppercase">{f.title}</h3>
                    <p className="text-white/60">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-[3/4]"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
              <svg viewBox="0 0 400 600" className="w-full h-full relative z-10 drop-shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                {/* Powerful Rat Stance SVG */}
                <defs>
                  <linearGradient id="whiteArmor" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#cbd5e1" />
                  </linearGradient>
                  <linearGradient id="darkMetal" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>
                {/* Background Glow */}
                <circle cx="200" cy="300" r="150" fill="#00ff41" opacity="0.1" filter="blur(20px)" />
                {/* Body Core */}
                <path d="M120 600 L140 300 C140 220, 160 150, 200 150 C240 150, 260 220, 260 300 L280 600 Z" fill="url(#whiteArmor)" stroke="#00ff41" strokeWidth="2" />
                {/* Chest Plate */}
                <path d="M150 280 L250 280 L230 400 L170 400 Z" fill="url(#darkMetal)" stroke="#00ff41" strokeWidth="2" />
                <circle cx="200" cy="320" r="20" fill="#00ff41" opacity="0.8" className="animate-pulse" />
                {/* Head */}
                <path d="M150 160 Q200 80 250 160 Q200 220 150 160 Z" fill="url(#whiteArmor)" />
                {/* Ears */}
                <ellipse cx="130" cy="120" rx="30" ry="40" transform="rotate(-30 130 120)" fill="url(#whiteArmor)" />
                <ellipse cx="270" cy="120" rx="30" ry="40" transform="rotate(30 270 120)" fill="url(#whiteArmor)" />
                <ellipse cx="130" cy="120" rx="15" ry="25" transform="rotate(-30 130 120)" fill="#111" />
                <ellipse cx="270" cy="120" rx="15" ry="25" transform="rotate(30 270 120)" fill="#111" />
                {/* Visor/Eyes */}
                <path d="M160 140 Q200 160 240 140 L230 170 Q200 180 170 170 Z" fill="#111" />
                <circle cx="180" cy="155" r="8" fill="#00ff41" className="animate-pulse" />
                <circle cx="220" cy="155" r="8" fill="#00ff41" className="animate-pulse" />
                {/* Crossed Arms */}
                <path d="M100 350 Q150 300 250 350 L230 380 Q150 340 120 380 Z" fill="url(#whiteArmor)" stroke="#333" />
                <path d="M300 350 Q250 300 150 350 L170 380 Q250 340 280 380 Z" fill="url(#whiteArmor)" stroke="#333" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
