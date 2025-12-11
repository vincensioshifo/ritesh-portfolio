import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Send } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import TextInput from "../Input/TextInput";
import SuccessModel from "../SuccessModel";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_mx49f1n"; // your service id
const TEMPLATE_ID = "template_c3fu6r8"; // your template id
const PUBLIC_KEY = "eZLccxGcbV1yZZ76v"; // your public/user id (EmailJS)

const ContactSection = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Handlers
  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form reference is null.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      console.log("EmailJS success:", result);
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSubmitting(false);
      alert("Error sending message. Check console for details.");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      {/* bg elements */}

      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400 opacity-15"
          }`}
        />
        <div
          className={`absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400 opacity-15"
          }`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Let's Connect
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-light md:text-5xl mb-6"
          >
            Get In {""}
            <span className="text-blue-500 font-medium">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out
            using the form below or through my social media channels.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border  ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              <h3 className="text-2xl font-medium mb-8"> Send me a Message </h3>

              {/* --- IMPORTANT: use a real form with ref and onSubmit --- */}
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <TextInput
                      isDarkMode={isDarkMode}
                      value={formData.name}
                      handleInputChange={(text) =>
                        handleInputChange("name", text)
                      }
                      label="Your Name"
                      name="from_name" // <-- must match EmailJS template variable
                      required
                    />

                    <TextInput
                      isDarkMode={isDarkMode}
                      value={formData.email}
                      handleInputChange={(text) =>
                        handleInputChange("email", text)
                      }
                      label="Your Email"
                      name="from_email" // <-- must match EmailJS template variable
                      required
                    />
                  </div>

                  <TextInput
                    isDarkMode={isDarkMode}
                    value={formData.message}
                    handleInputChange={(text) =>
                      handleInputChange("message", text)
                    }
                    className={`w-120 px-4 pt-6 pb-2 rounded-xl border transition-all duration-200 outline-none resize-y min-h-20 max-h-100 text-lg ${
                      isDarkMode
                        ? "bg-gray-800/50 text-white border-gray-700 focus:border-blue-500 focus:bg-gray-800/70"
                        : "bg-white/80 text-gray-900 border-gray-300 focus:border-blue-500 focus:bg-white"
                    }`}
                    label="Your Message"
                    textarea
                    name="message" // <-- must match EmailJS template variable
                    required
                  />

                  <motion.button
                    type="submit" // submit the form
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-t-transparent border-white rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
              {/* --- end form --- */}
            </motion.div>
          </motion.div>

          {/* Contact Info and Social Links  */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={`p-8 rounded-2xl border  ${
              isDarkMode
                ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
            }`}
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-medium mb-6 ">
                Contact Information
              </h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((info) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl ${
                      isDarkMode
                        ? "bg-gray-800/30 hover:bg-gray-800/50"
                        : "bg-gray-200/50 hover:bg-gray-400/50"
                    } transition-all duration-300`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isDarkMode ? "bg-gray-700" : "bg-white"
                      }`}
                    >
                      <info.icon size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <div
                        className={`text-sm ${
                          isDarkMode ? "text-gray-500" : "text-gray-600"
                        }`}
                      >
                        {info.label}
                      </div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="">
              <h3 className=" text-xl font-medium mb-6 mt-6 ">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                        : "bg-white/80 border-gray-200 hover:border-gray-300"
                    } ${social.bgColor} ${social.color}`}
                  >
                    <social.icon size={20} className="" />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/*Status */}
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl border mt-6  ${
                isDarkMode
                  ? "bg-green-500/10 border-green-500/20"
                  : "bg-green-50 border-green-200"
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-green-500">
                  Available for Work
                </span>
              </div>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I'm currently open for full-time opportunities, freelance
                projects and collaborations. Feel free to reach out!
              </p>
            </motion.div>
          </motion.div>
        </div>

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
              Ready to bring your Ideas into {""}
              <span className="text-blue-500 font-semibold">Reality?</span>
            </p>

            <motion.button
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                scrollToSection("contact");
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-200"
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <SuccessModel
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        isDarkMode={isDarkMode}
      />
    </section>
  );
};

export default ContactSection;
