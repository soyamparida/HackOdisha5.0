import React, { useEffect } from 'react';
import Illustration from '../assets/Herosection.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id='Hero' className="bg-white px-6 py-10 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">

        {/* Left Content */}
        <div
          className="md:w-1/2 text-center md:text-left space-y-8"
          data-aos="fade-right"
        >
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 bg-white text-blue-600 px-4 py-1 rounded-full text-sm border border-blue-200 shadow-sm">
            <span>📦</span>
            <p>Helping 500+ users reconnect with their lost items</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Simplifying <span className="text-indigo-600">Lost & Found</span> Experiences
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 max-w-md">
            Our platform bridges the gap between people and their lost belongings. Post, search, and reclaim items in just a few clicks.
          </p>

          {/* Email Subscription */}
          <div className="flex flex-col md:flex-row items-center mt-6 gap-4">
            <input
              type="email"
              placeholder="Enter your email to stay updated"
              className="border border-gray-300 px-4 py-3 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition duration-300 w-full md:w-auto">
              Notify Me
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
            {/* Secure Platform */}
            <div className="flex items-center space-x-3">
              <span className="p-2 rounded-full border border-gray-300">🔐</span>
              <div>
                <p className="font-semibold text-gray-900">Secure Platform</p>
                <p className="text-sm text-gray-600">Privacy-first reporting & claiming</p>
              </div>
            </div>

            {/* Verified Matches */}
            <div className="flex items-center space-x-3">
              <span className="p-2 rounded-full bg-purple-100 text-purple-600">🔍</span>
              <div>
                <p className="font-semibold text-gray-900">Verified Matches</p>
                <p className="text-sm text-gray-600">Smart search with community validation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div
          className="md:w-2/5 mb-10 md:mb-0"
          data-aos="fade-left"
        >
          <img
            src={Illustration}
            alt="Lost and found illustration"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;