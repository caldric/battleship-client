// Dependencies
const bcrypt = require('bcrypt');
const express = require('express');
const User = require('../models/user.js');

// Config
const signupRouter = express.Router();

// Routers
signupRouter.post('/', async (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  const newUser = await User.create(req.body).catch((err) =>
    res.status(400).json({ error: err.message })
  );
  res.status(200).json(newUser);
});

// Export
module.exports = signupRouter;
