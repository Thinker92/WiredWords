const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Setup Homepage route
router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [{ model: User }],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('homepage', { posts });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
// GET login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Setup Dashboard route
