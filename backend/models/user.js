const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName :{
        type: "String",
        required : [true, "Please enter your firstname"]
    },
    lastName : {
        type : "String",
        required: [true, "Please enter your lastname"]
    },
    email : {
        type : "String",
        required : [true, "Please enter your email"],
        unique : true
    },
    password : {
        type : "String",
        minlength : 8,
        required : [true,"Please enter a password"]
    },
    admin : {
        type : Boolean,
        default: false
    }

});
const User = mongoose.model('User', userSchema);

module.exports = User;