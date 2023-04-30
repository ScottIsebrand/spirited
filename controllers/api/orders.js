const Order = require('../../models/order');
// const Item = require('../../models/item');

// Function to create user's unpaid order
async function cart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Function to add an item to the cart
async function addToCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Function to update the QUANTITY of an item in the cart
async function setItemQtyInCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Function to update the cart's isPaid property to true
async function checkout(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Function to return the logged in user's paid orders history
async function history(req, res) {
  // Sort most recent orders first via 'updatedAt'
  try {
    const orders = await Order.find({ user: req.user._id, isPaid: true })
      .sort('-updatedAt')
      .exec();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  history,
};
