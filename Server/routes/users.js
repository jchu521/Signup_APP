const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { User, validate, validateUserPassword } = require('../models/user');
const bcrypt = require('bcrypt');
const _ = require('lodash');

//get user
router.get('/me', auth, async(req, res) => {
    const user = await User.findById(req.user._id).select('-password');

    res.send(user);
});

//register user
router.post('/', async (req,res) => {
    const { error } = validate(req.body);

    if(error) return res.status(400).send(error.details[0].message);
    if (validateUserPassword(req.body).error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({ email: req.body.email });

    if(user) return res.status(400).send(' Email already registered');
    user = new User(_.pick(req.body, ["username", "email", "password"]));

    //generate a salt and hash on separate function calls
    /*
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            // Store hash in your password DB.
        });
    });
     */
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    //generating a JWT
    const token = user.generateAuthToken();

    res.header('x-auth-token', token).send(_.pick(user, ["_id", "username", "email"]));
});

module.exports = router;