require('dotenv').config();
// Connect to the database. Make sure this is after dotenv config. 'require' is a function.
require('./config/database'); // connects to db
const express = require('express');
const path = require('path'); // node module
const favicon = require('serve-favicon');
const logger = require('morgan');
const ensureLoggedIn = require('./config/ensureLoggedIn');
// allows for using all ports; add it to middleware as app.use(cors())
const cors = require('cors');

const app = express();
// development port: 3001
// in production we'll a PORT number set in the environment variables
const PORT = process.env.PORT || 3001;

//MIDDLEWARE configured (which needs to be before all the routes)
// Logger middleware
app.use(logger('dev')); // we see info re request in terminal
app.use(cors());
// JSON payload middleware (for data coming from frontend functions)
app.use(express.json()); // built-in Express middleware; we'll still access data in req.body though
// Configure both serve-favicon & static middleware to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
// Checks if token was sent and sets a user data on the request (puts user data in req.user); looks for a token
app.use(require('./config/checkToken'));

// ALL OTHER ROUTES
// Match incoming requests.. Everything that comes in here goes to api/users.js
// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));

// The following "catch all" route (note the *) is necessary to return the index.html on all non-AJAX requests
// req is request to server; the res is what's sent back to the user
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Tell the Express app to listen for incoming requests (on port 3001, so React's development server can keep using 3000).
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
