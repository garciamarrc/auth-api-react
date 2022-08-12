const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    token: String
})

module.exports = mongoose.model('User', UserSchema)