const authHelper = require("./authHelper");

module.exports = {
  signup: async (req, res) => {
    try {
      let newUser = await authHelper.createUser(req.body);
      let hashedPassword = await authHelper.hashPassword(newUser.password);
      newUser.password = hashedPassword;
      let savedUser = await newUser.save();

      savedUser.password = undefined;
      savedUser.timestamp = undefined;

      res.status(200).json({
        message: "User Successfully created! Please Login"
      });
    } catch (error) {
      let errorMessage = await authHelper.errorHandler(error);

      res.status(500).json({
        message: errorMessage
      });
    }
  },

  signin: async (req, res) => {
    try {
      let foundUser = await authHelper.findOneUser(req.body.email);
      if (foundUser === 404) {
        throw "User not found, please sign up";
      }
      let comparePassword = await authHelper.comparePassword(
        req.body.password,
        foundUser.password,
        foundUser.password
      );
      if (comparePassword === 409) {
        throw "Check your email and password";
      }
      let jwtToken = await authHelper.createJwtToken(foundUser);
      res.status(200).json({
        token: jwtToken
      });
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },

  search: async (req, res) => {
    try {
      let foundUserOrAlbum = await authHelper.findUserOrAlbum(req.body.search);
      res.status(200).json(foundUserOrAlbum);
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
  getUser: async (req, res) => {
    try {
      let response = await authHelper.findOneUser(req.body.email);
      user = {
        id: response.id,
        username: response.username,
        email: response.email,
        cloudis: response.cloudis,
        avatar: response.avatar,
        timestamp: response.timestamp,
        album: response.album
      };
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },

  test: async (req, res) => {
    try {
      let foundUser = await authHelper.test();
      if (foundUser === 404) {
        throw "User not found, please sign up";
      }
      res.status(200).json(foundUser);
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  }
};
