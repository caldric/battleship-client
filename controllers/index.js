// Dependencies
const express = require('express');
const Game = require('../models/game.js');
const User = require('../models/user.js');

// Configuration
const myRouter = express.Router();

// Route: specific game
myRouter
  .route('/games/:id')
  // Index route
  .get(async (req, res) => {
    const query = await Game.findById(req.params.id).catch((err) =>
      res.status(400).json({ error: err.message })
    );
    res.status(200).json(query);
  })
  // Update route
  .put(async (req, res) => {
    const query = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).catch((err) => res.status(400).json({ error: err.message }));
    res.status(200).json(query);
  })
  // Delete route
  .delete(async (req, res) => {
    const query = await Game.findByIdAndRemove(req.params.id).catch((err) =>
      res.status(400).json({ error: err.message })
    );
    res.status(200).json(query);
  });

/**************************************************************
************************* INDEX ROUTE ************************

curl http://localhost:8080/battleship/allusers
**************************************************************/
myRouter.get('/allusers', async (req, res) => {
  const query = await User.find({}).catch((err) =>
    res.status(400).json({ error: err.message })
  );
  res.status(200).json(query);
});

/**************************************************************
****************** CREATE ROUTE (user profile) ****************

curl -X POST -H "Content-Type: application/json" -d '{"username":"player2", "password":"123456", "totalGames":2}' http://localhost:8080/battleship/create/user
**************************************************************/
myRouter.post('/create/user', async (req, res) => {
  const query = await User.create(req.body).catch((err) =>
    res.status(400).json({ error: err.message })
  );
  res.status(200).json(query);
});

/**************************************************************
****************** CREATE ROUTE (game board) ******************

curl -X POST -H "Content-Type: application/json" -d '{"enemyID":"5f1a4be8eeefb5357bc85907"}' http://localhost:8080/battleship/create/game
**************************************************************/
// CHECK
myRouter.post('/create/game', async (req, res) => {
  const query = await Game.create(req.body).catch((err) =>
    res.status(400).json({ error: err.message })
  );
  res.status(200).json(query);
});

// Router export
module.exports = myRouter;
