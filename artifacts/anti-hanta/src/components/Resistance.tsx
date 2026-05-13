import { motion } from "framer-motion";

const armyImg = "/images/Artboard.png";

export function Resistance() {
  return (
    <section
      id="community"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        flex
        items-center
        justify-center
        py-32
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">

        {/* Atmosphere */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 70%, rgba(0,255,65,0.12), transparent 45%),
              radial-gradient(circle at 20% 20%, rgba(0,255,65,0.06), transparent 30%),
              radial-gradient(circle at 80% 20%, rgba(0,255,65,0.04), transparent 30%)
            `,
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.88) 100%)",
          }}
        />

        {/* Top Fade */}
        <div
          className="absolute inset-x-0 top-0 h-[25%]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.95), transparent)",
          }}
        />

        {/* Bottom Fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-[45%]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.85), transparent)",
          }}
        />
      </div>

      {/* ================= ARMY IMAGE ================= */}
      <div className="absolute inset-x-0 bottom-[-10px] z-10 pointer-events-none">

        {/* Glow */}
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="w-[70%] h-[300px] bg-primary/20 blur-[140px] rounded-full" />
        </div>

        {/* Tech Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-1/2
            bottom-[-350px]
            -translate-x-1/2
            w-[1000px]
            h-[1000px]
            border
            border-primary/10
            rounded-full
          "
        />

        {/* Main Army Image */}
        <motion.img
          src={armyImg}
          alt="Resistance Army"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          animate={{
            y: [0, -8, 0],
          }}
          draggable={false}
          className="
            relative
            z-10
            w-[100%]
            h-auto
            object-contain
            object-bottom
            select-none
          "
          style={{
            filter:
              "drop-shadow(0 0 60px rgba(0,255,65,0.45)) drop-shadow(0 0 120px rgba(0,255,65,0.2))",
          }}
        />

        {/* Bottom Black Blend */}
        <div
          className="absolute inset-x-0 bottom-0 h-[40%] z-20"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 35%, transparent 100%)",
          }}
        />

        {/* Scan Light */}
        <motion.div
          animate={{
            x: ["-120%", "120%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
          className="
            absolute
            top-0
            h-full
            w-40
            bg-gradient-to-r
            from-transparent
            via-primary/20
            to-transparent
            blur-3xl
            z-20
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Status */}
          <div className="inline-flex items-center gap-3 mb-8 border border-primary/30 bg-primary/5 px-5 py-2 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-mono tracking-[0.3em] text-xs">
              RESISTANCE PROTOCOL ACTIVE
            </span>
          </div>

          {/* Title */}
          <h2
            className="
              font-['Bebas_Neue']
              leading-[0.88]
              text-white
              mb-8
            "
            style={{
              fontSize: "clamp(72px, 11vw, 180px)",
              textShadow:
                "0 0 30px rgba(0,255,65,0.28), 0 10px 40px rgba(0,0,0,0.95)",
            }}
          >
            JOIN THE
            <br />

            <span
              className="text-primary inline-block"
              style={{
                textShadow:
                  "0 0 40px rgba(0,255,65,0.9), 0 0 120px rgba(0,255,65,0.35)",
              }}
            >
              RESISTANCE
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed text-white/70 font-medium mb-12">
            The infected swarms are multiplying across Ethereum.
            The only way to survive is together.
            Arm yourself with $ANHA and hold the line against the outbreak.
          </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">

              {/* TELEGRAM */}
              <a
                href="https://t.me/AntiHanta_eth"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button
                  className="
                    w-full
                    sm:w-auto
                    font-['Bebas_Neue']
                    text-2xl
                    tracking-[0.12em]
                    px-10
                    py-4
                    text-black
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-[1.02]
                    flex
                    items-center
                    justify-center
                    gap-3
                    border
                    border-primary/40
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, #00ff41 0%, #acf60b 100%)",
                    boxShadow:
                      "0 0 24px rgba(0,255,65,0.45), 0 10px 30px rgba(0,0,0,0.45)",
                  }}
                >
                  TELEGRAM COMMS
                </button>
              </a>

              {/* X */}
              <a
                href="https://x.com/AntiHanta_eth"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button
                  className="
                    w-full
                    sm:w-auto
                    font-['Bebas_Neue']
                    text-2xl
                    tracking-[0.12em]
                    px-10
                    py-4
                    text-primary
                    bg-black/40
                    backdrop-blur-md
                    border
                    border-primary/40
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-primary/10
                    hover:border-primary
                  "
                  style={{
                    boxShadow:
                      "0 0 16px rgba(0,255,65,0.2), inset 0 0 20px rgba(0,255,65,0.03)",
                  }}
                >
                  X COMMAND
                </button>
              </a>

              {/* WHITEPAPER */}
              <a
                href="/AntiHanta_ANHA_Whitepaper_v1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button
                  className="
                    w-full
                    sm:w-auto
                    font-['Bebas_Neue']
                    text-2xl
                    tracking-[0.12em]
                    px-10
                    py-4
                    text-primary
                    bg-black/40
                    backdrop-blur-md
                    border
                    border-primary/40
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-primary/10
                    hover:border-primary
                  "
                  style={{
                    boxShadow:
                      "0 0 16px rgba(0,255,65,0.2), inset 0 0 20px rgba(0,255,65,0.03)",
                  }}
                >
                  WHITEPAPER
                </button>
              </a>

            </div>

        </motion.div>
      </div>
    </section>
  );
}