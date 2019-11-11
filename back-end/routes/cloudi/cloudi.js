var express = require('express');
var router = express.Router();
var passport = require('passport');
var cloudiController = require('./controller/cloudiController');

router.get('/', function(req, res, next) {
    res.send('Cloudi router');
  });

router.post('/create-cloudi', passport.authenticate('jwt', {session: false}), cloudiController.createCloudi);

router.get('get-cloudi-by-id/:id', passport.authenticate('jwt', {
    session: false}), cloudiController.getTalkByID);

router.get('get-all-user-cloudis/:id', passport.authenticate('jwt', {
    session: false}), cloudiController.getAllUserCloudis);

router.delete('delete-by-id/:id', passport.authenticate('jwt', {session: false}), cloudiController.deleteByID)

module.exports = router;