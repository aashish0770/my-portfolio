import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = {
    organization: [
      {
        title: "RodhiFlix",
        icon: "🎬",
        tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap", "Redux"],
        description:
          "OTT platform with pay-per-view movies and shows for the Gurung community of Nepal. Features video streaming, payment integration, and content management.",
        link: "https://rodhiflix.com",
        category: "organization",
      },
      {
        title: "BookMeWorld",
        icon: "🏨",
        tech: ["MERN Stack", "Tailwind CSS", "MUI", "Chart.js"],
        description:
          "Unified booking platform for hotels, clubs, events, and lounges. Includes admin panel with analytics and comprehensive booking management system.",
        link: "https://bookmeworld.com",
        category: "organization",
      },
      {
        title: "VetaManta",
        icon: "🤝",
        tech: ["Node.js", "MongoDB", "Kotlin", "Swift", "React", "MUI"],
        description:
          "Mobile app to meet people in real life, including celebrities. Features inner wallet system with real money loading, automatic refunds, and cross-platform support.",
        link: "#",
        category: "organization",
      },
    ],
    college: [
      {
        title: "Movie Ticket Booking",
        icon: "🎟️",
        tech: ["C++"],
        description:
          "Cinema ticket booking system built for college project. Features seat selection, booking management, and ticket generation.",
        link: "#",
        category: "college",
      },
      {
        title: "MYacademy",
        icon: "📚",
        tech: ["PHP", "SQL", "React"],
        description:
          "E-learning platform similar to Udemy. Includes course management, video lectures, quizzes, and student progress tracking.",
        link: "#",
        category: "college",
      },
      {
        title: "RealState B2B",
        icon: "🏢",
        tech: ["Java", "SQL"],
        description:
          "B2B real estate platform for buying, selling, and renting properties. Features property listings, search filters, and transaction management.",
        link: "#",
        category: "college",
      },
      {
        title: "StreakForce",
        icon: "🔥",
        tech: ["MERN Stack"],
        description:
          "Habit tracking app where you create habits and invite others to join. Features streak tracking based on completion, social accountability, and progress visualization.",
        link: "#",
        category: "college",
      },
    ],
    Personal: [
      {
        title: "Personal Portfolio",
        icon: "💼",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        description:
          "My personal portfolio website showcasing my skills, projects, and experience as a full-stack developer.",
        link: "#",
        category: "Personal",
      },
    ],
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "organization", label: "Organization" },
    { id: "college", label: "College" },
    { id: "Personal", label: "Personal" },
  ];

  const getFilteredProjects = () => {
    if (activeCategory === "all") {
      return [
        ...projects.organization,
        ...projects.college,
        ...projects.Personal,
      ];
    }
    return projects[activeCategory] || [];
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A collection of professional and academic projects showcasing
            full-stack development, mobile apps, and innovative solutions
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group h-full"
                layout
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="text-6xl mb-4">{project.icon}</div>

                  {/* Category Badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full border border-purple-500/30 capitalize">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/90 rounded-2xl p-8 flex flex-col justify-center">
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg text-center transition-colors duration-300 font-medium"
                      >
                        {project.link.startsWith("http")
                          ? "Visit Site"
                          : "View Details"}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Project Count */}
        <AnimatedSection>
          <div className="text-center mt-12">
            <p className="text-gray-500">
              Showing {filteredProjects.length}{" "}
              {activeCategory === "all" ? "" : activeCategory} project
              {filteredProjects.length !== 1 ? "s" : ""}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
