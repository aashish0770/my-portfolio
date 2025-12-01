import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import githubLogo from "../assets/socialLinks/GitHub-logo.jpg";
import linkedinLogo from "../assets/socialLinks/LinkedIn_icon.svg.webp";
import instagramLogo from "../assets/socialLinks/instagramLogo.avif";
import gmailLogo from "../assets/socialLinks/gmail.png";

const emailAddress = "ssuzzan81@gmail.com";
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  emailAddress
)}`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const openGmailCompose = () => {
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = () => {
    window.location.href = `mailto:your.email@example.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="container  mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-gray-400 mb-8">
                  <span>
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your vision. Feel free to
                    reach out!
                  </span>{" "}
                  <br />
                  <button
                    type="button"
                    onClick={openGmailCompose}
                    className="text-blue-400 hover:underline font-semibold"
                  >
                    Email: {emailAddress}
                  </button>
                  <br />
                  <span>Contact: 0407587191</span>
                </p>

                <div className="flex gap-4">
                  {[
                    {
                      icon: githubLogo,
                      link: "https://github.com/aashish0770",
                      label: "GitHub",
                    },
                    {
                      icon: linkedinLogo,
                      link: "https://www.linkedin.com/in/aashish-timalsina-29a866267/",
                      label: "LinkedIn",
                    },
                    // {
                    //   icon: instagramLogo,
                    //   link: "https://instagram.com",
                    //   label: "Instagram",
                    // },
                    {
                      icon: gmailLogo,
                      link: gmailComposeUrl,
                      label: "Email",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-blue-500/50 shadow-sm"
                      title={social.label}
                    >
                      <img
                        src={social.icon}
                        alt={`${social.label} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* <AnimatedSection>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </div>
            </AnimatedSection> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
