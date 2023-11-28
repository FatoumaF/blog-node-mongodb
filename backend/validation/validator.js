const joi = require('joi');

function userValidation(body) {
   const userValidationRegister = joi.object({
        firstName: joi.string().min(2).max(10).trim().required(),
        lastName: joi.string().min(2).max(10).trim().required(),
        email: joi.string().email().trim().required(),
        password: joi.string().min(5).max(20).trim().required()
    })

    const userValidationLogin = joi.object({
        email: joi.string().email().trim().required(),
        password: joi.string().min(5).max(20).trim().required()
        
    })

    return {
        userValidationRegister : userValidationRegister.validate(body),
        userValidationLogin : userValidationLogin.validate(body)
    }
}

module.exports = userValidation;
