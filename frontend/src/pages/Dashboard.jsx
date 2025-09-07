import React, { useState } from 'react';
import PostForm from '../components/PostForm';
import TabNav from '../components/TabNav';
import Feed from '../components/Feed';
import LeftSidebar from '../components/LeftSidebar';
import dummyPosts from '../data/data';

const Dashboard = () => {
  

  const [posts, setPosts] = useState([]);
  const [tab, setTab] = useState('Lost');
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const handlePost = (newPost) => {
    setPosts([newPost, ...posts]);
    setTab(newPost.type);
    setShowModal(false);
  };

  const filteredPosts = posts.filter(
    (p) =>
      p.type === tab &&
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (categoryFilter === 'All' || p.category === categoryFilter)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Post Your Lost/Found Item
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div className="hidden md:block h-[calc(100vh-2rem)] overflow-y-auto scrollbar-hide">
  <LeftSidebar
    onSearch={setSearchQuery}
    onCategoryChange={setCategoryFilter}
  />
</div>
        <div className="md:col-span-2 lg:col-span-3">
          <TabNav currentTab={tab} onChangeTab={setTab} />
          <Feed posts={posts.length === 0 ? dummyPosts : filteredPosts} />
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg max-w-xl w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <PostForm onPost={handlePost} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;