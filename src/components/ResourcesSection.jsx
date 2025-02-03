import React from "react";
import { FaRobot, FaCalendarAlt, FaBookReader, FaLink } from "react-icons/fa";
import { motion } from 'framer-motion';

const ResourcesSection = () => {
    const resources = [
        {
            id: 1,
            icon: <FaRobot className="text-5xl text-orange-600 mb-4" />,
            title: "AI Tools",
            description: "Explore AI-powered tools for research, writing, and learning.",
            links: [
                { name: "Grammarly", url: "https://www.grammarly.com" },
                { name: "ChatGPT", url: "https://chat.openai.com" },
                { name: "Jasper AI", url: "https://www.jasper.ai" },
                { name: "DeepSeek AI", url: "https://www.deepseek.com" },
            ],
            audience: "student",
        },
        {
            id: 2,
            icon: <FaCalendarAlt className="text-5xl text-orange-600 mb-4" />,
            title: "Study Planners",
            description: "Organize your study schedule with our free planners.",
            links: [
                { name: "My Study Life", url: "https://www.mystudylife.com" },
                { name: "Trello", url: "https://www.trello.com" },
            ],
            audience: "student",
        },
        {
            id: 3,
            icon: <FaBookReader className="text-5xl text-orange-600 mb-4" />,
            title: "E-Books",
            description: "Access a wide range of e-books for your courses.",
            links: [
                { name: "Google Books", url: "https://books.google.com" },
                { name: "Deep Work", url: "https://www.gutenberg.org" },
                { name: "Deep Work", url: "https://www.gutenberg.org" },
            ],
            audience: "lecturer",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-5 md:px-16">
            <h2 className="text-4xl font-bold font-poppins text-center mb-10">Educational Resources</h2>
            
            {/* Students Section */}
            <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-6">For Students</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resources
                        .filter(resource => resource.audience === "student")
                        .map(resource => (
                            <motion.div
                                key={resource.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                {resource.icon}
                                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                                <p className="text-gray-600 mb-4">{resource.description}</p>
                                <div className="flex flex-col space-y-2">
                                    {resource.links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline flex items-center space-x-2"
                                        >
                                            <FaLink className="text-lg" />
                                            <span>{link.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>

            {/* Lecturers Section */}
            <div>
                <h3 className="text-2xl font-semibold mb-6">For Lecturers</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resources
                        .filter(resource => resource.audience === "lecturer")
                        .map(resource => (
                            <motion.div
                                key={resource.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                {resource.icon}
                                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                                <p className="text-gray-600 mb-4">{resource.description}</p>
                                <div className="flex flex-col space-y-2">
                                    {resource.links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline flex items-center space-x-2"
                                        >
                                            <FaLink className="text-lg" />
                                            <span>{link.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;
