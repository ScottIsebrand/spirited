const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./category');

const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);
