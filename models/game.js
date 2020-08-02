// Dependency
const mongoose = require('mongoose');

// Schema
const rowSchema = new mongoose.Schema(
  {
    1: { type: String, default: '' },
    2: { type: String, default: '' },
    3: { type: String, default: '' },
    4: { type: String, default: '' },
    5: { type: String, default: '' },
    6: { type: String, default: '' },
    7: { type: String, default: '' },
    8: { type: String, default: '' },
    9: { type: String, default: '' },
    10: { type: String, default: '' },
  },
  { _id: false }
);

const boardSchema = new mongoose.Schema(
  {
    A: { type: rowSchema, default: {} },
    B: { type: rowSchema, default: {} },
    C: { type: rowSchema, default: {} },
    D: { type: rowSchema, default: {} },
    E: { type: rowSchema, default: {} },
    F: { type: rowSchema, default: {} },
    G: { type: rowSchema, default: {} },
    H: { type: rowSchema, default: {} },
    I: { type: rowSchema, default: {} },
    J: { type: rowSchema, default: {} },
  },
  { _id: false }
);

const gameSchema = new mongoose.Schema({
  enemyBoardVisible: { type: boardSchema, default: {} },
  enemyBoardState: { type: boardSchema, default: {} },
  userBoard: { type: boardSchema, default: {} },
});

// Model export
module.exports = mongoose.model('Game', gameSchema);
