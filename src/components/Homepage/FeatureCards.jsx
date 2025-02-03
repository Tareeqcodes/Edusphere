import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaChalkboardTeacher, FaHome, FaNewspaper, FaBook, FaCoins } from 'react-icons/fa';

const FeatureCards = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="text-center px-5 md:px-16 bg-white text-black">
        <h2 className="text-4xl font-bold font-nunito py-6">Our Features</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md bg-gradient-to-b from-white to-gray-100 border-t-4 border-orange-500 
              hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="text-5xl text-orange-600 bg-orange-100 p-3 rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed tracking-wide">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

const features = [
  { title: 'Access Online PDFs', description: 'Download lecture notes, research papers, and syllabi effortlessly with a user-friendly interface.', icon: FaFilePdf },
  { title: 'Tools for Teachers and Learners', description: 'Browse and book campus hostels with ease. Compare amenities, prices, and secure your accommodation in just a few clicks.', icon: FaChalkboardTeacher },
  { title: 'Rental Services', description: 'Find and rent hostels and homes near your campus.', icon: FaHome },
  { title: 'Campus News', description: 'Stay informed with the latest updates, events, and announcements from your university.', icon: FaNewspaper },
  { title: 'Bukstore', description: 'Use Archway tokens to buy digital goods, subscribe to premium services, or gain access to workshops and events.', icon: FaBook },
  { title: 'Tokens System', description: 'Engage with EduSphere and earn Archway tokens to unlock discounts, exclusive content, and more.', icon: FaCoins },
];

export default FeatureCards;
