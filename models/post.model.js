const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
  name: {
        type: String
  },
  id: {
    type: String
  },
  description: {
    type: String
  },
  img:{
      type:String
  },
  rank:{
      type:Number
  }
});

const postModel = mongoose.model('Post', postSchema, 'posts');

module.exports = postModel;