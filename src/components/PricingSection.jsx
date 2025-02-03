import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const PricingSection = () => {
    const plans = [
        {
            id: 1,
            name: "Basic",
            price: "₦0",
            features: ["Access to free PDFs", "Basic AI tools", "Campus news"],
            excluded: ["Premium PDFs", "Advanced AI tools", "Hostel discounts"],
        },
        {
            id: 2,
            name: "Pro",
            price: "₦100/Semester",
            features: [
                "Access to all PDFs",
                "Advanced AI tools",
                "Hostel discounts",
                "Priority support",
            ],
            excluded: [],
        },
    ];

    return (
        <section className="py-16 px-5 md:px-16 bg-white">
            <h2 className="text-3xl font-poppins font-semibold text-center mb-10">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {plans.map((plan) => (
                    <motion.div
                        key={plan.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="bg-gray-50 p-8 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{plan.name}</h3>
                        <p className="text-4xl font-bold text-orange-600 mb-6">{plan.price}</p>
                        <ul className="mb-6">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center mb-3 text-gray-700">
                                    <FaCheck className="text-green-500 text-xl mr-3" />
                                    {feature}
                                </li>
                            ))}
                            {plan.excluded.map((exclude, index) => (
                                <li key={index} className="flex items-center mb-3 text-gray-400">
                                    <FaTimes className="text-red-500 text-xl mr-3" />
                                    {exclude}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-all duration-200">
                            Get Started
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PricingSection;
