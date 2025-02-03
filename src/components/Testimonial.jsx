import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Comrade Tariq",
    feedback: "Edusphere made finding study materials so easy! Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Comrade Tariq",
    feedback: "The hostel booking feature saved me so much time. Great platform!",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Comrade Tariq",
    feedback: "I love the token system. It’s a fun way to access premium content.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-16 px-5 md:px-16">
      <h2 className="text-3xl md:text-4xl font-nunito font-bold text-center mb-12">
        What Our Users Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl"
          >
            <FaQuoteLeft className="text-orange-500 text-3xl mb-4" />
            <p className="text-gray-700 text-lg leading-relaxed">{testimonial.feedback}</p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border-2 border-orange-500"
              />
              <p className="font-bold text-lg">{testimonial.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
