const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config =require('config');
const PasswordComplexity = require('joi-password-complexity');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: 6,
        maxlength: 12,
        required: true
    },

    email:{
        type: String,
        unique: true,
        required: true
    },

    password:{
        type: String,
        minlength: 6,
        maxlength: 1024,
        required: true
    },

    isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign(
        { 
            _id: this._id, isAdmin: this.isAdmin
        },
        config.get('jwtPrivateKey')
    );

    return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {

    const schema = Joi.object().keys({

        username: Joi.string().min(6).max(30).required(),
        // email is required
        // email must be a valid email string
        email: Joi.string().email({ minDomainAtoms: 2 }),
    });
    

    return Joi.validate(user, schema);
}

function validateUserPassword(user){
    return Joi.validate(user.password, new PasswordComplexity())
}

module.exports.User = User;
module.exports.validate = validateUser;
module.exports.validateUserPassword = validateUserPassword;