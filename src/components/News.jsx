import React from "react";
import { FaNewspaper } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";  // Assuming you're using React Router for navigation

const News = () => {
    const newsItems = [
        {
            id: 1,
            title: "Upcoming Buk SUG Elections.",
            description: "Stay Tune.",
            date: "Feb 18, 2025",
            link: "/news/ai-tools-for-students", // Link to a detailed page for this news
        },
        {
            id: 2,
            title: "Dean Students Affairs Resign.",
            description: "Stay Tune!",
            date: "Feb 18, 2025",
            link: "/news/campus-hostel-booking", // Link to a detailed page for this news
        },
        {
            id: 3,
            title: "Upcoming Events",
            description: "Stay Tune.",
            date: "Feb 18, 2025",
            link: "/news/pdf-resources-added", // Link to a detailed page for this news
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-5 md:px-16">
            <h2 className="text-4xl font-bold font-poppins text-center mb-10">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((news) => (
                    <motion.div
                        key={news.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <FaNewspaper className="text-5xl text-orange-600 mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">{news.title}</h3>
                        <p className="text-gray-600 mb-4">{news.description}</p>
                        <p className="text-sm text-gray-500 mb-4">{news.date}</p>
                        
                        {/* Read More Button */}
                        <Link
                            to={news.link}  // Using React Router Link to navigate to a detailed page
                            className="text-blue-600 hover:underline flex items-center space-x-2"
                        >
                            <span>Read More</span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default News;
