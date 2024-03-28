const { User } = require('../models');

const userData = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'password123',
  },
  {
    username: 'jane_smith',
    email: 'jane@example.com',
    password: 'securepass456',
  },
];

const seedUsers = async () => {
  await User.bulkCreate(userData);
  console.log('Users seeded successfully');
};

module.exports = seedUsers;
