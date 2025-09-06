import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CallToAction = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="report" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Lost Something or Found an Item?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-white/90">
          Join our growing community to report lost items or help someone get back what they’ve misplaced.
        </p>

        <a
          href="/Dashboard"
          className="inline-block bg-white text-indigo-700 font-bold px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          🚀 Report Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;