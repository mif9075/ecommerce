var express = require('express');
var router = express.Router();
var passport = require('passport');
var cloudiController = require('./controller/cloudiController');

router.get('/', function(req, res, next) {
    res.send('Cloudi router');
  });

router.get('/get-all-cloudi', passport.authenticate('jwt', { session: false}), cloudiController.getAllCloudis);

router.post('/create-cloudi', passport.authenticate('jwt', {session: false}), cloudiController.createCloudi);

router.post('/create-album', passport.authenticate('jwt', {session: false}), cloudiController.createAlbum);

router.get('/get-cloudi-by-id/:id', passport.authenticate('jwt', {
    session: false}), cloudiController.getCloudiByID);

router.get('/get-all-user-cloudis/:id', passport.authenticate('jwt', {
    session: false}), cloudiController.getAllUserCloudis);

router.get('/get-all-user-albums/:id', passport.authenticate('jwt', {
    session: false}),
    cloudiController.getAllUserAlbums);

router.delete('/delete-by-id/:id', passport.authenticate('jwt', {session: false}), cloudiController.deleteByID)

module.exports = router;