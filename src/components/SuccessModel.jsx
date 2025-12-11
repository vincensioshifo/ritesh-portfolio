import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, Sparkles, ThumbsUp, Mail, MailCheck } from "lucide-react";

const SuccessModel = ({ showSuccess, setShowSuccess, isDarkMode }) => {
  return (
    <AnimatePresence>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowSuccess(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`relative p-8 rounded-xl max-w-sm w-full text-center mx-auto ${
              isDarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSuccess(false)}
              className={`absolute top-4 right-4 p-1 rounded-full transition-colors ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              <X size={18} />
            </button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.3 }}
              className="mx-auto w-16 h-16 flex items-center justify-center mb-5 rounded-full bg-green-600"
            >
              <CheckCircle size={32} className="text-white" />
            </motion.div>

            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-medium mb-2"
            >
              Message Sent Successfully!
            </motion.h3>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } mb-6 `}
            >
              Thank you for reaching out. I'll get back to you soon!
            </motion.p>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.3, opacity: 2 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 13,
                delay: 0.8,
              }}
              className="flex justify-center"
            >
              <ThumbsUp
                size={24}
                className="text-yellow-400"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModel;
