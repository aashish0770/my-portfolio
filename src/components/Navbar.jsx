import { motion } from "framer-motion";

const Navbar = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        >
          Aashish Timalsina
        </motion.div>
        <div className="hidden md:flex gap-8">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-colors duration-300 ${
                activeSection === section
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {section}
            </button>
          ))}
        </div>
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
