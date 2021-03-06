const User = require("../model/User");
const Album = require("../../album/model/Album");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");

async function hashPassword(password) {
  let genSalt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(password, genSalt);
  return hashedPassword;
}

async function createUser(user) {
  let newUser = await new User({
    username: user.username,
    email: user.email,
    password: user.password,
    avatar: gravatar.url(user.email, {
      s: "200",
      r: "pg",
      d: "mm"
    })
  });
  return newUser;
}

async function errorHandler(error) {
  let errorMessage = null;
  if (error.errmsg.includes("email_1")) {
    errorMessage = "Email Already Exist";
  } else if (error.errmsg.includes("username_1")) {
    errorMessage = "Username Already Exist";
  }
  return errorMessage;
}

async function findOneUser(email) {
  try {
    let foundUser = await User.findOne({ email }).populate("album", "name");
    if (!foundUser) {
      return 404;
    }
    return foundUser;
  } catch (error) {
    return error;
  }
}

async function test() {
  try {
    let foundUser = await User.find({ username: "z" }).populate({
      path: "cloudis"
      // populate: {
      //   path: "user_id"
      // }
    });
    if (!foundUser) {
      return 404;
    }
    return foundUser;
  } catch (error) {
    return error;
  }
}

async function findUserOrAlbum(search) {
  try {
    let foundUser = await User.findOne({ username: search });
    let foundAlbum = await Album.findOne({ name: search });
    if (!foundUser && !foundAlbum) {
      return 404;
    }
    if (!foundUser) {
      return foundAlbum;
    } else {
      return foundUser;
    }
  } catch (error) {
    return error;
  }
}

async function createJwtToken(user) {
  let payload = {
    id: user._id,
    email: user.email,
    username: user.username
  };
  let jwtToken = await jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 3600
  });
  return jwtToken;
}

async function comparePassword(incomingPassword, userPassword) {
  try {
    let comparedPassword = await bcrypt.compare(incomingPassword, userPassword);
    if (comparedPassword) {
      return comparedPassword;
    } else {
      throw 409;
    }
  } catch (error) {
    return error;
  }
}

module.exports = {
  hashPassword,
  createUser,
  errorHandler,
  findOneUser,
  createJwtToken,
  comparePassword,
  findUserOrAlbum,
  test
};
