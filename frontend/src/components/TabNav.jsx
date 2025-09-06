import React from 'react';

const TabNav = ({ currentTab, onChangeTab }) => (
  <div className="flex justify-center gap-4 mb-6 animate-fadeInSlow">
    {['Lost', 'Found'].map((tab) => (
      <button
        key={tab}
        onClick={() => onChangeTab(tab)}
        className={`px-6 py-2 text-sm font-semibold rounded-full shadow transition duration-300 transform hover:scale-105 ${
          currentTab === tab
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default TabNav;

