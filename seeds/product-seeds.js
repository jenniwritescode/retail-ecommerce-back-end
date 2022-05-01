const { Product } = require('../models');

const productData = [
  {
    product_name: 'Eyeshadow Palette',
    price: 39.99,
    stock: 15,
    category_id: 1,
  },
  {
    product_name: 'Face Wash',
    price: 19.99,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: 'Styling Cream',
    price: 25.99,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: 'Nail Polish Remover',
    price: 5.99,
    stock: 50,
    category_id: 4,
  },
  {
    product_name: 'Prada Candy Eau de Parfum',
    price: 79.99,
    stock: 8,
    category_id: 5,
  },
  {
    product_name: 'Lipstick',
    price: 14.99,
    stock: 12,
    category_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;