import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Zap, Users } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "../ProjectCard";
import { containerVariants, itemVariants } from "../../utils/helper";

const ProjectSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Element */}

      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400 opacity-15"
          }`}
        />

        <div
          className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400 opacity-15"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Featured Projects
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Recent {" "}
            <span className="text-blue-500 font-medium">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            A selection of projects showcasing my skills and experience in web
            development.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

            {PROJECTS.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isDarkMode={isDarkMode} />
            ))}
        </motion.div>

        {/* CTA Button */}
                <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={containerVariants}
                  className="text-center mt-20"
                >
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center space-y-6"
                  >
                    <p
                      className={`text-lg ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Want to see more? Check out my all projects!
                    </p>
        
                    <motion.button
                      whileHover={{ y: -2, scale: 1.1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        window.open(
                          "https://github.com/ritesh025?tab=repositories"
                        );
                      }}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-7 rounded-2xl text-sm uppercase tracking-widest font-medium transition-all duration-200 flex items-center justify-center border-2 py-3"
                    >
                      View All Projects <ArrowUpRight size={20} className=" inline mb-1 ml-2"/>
                    </motion.button>
                  </motion.div>
                </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
