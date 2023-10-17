const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Homepage route
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

// Dashboard route
router.get('/dashboard', async (req, res) => {
    try {
      const postData = await Post.findAll({
        where: {
          user_id: req.session.user_id,
        },
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('dashboard', { posts });
    } catch (err) {
      res.status(500).json(err);
    }
  });