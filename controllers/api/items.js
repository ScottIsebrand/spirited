const Product = require('../../models/product');

module.exports = {
  index,
  show,
};

async function index(req, res) {
  try {
    const items = await Product.find({})
      .sort('name')
      .populate('category')
      .exec();
    // Sorting based on sort order of categories (in seed.js), 10, 20, 30, etc.
    items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

async function show(req, res) {
  try {
    const item = await Product.findById(req.params.id);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}
