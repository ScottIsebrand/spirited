const item = require('./item');
const Schema = require('mongoose').Schema;

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    emoji: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    volume: { type: Number, required: true, default: 0 },
    quantity: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;
