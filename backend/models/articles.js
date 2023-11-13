const mongoose = require('mongoose');

const articleSchema = mongoose.Schema ({
    title: {
        type : "String",
        required : true
    },
    content : {
        type : "String",
        required : true

    },
    author : {
        type : "String",
        required : true
    },
    date : Date,
    required : Date.now
});
const article = mongoose.model('article' , articleSchema);

module.exports = article;