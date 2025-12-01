import { useState, useRef, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import expressJsLogo from "../assets/icons/expressJs.png";
import javascriptLogo from "../assets/icons/javascript.png";
import flaskLogo from "../assets/icons/flask.png";
import mongoDbLogo from "../assets/icons/mongooDb.png";
import reactLogo from "../assets/icons/react.png";
import nodeLogo from "../assets/icons/nodejs.png";
import typescriptLogo from "../assets/icons/typescript.png";
import gitLogo from "../assets/icons/git.png";
import muiLogo from "../assets/icons/MUI.png";
import tailwindLogo from "../assets/icons/twailwind.png";
import pythonLogo from "../assets/icons/python.png";
import javaLogo from "../assets/icons/java.png";

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const controls = useAnimationControls();
  const animationRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const skillWidth = 200 + 32; // width + gap

  const skills = [
    {
      name: "ReactJS",
      logo: reactLogo,
      mastery: 5,
      description: "Built 15+ production apps with React, Redux, and Hooks.",
    },
    {
      name: "JavaScript",
      logo: javascriptLogo,
      mastery: 5,
      description: "Deep understanding of ES6+ and modern JS patterns.",
    },
    {
      name: "NodeJS",
      logo: nodeLogo,
      mastery: 4,
      description: "Created RESTful APIs, microservices, and real-time apps.",
    },
    {
      name: "MongoDB",
      logo: mongoDbLogo,
      mastery: 4,
      description:
        "Designed optimized database schemas for large-scale applications.",
    },
    {
      name: "ExpressJS",
      logo: expressJsLogo,
      mastery: 4,
      description:
        "Built robust backend systems with authentication and middleware.",
    },
    {
      name: "TypeScript",
      logo: typescriptLogo,
      mastery: 3,
      description: "Leveraged type safety in medium to large projects.",
    },
    {
      name: "Git",
      logo: gitLogo,
      mastery: 4,
      description: "Version control expert with branching strategies.",
    },
    {
      name: "MUI",
      logo: muiLogo,
      mastery: 4,
      description: "Created custom themes and components for enterprise UIs.",
    },
    {
      name: "Tailwind CSS",
      logo: tailwindLogo,
      mastery: 5,
      description: "Master of utility-first CSS and responsive modern designs.",
    },
    {
      name: "Python",
      logo: pythonLogo,
      mastery: 3,
      description:
        "Experience with scripting, data analysis, and web scraping.",
    },
    {
      name: "Flask",
      logo: flaskLogo,
      mastery: 3,
      description: "Built lightweight web applications and APIs.",
    },
    {
      name: "Java",
      logo: javaLogo,
      mastery: 3,
      description:
        "Developed desktop and web applications using Java SE and EE.",
    },
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: -((200 + 32) * skills.length),
        transition: {
          duration: skills.length * 3,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };
    startAnimation();
  }, [controls, skills.length]);

  const handleHoverStart = (index) => {
    setHoveredSkill(index);
    controls.stop();
  };

  const handleHoverEnd = () => {
    setHoveredSkill(null);
    controls.start({
      x: -((200 + 32) * skills.length),
      transition: {
        duration: skills.length * 3,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  const handleNext = () => {
    const newPosition = currentPosition - skillWidth;
    setCurrentPosition(newPosition);
    controls.stop();
    controls
      .start({
        x: newPosition,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      })
      .then(() => {
        // Resume infinite animation from new position
        controls.start({
          x: -((200 + 32) * skills.length),
          transition: {
            duration: skills.length * 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        });
      });
  };

  const handlePrev = () => {
    const newPosition = currentPosition + skillWidth;
    setCurrentPosition(newPosition);
    controls.stop();
    controls
      .start({
        x: newPosition,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      })
      .then(() => {
        // Resume infinite animation from new position
        controls.start({
          x: -((200 + 32) * skills.length),
          transition: {
            duration: skills.length * 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        });
      });
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-40 relative bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </AnimatedSection>

        <div className="relative max-w-6xl mx-auto overflow-x-hidden py-12 pb-64">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 mt-5 bg-blue-500/80 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous skill"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 mt-5 bg-blue-500/80 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next skill"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <motion.div
            className="flex gap-8"
            animate={controls}
            ref={animationRef}
          >
            {duplicatedSkills.map((skill, index) => {
              const isHovered = hoveredSkill === index;

              return (
                <div
                  key={`${skill.name}-${index}`}
                  className="relative flex-shrink-0"
                  style={{ width: "200px" }}
                  onMouseEnter={() => handleHoverStart(index)}
                  onMouseLeave={handleHoverEnd}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 h-40 flex flex-col items-center justify-center relative cursor-pointer">
                    <div className="w-full h-full mb-3 transition-transform duration-300">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain drop-shadow-md"
                      />
                    </div>
                    <p className="text-sm font-semibold text-center text-white">
                      {skill.name}
                    </p>
                  </div>

                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-gray-900/98 backdrop-blur-md rounded-2xl p-6 w-80 z-50 border-2 border-blue-500/70 shadow-2xl"
                    >
                      <p className="text-sm font-bold text-blue-400 mb-3">
                        Mastery Level
                      </p>

                      <div className="flex gap-2 mb-4">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className="flex-1 h-3 rounded-full bg-gray-700 overflow-hidden relative"
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width: level <= skill.mastery ? "100%" : "0%",
                              }}
                              transition={{ duration: 0.3, delay: level * 0.1 }}
                              className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600"
                            />
                          </div>
                        ))}
                      </div>

                      <p className="text-xs text-gray-300 leading-relaxed">
                        {skill.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Hover over a skill to see details
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;
