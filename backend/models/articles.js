const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
 
  name : {
    type: String,
    required : true
  },
  date: {
    type: Date,
    default: Date.now
  },
  image  : {
    type : String,
    required : false
  }
});

const article = mongoose.model('article', articleSchema);

module.exports = article;
