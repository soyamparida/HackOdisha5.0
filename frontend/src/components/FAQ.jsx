import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I report a lost item?',
      answer: 'To report a lost item, simply create an account or log in, click on "Report Lost Item," and fill out the form with details such as item name, location, and description.',
    },
    {
      question: 'Can I report something I found?',
      answer: 'Absolutely! You can post found items by clicking "Report Found Item" and entering relevant details to help identify the rightful owner.',
    },
    {
      question: 'Is my personal information safe?',
      answer: 'Yes, we prioritize your privacy. Personal contact details are only shared after a match is verified and both parties consent to communicate.',
    },
    {
      question: 'How does the matching system work?',
      answer: 'Our smart matching system analyzes keywords, categories, and location data to suggest potential matches between lost and found listings.',
    },
    {
      question: 'What happens after a match is found?',
      answer: 'When a potential match is found, both users are notified and can initiate contact through a secure messaging system to confirm and reclaim the item.',
    },
    {
      question: 'Is the platform free to use?',
      answer: 'Yes, our platform is completely free to use for individuals. We aim to help as many people as possible reconnect with their belongings.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className="bg-gray-50 py-14 px-4 md:px-10 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">📚 Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl transition-all overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 md:p-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-left text-gray-800">{faq.question}</h3>
                <svg
                  className={`h-6 w-6 text-gray-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-5 md:px-6 pb-5 transition-all duration-300 text-gray-600 ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;