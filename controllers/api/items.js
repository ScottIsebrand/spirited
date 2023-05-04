const Product = require('../../models/product');
const Category = require('../../models/category');

module.exports = {
  index,
  show,
  addNewProduct,
};

async function addNewProduct(req, res) {
  try {
    // Add a new product to the database (ie, creating a new product)

    const category = await Category.findOne({ name: req.body.category });
    // req.body.name = "Aviation"
    // req.body.category = 'Gin'
    const productData = { ...req.body, category };
    // productData.name = "Aviation"
    // productData.category = {_id:645301b19edd555930f16605. name: "Gin"}
    const newProduct = await Product.create(productData);

    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

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
