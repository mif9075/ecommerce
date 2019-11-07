const mongoose = require('mongoose')

let AlbumSchema = new mongoose.Schema({
    name: {type: String, uniquer: true, lowercase: true}
})

module.exports = mongoose.model('album', AlbumSchema)