import React from 'react';

const LeftSidebar = ({ onSearch, onCategoryChange, onTagSelect, onDateFilterChange }) => {
  const categories = ['All', 'Electronics', 'Wallets', 'Books', 'Documents', 'Clothing', 'Keys'];
  const tags = ['ID Card', 'Phone', 'Charger', 'Laptop', 'Bike Key', 'USB'];
  const dateFilters = ['Today', 'Last 7 Days', 'This Month'];

  return (
    <aside className="space-y-6 w-full sm:w-72 px-4 py-6 animate-fadeInSlow">
      <div className="bg-whsite p-4 rounded-xl shadow hover:shadow-md transition duration-300">
        <h3 className="font-semibold mb-2">🔍 Search Items</h3>
        <input
          type="text"
          placeholder="Search by name..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full p-2 border rounded-lg transition duration-200"
        />
      </div>

      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300">
        <h3 className="font-semibold mb-3">🗂️ Categories</h3>
        <ul className="space-y-2 text-sm">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => onCategoryChange(cat)}
                className="w-full text-left px-3 py-1 hover:bg-blue-50 rounded-md transition duration-200"
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300">
        <h3 className="font-semibold mb-3">📅 Date Filter</h3>
        <div className="space-y-2 text-sm">
          {dateFilters.map((label) => (
            <button
              key={label}
              onClick={() => onDateFilterChange(label)}
                className="w-full text-left px-3 py-1 hover:bg-blue-50 rounded-md transition duration-200"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300">
        <h3 className="font-semibold mb-3">🏷️ Popular Tags</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagSelect(tag)}
              className="bg-gray-200 hover:bg-blue-100 text-gray-700 px-3 py-1 rounded-full transition duration-200"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-xl shadow hover:shadow-md transition duration-300 text-sm text-yellow-900">
        <h4 className="font-bold mb-1">📢 Notice</h4>
        <p>If you’ve lost a document, report it to admin at <strong>help@lostfound.com</strong></p>
      </div>
    </aside>
  );
};

export default LeftSidebar;

