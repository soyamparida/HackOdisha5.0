import React, { useState } from 'react';

const PostForm = ({ onPost }) => {
  const [form, setForm] = useState({
    type: 'lost',
    name: '',
    description: '',
    contact: '',
    location: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.description || !form.contact || !form.location) return;
    const post = {
      ...form,
      imageURL: form.image ? URL.createObjectURL(form.image) : null,
      timestamp: new Date(),
    };
    onPost(post);
    setForm({
      type: 'lost',
      name: '',
      description: '',
      contact: '',
      location: '',
      image: null,
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 max-w-3xl mx-auto animate-slideInLeft">
      <div className="flex justify-center gap-4 mb-6">
        {['lost', 'found'].map((option) => (
          <button
            key={option}
            onClick={() => setForm({ ...form, type: option })}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition duration-300 transform hover:scale-105 ${
              form.type === option
                ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {[
          { label: 'Product Name', name: 'name', placeholder: 'e.g. Black Wallet' },
          { label: 'Owner Contact', name: 'contact', placeholder: 'Email or Phone' },
          { label: 'Lost/Found Location', name: 'location', placeholder: 'Where was it lost or found?' }
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            placeholder="Brief description of the item"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 transition duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {form.image && (
          <div className="mt-4 animate-popText">
            <img
              src={URL.createObjectURL(form.image)}
              alt="Preview"
              className="h-32 w-32 object-cover rounded-lg border shadow-md"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold text-sm hover:scale-105 transform transition duration-300"
        >
          Submit {form.type === 'lost' ? 'Lost' : 'Found'} Item
        </button>
      </form>
    </div>
  );
};

export default PostForm;

