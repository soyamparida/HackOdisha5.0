import React, { useState } from 'react';

const Tables = () => {
  const [formData, setFormData] = useState({
    item: '',
    category: '',
    reportedBy: '',
    date: '',
    location: '',
    status: ''
  });

  const [reports, setReports] = useState([]);

  const generateRandomId = () => {
    return Math.floor(1000000 + Math.random() * 9000000).toString();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newReport = {
      id: generateRandomId(),
      ...formData
    };
    setReports([...reports, newReport]);
    setFormData({
      item: '',
      category: '',
      reportedBy: '',
      date: '',
      location: '',
      status: ''
    });
  };

  return (
    <div className="w-full pt-3 pb-3 mt-2 pl-3 pr-3 mb-0 p-2 rounded-md bg-[#4aaafd]">
      <p className="text-3xl text-left mb-4">Lost & Found Reports</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          name="item"
          placeholder="Item"
          value={formData.item}
          onChange={handleChange}
          className="w-full p-2 rounded-md"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 rounded-md"
        />
        <input
          type="text"
          name="reportedBy"
          placeholder="Reported By"
          value={formData.reportedBy}
          onChange={handleChange}
          className="w-full p-2 rounded-md"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 rounded-md"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 rounded-md"
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 rounded-md"
        >
          <option value="">Select Status</option>
          <option value="found">Found</option>
          <option value="not found">Not Found</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-[#003566] text-white p-2 rounded-md mb-4"
      >
        Add Report
      </button>

      <table className="border-1 border-solid w-full text-center rounded-md mt-4">
        <thead>
          <tr>
            <th className="pt-3 pb-3">ID</th>
            <th className="pt-3 pb-3">Item</th>
            <th className="pt-3 pb-3">Category</th>
            <th className="pt-3 pb-3">Reported By</th>
            <th className="pt-3 pb-3">Date</th>
            <th className="pt-3 pb-3">Location</th>
            <th className="pt-3 pb-3">Status</th>
          </tr>
        </thead>
        <tbody className="bg-[#457b9d] text-white">
          {reports.map((report, i) => (
            <tr key={i}>
              <td className="pt-3 pb-3">{report.id}</td>
              <td>{report.item}</td>
              <td>{report.category}</td>
              <td>{report.reportedBy}</td>
              <td>{report.date}</td>
              <td>{report.location}</td>
              <td>
                <span
                  className={`font-bold ${
                    report.status === 'found' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {report.status === 'found' ? 'Found' : 'Not Found'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;