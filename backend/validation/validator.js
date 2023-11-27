const joi = require('joi');


function userValidation(body) {
   const userValidationSchema = joi.object({
        firstName : joi.string().min(2).max(10).trim().required,
        lastName : joi.string().min(2).max(10).trim().required,
        email : joi.string().email().trim().required(),
        password : joi.string().min(8).max(20).trim().required
    })
    return userValidation.validate(body)
}
module.exports = userValidation;