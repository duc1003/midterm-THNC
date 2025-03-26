const express = require('express');
const { getAllProducts, addProduct, deleteProduct, updateProduct } = require('../controllers/product.controller.js');

const route = express.Router();

route.get('/', getAllProducts);
route.post('/', addProduct);
route.delete('/:id', deleteProduct);
route.put('/:id', updateProduct);

module.exports = route;