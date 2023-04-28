//* Request handler logic is here (as a separate file)
const User = require('../../models/user');
// jwt token is a STRING to verify user
const jwt = require('jsonwebtoken');
// bcrypt is a package to encrypt (not just encode) password
const bcrypt = require('bcrypt');

// "Helper" Functions
// Create a new jwt and specify the expiration time of the jwt to 24 hrs
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
}

async function create(req, res) {
  // console.log('[From POST handler]', req.body) // <---- IMPORTANT to console, to "follow the data"
  try {
    // Add the user to the database (ie, creating a new user)
    const user = await User.create(req.body);
    // console.log(user);

    // Stores information; (ie, creating a new jwt)
    const token = createJWT(user);
    // Use res.json to send back a new token AS A STRING with the user data in the payload
    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function login(req, res) {
  try {
    // find user in db by user email
    const user = await User.findOne({ email: req.body.email });
    // check IF user is found or not
    if (!user) throw new Error('User not found');
    // IF user exists, compare the password to hashed password
    const matched = await bcrypt.compare(req.body.password, user.password);
    if (!matched) throw new Error('User note found');
    // send back a new token with the user data in the payload
    res.json(createJWT(user)); // same as: const token = createJWT(user);
    // res.json(token);
  } catch {
    res.status(400).json('Check credentials, please');
  }
}

async function checkToken(req, res) {
  console.log(req.user);
  res.json(req.exp);
}

module.exports = {
  create,
  login,
  checkToken,
};
