const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");
const now = moment();

const AlbumSchema = new mongoose.Schema({
  name: { type: String, uniquer: true },

  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  cloudis: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cloudi"
    }
  ],

  cover: {
    type: String,
    default: ""
  },

  timestamp: {
    type: String,
    default: now.format("dddd, MMMM Do YYYY, h:mm:ss a")
  }
});

module.exports = mongoose.model("Album", AlbumSchema);
