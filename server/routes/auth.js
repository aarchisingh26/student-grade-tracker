const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// router.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//   const hash = await bcrypt.hash(password, 10);
//   try {
//     const user = await User.create({ username, password: hash });
//     res.json({ message: 'User created' });
//   } catch {
//     res.status(400).json({ message: 'Username taken' });
//   }
// });

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if username already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: 'Username already taken' });
  }

  // Hash the password
  const hash = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ username, password: hash });
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(500).json({ message: 'Server error during registration' });
  }
});


router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id, username }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
});

module.exports = router;
