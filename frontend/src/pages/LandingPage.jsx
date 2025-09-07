import React from 'react';
import Hero from '../components/Hero';
import HowWeWork from '../components/HowWeWork';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <hr />
      <HowWeWork />
      <hr />
      <WhyChooseUs />
      <hr />
      <CallToAction />
      <hr />
      <FAQ />
      <hr />
      <Footer />
    </div>
  );
};

export default LandingPage;