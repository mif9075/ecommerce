const Album = require("../model/Album");
const User = require("../../users/model/User");
// const Cloudi = require('../../cloudi/model/Cloudi');

module.exports = {
  getAllAlbums: async (req, res) => {
    try {
      let allAlbums = await Album.find({});

      res.status(200).json(allAlbums);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  //   albumAddCloudi: async (req, res) => {
  //   }

  createAlbum: async (req, res) => {
    let id = req.body.id;
    let name = req.body.title;
    let cover = req.body.cover;

    try {
      let foundUser = await User.findById(id);
      let newAlbum = await new Album({
        name: name,
        user_id: id,
        cover: cover
      });
      let savedNewAlbum = await newAlbum.save();
      await foundUser.album.push(savedNewAlbum);
      await foundUser.save();
      res.status(200).json(savedNewAlbum);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  getAlbumByID: async (req, res) => {
    const id = req.params.id;
    try {
      let foundAlbum = await Album.findById({ _id: id }).populate("cloudis");
      res.status(200).json(foundAlbum);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  deleteByID: async (req, res) => {
    const id = req.params.id;

    const user = req.params.user;

    try {
      let deletedByID = await Album.findByIdAndRemove(id);

      let user1 = await User.findOne({ _id: user });
      let albumIndex = await user1.album.indexOf(id);
      await user1.album.splice(albumIndex, 1);
      await user1.save();

      res.status(200).json(deletedByID);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  getAllUserAlbums: async (req, res) => {
    const id = req.params.id;

    try {
      let allUserAlbums = await User.findById({ _id: id })
        .populate("album")
        .exec();

      res.status(200).json(allUserAlbums.album);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
};
