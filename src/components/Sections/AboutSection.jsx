import React from "react";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { PASSIONS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-50px",
  });


  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Bg elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400 opacity-15"
          }`}
        />
        <div
          className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400 opacity-15"
          }`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
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
            Get to Know Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            About <span className="text-blue-500 font-medium">Me</span>
          </motion.h2>
        </motion.div>

        <div className="">
          {/* Personal */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className=""
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  : "bg-gray-100/80 border-gray-300 backdrop-blur-sm"
              }`}
            >
              <h3 className="text-2xl font-medium mb-6">
                My {""}
                <span className="text-blue-500">Mission</span>
              </h3>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                I believe technology should be a bridge that connects people and
                solves real-world problems. My passion is building accessible,
                user-centered products that turn ideas into practical solutions
                — I enjoy collaborating across design and engineering to deliver
                reliable, meaningful experiences.
              </p>
              <p
                className={`text-base leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I'm passionate about continuous
                learning and staying updated with industry trends.
              </p>
            </motion.div>

            {/* What i love developing */}
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  : "bg-gray-100/80 border-gray-300 backdrop-blur-sm"
              } mt-10`}
            >
              <h3 className="text-2xl font-medium mt-6 mb-6">
                What I Love <span className="text-blue-500">Building</span>
              </h3>
              <div className="grid gap-4">
                {PASSIONS.map((passion, index) => (
                  <motion.div
                    key={passion.title}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl ${
                      isDarkMode
                        ? "bg-gray-700/30 hover:bg-gray-900/50"
                        : "bg-gray-200/50 hover:bg-gray-300/50"
                    } transition-all duration-300`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isDarkMode ? "bg-gray-700" : "bg-blue-100"
                      }`}
                    >
                      <passion.icon size={20} className="text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{passion.title}</h4>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {passion.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA  */}

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className={`max-w-2xl mx-auto p-8 rounded-2xl border-2 ${
              isDarkMode
                ? "bg-gray-800/30 border-gray-700"
                : "bg-gray-50/50 border-gray-200"
            }`}
          >
            <h3 className="text-2xl font-medium mb-4">
              My {""}
              <span className="text-blue-500 font-semibold">Resume</span>
            </h3>
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } mb-6`}
            >
              Interested in knowing more about my skills and experience? View my
              resume to see a detailed overview of my professional journey,
              projects, and accomplishments.
            </p>
            <motion.button
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-2 rounded-full border font-medium transition-all duration-200 ${
                isDarkMode
                  ? "border-gray-600 hover:border-blue-500 hover:text-blue-400"
                  : "border-gray-400 hover:border-blue-700 hover:text-blue-600"
              }`}
              onClick={() =>
                // Replace the URL below with your actual Google Drive share/download link
                window.open(
                  "https://drive.google.com/file/d/1ngGUX4_e1u2S9tDW8t6VIkEd5P9S_0QU/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              View My Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
