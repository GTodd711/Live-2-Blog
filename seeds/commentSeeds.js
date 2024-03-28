const { Comment } = require('../models');

const commentSeedData = [
  {
    content: 'Great post!',
    postId: 1, // ID of the post to which the comment belongs (assuming post ID 1)
    userId: 2, // ID of the user who made the comment (assuming user ID 2 is jane_smith)
  },
  {
    content: 'Interesting thoughts!',
    postId: 2, // ID of the post to which the comment belongs (assuming post ID 2)
    userId: 1, // ID of the user who made the comment (assuming user ID 1 is john_doe)
  },
];

const seedComments = async () => {
  await Comment.bulkCreate(commentSeedData);
  console.log('Comments seeded successfully');
};

module.exports = seedComments;
