const { Post } = require('../models');

const postSeedData = [
  {
    title: 'First Post',
    content: 'This is the content of the first post.',
    author: 1, // User ID of the author (assuming user ID 1 is john_doe)
  },
  {
    title: 'Second Post',
    content: 'Content of the second post goes here.',
    author: 2, // User ID of the author (assuming user ID 2 is jane_smith)
  },
];

const seedPosts = async () => {
  await Post.bulkCreate(postSeedData);
  console.log('Posts seeded successfully');
};

module.exports = seedPosts;
