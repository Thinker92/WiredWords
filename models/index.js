const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// One User can have many Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// One Post can have many Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

// One User can have many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Post, Comment };
