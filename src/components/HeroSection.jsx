import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import profileImage from "../assets/profile.jpg";

const HeroSection = () => {
  const waveControls = useAnimation();

  useEffect(() => {
    waveControls.start({
      x: ["-100%", "100%"],
      transition: { repeat: Infinity, duration: 6, ease: "linear" },
    });
  }, [waveControls]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>

      {/* SVG Wave */}
      <motion.div
        animate={waveControls}
        className="absolute bottom-0 w-[200%] h-40"
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#gradient)"
            d="M0,192L60,181.3C120,171,240,149,360,138.7C480,128,600,128,720,128C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          >
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
            </linearGradient>
          </path>
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Profile Image floating up and down */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="mt-10 relative w-40 h-40 md:w-80 md:h-80"
        >
          {/* Floating blurred background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>

          {/* Image */}
          <img
            src={profileImage}
            alt="Profile"
            className="relative w-full h-full rounded-full object-cover border-4 border-blue-500/50 shadow-2xl shadow-blue-500/50"
          />
        </motion.div>

        {/* Name with zoom effect when wave passes */}
        <motion.h1
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mt-6"
        >
          Hello, I'm Aashish!
        </motion.h1>

        {/* Title */}
        <motion.p
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="text-xl md:text-2xl text-gray-300 mt-4"
        >
          Full Stack Developer & UI/UX Enthusiast
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
