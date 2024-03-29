const router = require('express').Router();
const { Comment } = require('../../models');

// GET all comments - /api/comments/
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
      } catch (err) {
        res.status(500).json(err);
      }
});

// GET a single comment by ID - /api/comments/:id
router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id);
        if (!commentData) {
          res.status(404).json({ message: 'No comment found with that id!' });
          return;
        }
        res.status(200).json(commentData);
      } catch (err) {
        res.status(500).json(err);
      }
});

// POST a new comment - /api/comments/
router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create(req.body);
        res.status(200).json(commentData);
      } catch (err) {
        res.status(400).json(err);
      }
});

// PUT update a comment by ID - /api/comments/:id
router.put('/:id', async (req, res) => {
    try {
        const commentData = await Comment.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
        if (!commentData) {
          res.status(404).json({ message: 'No comment found with that id!' });
          return;
        }
        res.status(200).json(commentData);
      } catch (err) {
        res.status(500).json(err);
      }
});

// DELETE a comment by ID - /api/comments/:id
router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
          where: {
            id: req.params.id,
          },
        });
        if (!commentData) {
          res.status(404).json({ message: 'No comment found with that id!' });
          return;
        }
        res.status(200).json(commentData);
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;
