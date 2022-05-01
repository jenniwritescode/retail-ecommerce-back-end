const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Makeup',
  },
  {
    category_name: 'Skincare',
  },
  {
    category_name: 'Hair',
  },
  {
    category_name: 'Nails',
  },
  {
    category_name: 'Fragrance',
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;