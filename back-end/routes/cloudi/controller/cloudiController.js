const Cloudi = require("../model/Cloudi");
const User = require("../../users/model/User");
const Album = require("../../album/model/Album");

module.exports = {
  getAllCloudis: async (req, res) => {
    try {
      let allCloudis = await Cloudi.find({});

      res.status(200).json(allCloudis);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  createCloudi: async (req, res) => {
    let id = req.body.id;
    let title = req.body.title;
    let image = req.body.image;
    let album = req.body.album;

    try {
      let foundUser = await User.findById(id);
      let newCloudi = new Cloudi({
        title: title,
        image: image,
        user_id: id,
        album: album
      });
      let savedNewCloudi = await newCloudi.save();
      await foundUser.cloudis.push(savedNewCloudi);
      await foundUser.save();

      let foundAlbum = await Album.findById(album);
      await foundAlbum.cloudis.push(savedNewCloudi);
      await foundAlbum.save();

      res.status(200).json(savedNewCloudi);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  getCloudiByID: async (req, res) => {
    const id = req.params.id;
    try {
      let foundCloudi = await Cloudi.findById({ _id: id });
      res.status(200).json(foundCloudi);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteByID: async (req, res) => {
    const id = req.params.id;

    const user = req.params.user;

    try {
      let deleteByID = await Cloudi.findByIdAndRemove(id);

      let user1 = await User.findOne({ _id: user });
      let cloudiIndex = await user1.cloudis.indexOf(id);
      await user1.cloudis.splice(cloudiIndex, 1);
      await user1.save();

      res.status(200).json(deleteByID);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  getAllUserCloudis: async (req, res) => {
    const id = req.params.id;

    try {
      let allUserCloudis = await User.findById({ _id: id })
        .populate("cloudis")
        .exec();

      res.status(200).json(allUserCloudis.cloudis);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
};
