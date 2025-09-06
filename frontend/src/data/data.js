 const dummyPosts = [
  {
    name: 'Lost Wallet',
    description: 'Black leather wallet with ID cards and ₹2000 cash lost near MG Road.',
    location: 'MG Road, Delhi',
    contact: '+91 9876543210',
    type: 'lost',
    timestamp: Date.now() - 10000000,
    imageURL: 'https://via.placeholder.com/400x250?text=Wallet',
  },
  {
    name: 'Found Dog',
    description: 'Golden Retriever found wandering alone in Sector 21. Seems friendly and well-groomed.',
    location: 'Sector 21, Noida',
    contact: '+91 9123456780',
    type: 'found',
    timestamp: Date.now() - 5000000,
    imageURL: 'https://via.placeholder.com/400x250?text=Dog',
  },
  {
    name: 'Lost iPhone',
    description: 'iPhone 13 lost in the metro between Rajiv Chowk and Noida City Centre.',
    location: 'Delhi Metro',
    contact: '+91 9988776655',
    type: 'lost',
    timestamp: Date.now() - 20000000,
    imageURL: 'https://via.placeholder.com/400x250?text=iPhone',
  },
  {
    name: 'Found Backpack',
    description: 'Blue Wildcraft backpack found near cafeteria. Contains books and laptop.',
    location: 'College Cafeteria',
    contact: '+91 9001122334',
    type: 'found',
    timestamp: Date.now() - 3000000,
    imageURL: 'https://via.placeholder.com/400x250?text=Backpack',
  },
];
export default dummyPosts;