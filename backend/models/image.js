const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    title : {
        type : "string" ,
        required : false
    },

    imageurl : {
        type :String,
        required : true
    }

});

const image = model.mongoose('image', imageSchema);

module.export = image 