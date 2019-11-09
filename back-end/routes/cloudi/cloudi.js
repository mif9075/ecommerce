var express = require('express');
var router = express.Router();
var passport = require('passport');
var cloudiController = require('./controller/cloudiController');

router.post('/create-cloudi', passport.authenticate('jwt', {session: true}), cloudiController.createCloudi);

router.get('get-cloudi-by-id/:id', passport.authenticate('jwt', {
    session: true}), cloudiController.getTalkByID);

router.get('get-all-user-cloudis/:id', passport.authenticate('jwt', {
    session: true}), cloudiController.getAllUserCloudis);

router.delete('delete-by-id/:id', passport.authenticate('jwt', {session: true}), cloudiController.deleteByID)

module.exports = router;