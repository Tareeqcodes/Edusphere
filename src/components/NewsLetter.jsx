import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi"; // Email Icon

const NewsLetter = () => {
  return (
    <section className="bg-gray-50 py-16 px-5 md:px-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-nunito font-bold text-center mb-4">
        Stay Updated
      </h2>
      <p className="text-lg text-gray-600 text-center mb-8">
        Subscribe to our newsletter for the latest updates and features.
      </p>

      <motion.div
        className="flex w-full md:w-[500px] border border-gray-300 rounded-full shadow-lg bg-white overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center px-4 bg-gray-100">
          <FiMail className="text-gray-500 text-xl" />
        </div>
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 outline-none text-gray-700"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 font-semibold rounded-r-full hover:from-orange-700 hover:to-orange-600 transition-all"
        >
          Subscribe
        </motion.button>
      </motion.div>
    </section>
  );
};

export default NewsLetter;
