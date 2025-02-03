import React from "react";
import { motion } from "framer-motion";
import { FaUserPlus, FaSearch, FaSmile } from "react-icons/fa"; // Icons for each step

const How = () => {
  return (
    <section className="py-16 px-5 md:px-16">
      <h2 className="text-3xl md:text-4xl font-nunito font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            id: 1,
            title: "Sign Up",
            description: "Create an account to access all features.",
            icon: <FaUserPlus className="text-5xl text-orange-500 mb-4" />,
          },
          {
            id: 2,
            title: "Explore",
            description: "Search for PDFs, books, or hostels.",
            icon: <FaSearch className="text-5xl text-orange-500 mb-4" />,
          },
          {
            id: 3,
            title: "Enjoy",
            description: "Download, book, or engage with the platform.",
            icon: <FaSmile className="text-5xl text-orange-500 mb-4" />,
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-xl p-6 text-center flex flex-col items-center transition-all duration-300 hover:shadow-2xl"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{`${step.id}. ${step.title}`}</h3>
            <p className="text-gray-700">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default How;
