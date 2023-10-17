const router = require('express').Router();
const { User } = require('../../models');

// GET all users - /api/users/
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
});

// GET a single user by ID - /api/users/:id
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);
        if (!userData) {
          res.status(404).json({ message: 'No user found with that id!' });
          return;
        }
        res.status(200).json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
});

// POST a new user - /api/users/
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
      } catch (err) {
        res.status(400).json(err);
      }
});

// PUT update a user by ID - /api/users/:id
router.put('/:id', async (req, res) => {
    try {
        const userData = await User.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
        if (!userData) {
          res.status(404).json({ message: 'No user found with that id!' });
          return;
        }
        res.status(200).json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
});

// DELETE a user by ID - /api/users/:id
router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
          where: {
            id: req.params.id,
          },
        });
        if (!userData) {
          res.status(404).json({ message: 'No user found with that id!' });
          return;
        }
        res.status(200).json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;
