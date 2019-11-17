var express = require("express");
var router = express.Router();
var userController = require("./controller/userController");
var passport = require("passport");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("User router");
});

router.post("/sign-up", userController.signup);

router.post("/sign-in", userController.signin);

router.post("/search", userController.search);

router.get("/search/test", userController.test);

router.post(
  "/get-user",
  passport.authenticate("jwt", { session: false }),
  userController.getUser
);

module.exports = router;
