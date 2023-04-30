const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// SALT_ROUNDS determines how much processing time it will take to perform the hash (how difficult to decrypt your password).
const SALT_ROUNDS = 6;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true, // Creates a unique index in the database which will trigger an error if violated; thus an email is allowed only once in the db
      trim: true, // This transform causes Mongoose to trim spaces before and after the string before saving; trims extra spaces so there are not accidental spaces in the email
      lowercase: true, // This transform causes Mongoose to convert the string to lowercase before saving; so all characters/string to lower case in the email
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: function (doc, ret) {
      delete ret.password;
      return ret;
    },
  }
);

// Pre Hook running before we save the document
userSchema.pre('save', async function (next) {
  // if password was NOT modified continue to the next middleware
  // 'this' is the user doc
  if (!this.isModified('password')) return next();

  // "hash the [plain text] password," -- ie, update the plaintext password with the computed hash;
  // await the bcrypt hash function that will return a promise, it will take some time.
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model('User', userSchema);
