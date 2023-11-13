const mongoose = require('mongoose');

const commentSchema = mongoose.Schema ({
    userName : {
        type : "Sring",
        required : true
    },
    content : {
        type : "String",
        required : true
    },
    date : {
        type : Date,
        required : Date.now
    }
});

const comment = mongoose.model('comment', commentSchema);

module.exports = comment;