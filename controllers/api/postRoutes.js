const router = require('express').Router();
const { Post } = require('../../models');

// GET all posts - /api/posts/
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        res.status(200).json(postData);
      } catch (err) {
        res.status(500).json(err);
      }
});

// GET a single post by ID - /api/posts/:id
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        if (!postData) {
          res.status(404).json({ message: 'No post found with that id!' });
          return;
        }
        res.status(200).json(postData);
      } catch (err) {
        res.status(500).json(err);
      }
});

// POST a new post - /api/posts/
router.post('/', async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        res.status(200).json(postData);
      } catch (err) {
        res.status(400).json(err);
      }
});

// PUT update a post by ID - /api/posts/:id
router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
        if (!postData) {
          res.status(404).json({ message: 'No post found with that id!' });
          return;
        }
        res.status(200).json(postData);
      } catch (err) {
        res.status(500).json(err);
      }
});

// DELETE a post by ID - /api/posts/:id
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
          where: {
            id: req.params.id,
          },
        });
        if (!postData) {
          res.status(404).json({ message: 'No post found with that id!' });
          return;
        }
        res.status(200).json(postData);
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;
