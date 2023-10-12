const { User } = require('../models');

const userdata = [
  {
    username: 'john_doe',
    password: 'password123',
  },
  {
    username: 'jane_doe',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
