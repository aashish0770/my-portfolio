import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import image from "../assets/developer.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 bg-linear-to-l from-gray-900 to-black relative"
    >
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
              <img
                src={image}
                alt="About"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a passionate full-stack developer with a strong foundation
                in modern web technologies. I love crafting clean, responsive,
                and interactive user interfaces while building robust and
                scalable backend systems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in software development is driven by curiosity,
                continuous learning, and a desire to solve real-world problems.
                I thrive in collaborative environments and enjoy turning ideas
                into functional and elegant web applications.
              </p>

              <div className="space-y-4 mt-8">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">
                    Education
                  </h3>
                  <p className="text-gray-400">
                    Bachelor's in Computer Science
                  </p>
                  <p className="text-gray-500 text-sm">CITE • 2019-2024</p>
                  <p className="text-gray-500 text-sm">
                    Metropolia University of Applied Sciences • 2025-Present
                    (Currently Enrolled)
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">
                    Experience
                  </h3>
                  <p className="text-gray-400">Full Stack Developer</p>
                  <p className="text-gray-500 text-sm">GM Tech 2023-2024</p>
                  <p className="text-gray-500 text-sm">360ItHub 2024-2025</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
