import React, { useEffect } from 'react';
import { FaClock, FaStar, FaUsers, FaLaptopCode } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  const differentiators = [
    {
      icon: <FaClock size={24} />,
      title: 'Quick Reporting & Response',
      description: 'Report lost or found items instantly with real-time visibility to maximize chances of recovery.',
    },
    {
      icon: <FaStar size={24} />,
      title: 'Verified Listings',
      description: 'We verify each post to ensure authenticity and build trust among our users.',
    },
    {
      icon: <FaUsers size={24} />,
      title: 'Community-Driven',
      description: 'Our platform thrives on community support, where everyone contributes to reconnecting lost items.',
    },
    {
      icon: <FaLaptopCode size={24} />,
      title: 'Smart Matching Engine',
      description: 'Advanced algorithms connect the right finders with owners using keyword and location data.',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="whyus" className="bg-gray-50 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">🌟 Why Choose Us?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-14">
          Discover why our Lost & Found platform stands out as a trusted, smart, and community-powered solution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105 border-t-4 border-transparent hover:border-indigo-500 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

