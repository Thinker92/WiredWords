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

});

// POST a new post - /api/posts/
router.post('/', async (req, res) => {

});

// PUT update a post by ID - /api/posts/:id
router.put('/:id', async (req, res) => {

});

// DELETE a post by ID - /api/posts/:id
router.delete('/:id', async (req, res) => {

});

module.exports = router;
