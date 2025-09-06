import React from "react";

const ReportFound = () => {
  return (
    <div className="flex justify-center mt-2">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#003566]">Report Found Item</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Item Name</label>
            <input type="text" placeholder="Enter the item name" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div>
            <label className="block text-gray-700">Category</label>
            <input type="text" placeholder="Enter the category" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div>
            <label className="block text-gray-700">Date Found</label>
            <input type="date" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div>
            <label className="block text-gray-700">Description</label>
            <textarea placeholder="Describe the item" className="w-full px-4 py-2 border rounded-md"></textarea>
          </div>

          <div>
            <label className="block text-gray-700">Your Name</label>
            <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div>
            <label className="block text-gray-700">Contact Info</label>
            <input type="text" placeholder="Phone or Email" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <button type="submit" className="w-full bg-[#003566] text-white py-2 rounded-md hover:bg-[#002244]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportFound;