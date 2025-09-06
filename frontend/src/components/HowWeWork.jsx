import React from 'react';
import { FaSearch, FaLaptopCode, FaRocket } from 'react-icons/fa';

const HowWeWork = () => {
  const steps = [
    {
      icon: <FaSearch size={30} />,
      title: 'Report or Search Items',
      description: 'Users can quickly report lost items or browse through found listings posted by others.',
    },
    {
      icon: <FaLaptopCode size={30} />,
      title: 'Smart Matching System',
      description: 'Our system intelligently matches lost and found items using keywords, categories, and locations.',
    },
    {
      icon: <FaRocket size={30} />,
      title: 'Connect & Reclaim',
      description: 'We facilitate a secure connection between the owner and finder to ensure successful item return.',
    },
  ];

  return (
    <section id="workflow" className="bg-gray-50 py-20 px-6 md:px-10 animate-fade-in">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">✨ How It Works</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-14">
          Our Lost & Found system is designed to reunite people with their belongings through a smart and seamless process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105 border-t-4 border-transparent hover:border-indigo-500 group"
            >
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
