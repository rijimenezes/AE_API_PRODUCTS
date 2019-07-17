const mongoose = require('mongoose');

let prodcutSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  price: {
    type: Number,
    required:true
  },
  description: {
    type: String,
    required: true
  },
  img:{
    type:String
  }
});

const productModel = mongoose.model('Product', prodcutSchema, 'products');

module.exports = productModel;