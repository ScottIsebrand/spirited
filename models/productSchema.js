// const item = require('./item');
const Schema = require('mongoose').Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    image: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    origin: { type: String, required: true },
    volume: { type: Number, required: true, default: 0 },
    quantity: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = productSchema;
