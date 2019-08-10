const Product = require('../models/product.model');

exports.getProducts = async (req, res) => {
  try {
    res.status(200).json(await Product.find());
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.getProduct = async (req, res) => {
  Product.findOne({ id: req.params.id }).exec((err, product) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ product });
  });
}
