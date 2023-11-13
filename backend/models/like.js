const mongoose = require('mongoose');

const likeSchema = mongoose.Schema ({
    username : {
        type : String,
        required : true
    },
    date : {
        type : date,
        required: Date.now
    }
});

const like = model.mongoose('like', likeSchema);

module.exports = like