const mongoose = require('../db');

const userSchema = new mongoose.Schema ({
    firstname: String,
    lastname: String,
    status: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;