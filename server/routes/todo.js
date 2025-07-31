const express = require('express');
const Todo = require('../models/Todo');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
});

router.post('/', auth, async (req, res) => {
  const todo = await Todo.create({ text: req.body.text, userId: req.user.id });
  res.json(todo);
});

router.delete('/:id', auth, async (req, res) => {
  await Todo.deleteOne({ _id: req.params.id, userId: req.user.id });
  res.json({ message: 'Deleted' });
});

module.exports = router;
