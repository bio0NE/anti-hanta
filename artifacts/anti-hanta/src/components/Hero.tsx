import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;

      if (layer1Ref.current) layer1Ref.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      if (layer2Ref.current) layer2Ref.current.style.transform = `translate(${x * -40}px, ${y * -40}px)`;
      if (layer3Ref.current) layer3Ref.current.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
      if (layer4Ref.current) layer4Ref.current.style.transform = `translate(${x * 80}px, ${y * 80}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Layer 1: Background */}
      <div 
        ref={layer1Ref}
        className="absolute inset-[-5%] w-[110%] h-[110%] z-0"
        style={{
          background: "radial-gradient(circle at center, #0a1f0a 0%, #000000 70%)",
        }}
      >
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0, 255, 65, 0.1) 40px, rgba(0, 255, 65, 0.1) 80px)"
        }} />
        {/* Lab elements */}
        <div className="absolute top-[20%] left-[10%] w-[200px] h-[300px] border border-primary/20 rounded-t-full opacity-30 shadow-[0_0_50px_rgba(0,255,65,0.2)]" />
        <div className="absolute top-[30%] right-[15%] w-[150px] h-[250px] border border-primary/20 rounded-t-full opacity-20 shadow-[0_0_40px_rgba(0,255,65,0.1)]" />
      </div>

      {/* Layer 2: Hero Rat */}
      <div ref={layer2Ref} className="absolute left-[-5%] bottom-[-10%] z-10 w-[600px] h-[800px] hidden md:block opacity-90">
        <svg viewBox="0 0 400 600" className="w-full h-full drop-shadow-[0_0_30px_rgba(0,255,65,0.5)]">
          <defs>
            <radialGradient id="ratGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00ff41" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00ff41" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="armor" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="mask" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="300" r="180" fill="url(#ratGlow)" />
          {/* Body/Armor */}
          <path d="M100 600 L120 350 C120 280, 150 200, 200 200 C250 200, 280 280, 280 350 L300 600 Z" fill="url(#armor)" stroke="#00ff41" strokeWidth="2" />
          {/* Shoulders */}
          <path d="M80 380 Q100 300 150 320 Q120 400 80 380 Z" fill="#334155" stroke="#00ff41" />
          <path d="M320 380 Q300 300 250 320 Q280 400 320 380 Z" fill="#334155" stroke="#00ff41" />
          {/* Mask */}
          <path d="M140 220 C140 180, 260 180, 260 220 L240 320 C240 350, 160 350, 160 320 Z" fill="url(#mask)" stroke="#00ff41" strokeWidth="3" />
          {/* Eyes/Filters */}
          <circle cx="170" cy="240" r="25" fill="#00ff41" className="animate-pulse" />
          <circle cx="230" cy="240" r="25" fill="#00ff41" className="animate-pulse" />
          <path d="M180 300 L220 300 L210 330 L190 330 Z" fill="#111" />
          <circle cx="200" cy="315" r="10" fill="#00ff41" />
          {/* Serum Tubes */}
          <rect x="130" y="380" width="20" height="80" rx="10" fill="#111" stroke="#00ff41" />
          <rect x="132" y="385" width="16" height="60" rx="8" fill="#00ff41" className="animate-pulse" />
          <rect x="250" y="380" width="20" height="80" rx="10" fill="#111" stroke="#00ff41" />
          <rect x="252" y="385" width="16" height="60" rx="8" fill="#00ff41" className="animate-pulse" />
        </svg>
      </div>

      {/* Layer 3: Enemy Rats */}
      <div ref={layer3Ref} className="absolute right-[-10%] bottom-[0%] z-0 w-[500px] h-[600px] hidden md:block opacity-60">
        <svg viewBox="0 0 500 600" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,0,0,0.3)]">
          <defs>
            <radialGradient id="enemyGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff0000" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="250" cy="300" r="200" fill="url(#enemyGlow)" />
          {/* Enemy 1 */}
          <g transform="translate(50, 100)">
            <path d="M100 500 C80 350, 120 250, 180 250 C240 250, 280 350, 260 500 Z" fill="#050505" stroke="#333" strokeWidth="2" />
            <path d="M140 280 Q180 240 220 280 L200 350 Q180 370 160 350 Z" fill="#111" />
            <circle cx="160" cy="290" r="15" fill="#ff0000" className="animate-pulse" />
            <circle cx="200" cy="290" r="15" fill="#ff0000" className="animate-pulse" />
            {/* Infected veins */}
            <path d="M130 350 Q150 400 120 450" fill="none" stroke="#ff0000" strokeWidth="2" opacity="0.5" />
            <path d="M230 350 Q210 400 240 450" fill="none" stroke="#ff0000" strokeWidth="2" opacity="0.5" />
          </g>
          {/* Enemy 2 */}
          <g transform="translate(250, 200) scale(0.8)">
            <path d="M100 500 C80 350, 120 250, 180 250 C240 250, 280 350, 260 500 Z" fill="#050505" stroke="#333" strokeWidth="2" />
            <circle cx="160" cy="290" r="15" fill="#ff0000" />
            <circle cx="200" cy="290" r="15" fill="#ff0000" />
          </g>
        </svg>
      </div>

      {/* Layer 4: Foreground/Ground */}
      <div ref={layer4Ref} className="absolute inset-x-0 bottom-[-10%] h-[30vh] z-20"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,255,65,0.05) 50%, transparent 100%)"
        }}
      >
        <div className="absolute bottom-10 left-[30%] w-[100px] h-[20px] bg-primary/20 blur-[10px] rounded-[100%]" />
        <div className="absolute bottom-20 right-[40%] w-[150px] h-[30px] bg-primary/30 blur-[15px] rounded-[100%]" />
      </div>

      {/* Fog/Smoke */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-black via-primary/5 to-transparent z-10" />

      {/* Center Content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="font-['Bebas_Neue'] text-[100px] md:text-[160px] leading-[0.8] text-white drop-shadow-[0_0_30px_rgba(0,255,65,0.6)]">
            ANTI<br />HANTA
          </div>
          
          <h2 className="mt-6 text-xl md:text-2xl font-bold text-primary tracking-[0.2em] uppercase">
            THE IMMUNE VACCINE OF HANTA
          </h2>
          
          <div className="mt-4 inline-block border border-primary/50 bg-primary/10 px-4 py-1 rounded-sm shadow-[0_0_15px_rgba(0,255,65,0.2)]">
            <span className="text-primary font-bold tracking-wider text-sm">NOT A VIRUS. A CURE.</span>
          </div>
          
          <p className="mt-8 text-lg text-white/80 max-w-2xl mx-auto font-medium">
            While fear infects the blockchain, we engineer the antidote. Join the resistance. 
            Inject the serum. Survive the trench warfare of Ethereum.
          </p>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-primary font-bold">
            <span className="animate-pulse">⚠</span>
            <span className="tracking-widest">THE CURE IS SPREADING.</span>
            <span className="animate-pulse">⚠</span>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-primary text-black font-['Bebas_Neue'] text-2xl px-10 py-4 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,255,65,0.4)] hover:shadow-[0_0_40px_rgba(0,255,65,0.8)] translate-y-0 hover:-translate-y-1">
              BUY $ANTI
            </button>
            <button className="w-full sm:w-auto bg-black/50 backdrop-blur-md border border-primary text-primary font-['Bebas_Neue'] text-2xl px-10 py-4 hover:bg-primary/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,65,0.2)] hover:shadow-[0_0_25px_rgba(0,255,65,0.4)] translate-y-0 hover:-translate-y-1">
              JOIN THE RESISTANCE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
