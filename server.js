// Dependencies
// Packages
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');

// Controllers
const indexController = require('./controllers/index.js');
const signupController = require('./controllers/signup.js');
const loginController = require('./controllers/login.js');

// Configuration
const local = {
  port: 8080,
  mongoURI: 'mongodb://localhost:27017/battleship',
  clientURL: 'http://localhost:3000',
};
const deployment = {
  port: process.env.PORT,
  mongoURI: process.env.MONGODB_URI,
  url: 'https://playbattleship.herokuapp.com',
};
const index = 'battleship';
const app = express();
const PORT = deployment.port || local.port;
const MONGODB_URI = deployment.mongoURI || local.mongoURI;

// Connect to MongoDB via Mongoose
mongoose.connection.on('error', (error) =>
  console.log(`${error.message} is Mongo not running?`)
);
mongoose.connection.on('disconnected', () => console.log('Mongo disconnected'));
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('Connected to Mongoose');
});

// Middleware
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(
  session({
    secret: process.env.SECRET || 'hello',
    resave: false,
    saveUninitialized: false,
  })
);

// Controllers
app.use(`/${index}`, indexController);
app.use('/signup', signupController);
app.use('/login', loginController);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
