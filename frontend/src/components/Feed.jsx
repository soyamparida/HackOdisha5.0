import React from 'react';

const Feed = ({ posts }) => (
  
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {posts.map((post, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-500 ease-in-out transform hover:scale-[1.02] opacity-0 animate-slideUp"
        style={{
          animationDelay: `${idx * 150}ms`,
          animationFillMode: 'forwards',
        }}
      >
        {/* Image & Badge */}
        <div className="relative group">
          <img
            src={post.imageURL || 'https://via.placeholder.com/400x250?text=No+Image'}
            alt={post.name}
            className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold tracking-wide rounded-full animate-bounce shadow ${
              post.type === 'Lost' ? 'bg-red-500' : 'bg-green-500'
            } text-white`}
          >
            {post.type.toUpperCase()}
          </span>
        </div>

        {/* Details */}
        <div className="p-5 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-800 text-lg">{post.name}</h3>
            <span className="text-xs text-gray-400">
              {new Date(post.timestamp).toLocaleDateString()}
            </span>
          </div>

          <p className="text-sm text-gray-600 line-clamp-3">
            {post.description || 'No description provided.'}
          </p>

          <p className="text-sm">
            <strong>📍 Location:</strong> {post.location || 'N/A'}
          </p>
          <p className="text-sm">
            <strong>📞 Contact:</strong> {post.contact || 'Not available'}
          </p>

          <div className="flex items-center gap-3 pt-3">
            <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold hover:rotate-12 transition duration-300">
              {post.author?.charAt(0).toUpperCase() || 'U'}
            </div>
            <span className="text-xs text-gray-500 italic">
              Posted by: {post.author || 'Anonymous'}
            </span>
          </div>
        </div>
      </div>
    ))}

    {/* Fallback if no posts */}
    {posts.length === 0 && (
      <div className="col-span-full text-center text-gray-400 text-lg mt-10 animate-fadeInSlow">
        No items to show 🕵️‍♂️
      </div>
    )}
  </div>
);

export default Feed;