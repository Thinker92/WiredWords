const { Comment } = require('../models');

const commentdata = [
  {
    content: 'Great post!',
    likes: 5,
    dislikes: 0,
    user_id: 1,
    post_id: 1
  },
  {
    content: 'I disagree.',
    likes: 2,
    dislikes: 3,
    user_id: 2,
    post_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
