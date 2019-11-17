var express = require('express');
var router = express.Router();
var passport = require('passport');
var cloudiController = require('./controller/cloudiController');

router.get('/', function(req, res, next) {
    res.send('Cloudi Router');
  });

router.get('/get-all-cloudis', cloudiController.getAllCloudis);

router.post('/create-cloudi', passport.authenticate('jwt', {session: false}), cloudiController.createCloudi);

router.get('/get-cloudi-by-id/:id', passport.authenticate('jwt', {
    session: false}), cloudiController.getCloudiByID);

router.get('/get-all-user-cloudis/:id', passport.authenticate('jwt', {
    session: false}), cloudiController.getAllUserCloudis);

router.delete('/delete-by-id/:id/:user', passport.authenticate('jwt', {session: false}), cloudiController.deleteByID)

module.exports = router;