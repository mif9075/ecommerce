const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        default: ''
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true, 
        default: ''
    },
    password: {
        type: String,
        require: true,
        default: ''
    },
    avatar: {
        type: String,
        default: ''
    },
    timestamp: {
        type: String,
        default: now.format("dddd, MMMM Do YYYY, h:mm:ss a")
    },
    album: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
    }]
});

module.exports = mongoose.model('User', UserSchema);