const mongoose = require('mongoose');

const categorieSchema = mongoose.Schema ({
    name: {
        type : "String",
        required : true,
        unique: true
    }

});

const categorie = mongoose.model('categorie',categorieSchema);

module.exports = categorie