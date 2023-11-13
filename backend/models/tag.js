const  mongoose  = require("mongoose");

const tagSchema= mongoose.Schema ({
    name : {
        type : "string",
        require : true
    }
});

const tag = model.mongoose('tag', tagSchema)

module.exports = tag