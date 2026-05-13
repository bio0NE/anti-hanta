import { motion } from "framer-motion";
const ratImg = "/images/ratwarrior.png";

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
              <div className="relative w-full h-full flex items-center justify-center">
  
              {/* BACK GLOW */}
              <div className="absolute inset-0 bg-primary/20 blur-[90px] rounded-full animate-pulse" />

              {/* ROTATING LAB RING */}
              <div className="absolute w-[90%] h-[90%] rounded-full border border-primary/20 animate-spin"
                style={{ animationDuration: "18s" }}
              />

              {/* IMAGE */}
              <motion.img
                src={ratImg}
                alt="ANTI HANTA Warrior"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                animate={{
                  y: [0, -12, 0],
                }}
                style={{
                  filter:
                    "drop-shadow(0 0 30px rgba(0,255,65,0.55)) drop-shadow(0 0 80px rgba(0,255,65,0.2))",
                }}
                className="relative z-10 w-full max-w-[480px] object-contain"
              />

              {/* GREEN SCAN */}
              <motion.div
                animate={{
                  y: ["-120%", "120%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
                className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent blur-2xl"
              />
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
