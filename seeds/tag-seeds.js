const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'eyes',
  },
  {
    tag_name: 'face',
  },
  {
    tag_name: 'hair',
  },
  {
    tag_name: 'nails',
  },
  {
    tag_name: 'body',
  },
  {
    tag_name: 'purple',
  },
  {
    tag_name: 'luxury',
  },
  {
    tag_name: 'nude',
  },
  {
    tag_name: 'lips',
  }
];

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;