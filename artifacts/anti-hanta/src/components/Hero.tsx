import { useEffect, useRef } from "react";
import { motion } from "framer-motion";


const bgImg = "/images/bg.png";
const heroLeft = "/images/hero-left.png";
const heroRight = "/images/hero-right.png";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ONLY HEROES MOVE
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      // LEFT HERO
      if (layer2Ref.current) {
        layer2Ref.current.style.transform =
          `translate(${x * -22}px, ${y * -12}px)`;
      }

      // RIGHT HERO
      if (layer3Ref.current) {
        layer3Ref.current.style.transform =
          `translate(${x * 22}px, ${y * -12}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >

      {/* STATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">

        <img
          src={bgImg}
          alt=""
          className="w-full h-full object-cover object-center"
          draggable={false}
        />

        {/* GREEN ATMOSPHERE */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 70%, rgba(0,255,65,0.18), transparent 35%)",
          }}
        />

        {/* RED ATMOSPHERE */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 70%, rgba(255,0,0,0.12), transparent 35%)",
          }}
        />

        {/* DARK OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.88) 100%)",
          }}
        />

        {/* VIGNETTE */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 42%, rgba(0,0,0,0.75) 100%)",
          }}
        />

      </div>

      {/* LEFT HERO */}
      <div
        ref={layer2Ref}
        className="absolute z-10 hidden md:block"
        style={{
          width: "clamp(780px, 58vw, 980px)",
          left: "-10%",
          bottom: "-8%",
          transition: "transform 80ms ease-out",
          willChange: "transform",
        }}
      >
        <img
          src={heroLeft}
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* RIGHT HERO */}
      <div
        ref={layer3Ref}
        className="absolute z-10 hidden md:block"
        style={{
          width: "clamp(680px, 58vw, 980px)",
          right: "-16%",
          bottom: "-1%",
          transition: "transform 80ms ease-out",
          willChange: "transform",
        }}
      >
        <img
          src={heroRight}
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

{/* CENTER CONTENT */}
<div className="relative z-30 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="flex flex-col items-center"
  >

      {/* TITLE */}
      <div
        className="leading-[0.85] select-none"
        style={{
          fontFamily: "'Dead Font Walking', sans-serif",
          fontSize: "clamp(80px, 14vw, 160px)",
        }}
      >
        <div
          className="text-white"
          style={{
            textShadow:
              "0 0 40px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.9)",
          }}
        >
          ANTI
        </div>

        <div
          style={{
            color: "#acf60b",
            textShadow:
              "0 0 50px rgba(100,255,0,0.9), 0 0 100px rgba(100,255,0,0.4), 0 4px 20px rgba(0,0,0,0.9)",
          }}
        >
          HANTA
        </div>
      </div>

    {/* SUBTITLE */}
    <h2 className="mt-5 text-base md:text-xl font-bold text-white/90 tracking-[0.25em] uppercase">
      THE IMMUNE VACCINE OF HANTA
    </h2>

    {/* BADGE */}
    <div className="mt-3 inline-block border border-primary/60 bg-primary/10 px-4 py-1 rounded-sm shadow-[0_0_14px_rgba(0,255,65,0.25)]">
      <span className="text-primary font-bold tracking-wider text-sm">
        NOT A VIRUS. A CURE.
      </span>
    </div>

    {/* DESCRIPTION */}
    <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl mx-auto leading-relaxed">
      When the crypto market became infected with fear, panic,
      and endless virus-themed meme coins…
      One experiment escaped the Ethereum labs.
    </p>

    {/* WARNING */}
    <div
      className="mt-5 flex items-center justify-center gap-2 font-bold tracking-widest text-sm"
      style={{
        color: "#acf60b",
        textShadow: "0 0 12px rgba(100,255,0,0.8)",
      }}
    >
      <span className="animate-pulse">⚠</span>
      <span>THE CURE IS SPREADING.</span>
      <span className="animate-pulse">⚠</span>
    </div>

    {/* BUTTONS */}
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

<button
  className="w-full sm:w-auto font-['Bebas_Neue'] text-2xl px-10 py-4 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
  style={{
    background:
      "linear-gradient(135deg, #00ff41 0%, #acf60b 100%)",
    color: "#000",
    boxShadow:
      "0 0 24px rgba(0,255,65,0.55), 0 4px 16px rgba(0,0,0,0.5)",
  }}
>
  {/* Trading Candle SVG */}
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Wick */}
    <line
      x1="12"
      y1="2"
      x2="12"
      y2="22"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Candle Body */}
    <rect
      x="8"
      y="7"
      width="8"
      height="10"
      rx="1"
      fill="black"
    />
  </svg>

  BUY $ANHA
</button>

      <button
        className="w-full sm:w-auto bg-black/40 backdrop-blur-md border border-primary text-primary font-['Bebas_Neue'] text-2xl px-10 py-4 hover:bg-primary/15 transition-all duration-300 hover:-translate-y-1"
        style={{
          boxShadow:
            "0 0 16px rgba(0,255,65,0.2), inset 0 0 20px rgba(0,255,65,0.03)",
        }}
      >
        JOIN THE RESISTANCE
      </button>

    </div>

  </motion.div>
</div>

    </section>
  );
}