var express = require('express');
var router = express.Router();
var passport = require('passport');
var albumController = require('./controller/albumController');

router.get('/', function(req, res, next) {
    res.send('Album Router');
  });

router.get('/get-all-albums', albumController.getAllAlbums);

router.post('/create-album', passport.authenticate('jwt', {session: false}), albumController.createAlbum);

router.get('/get-album-by-id:id', passport.authenticate('jwt', {session: false}), albumController.getAlbumByID);

router.get('/get-all-user-albums/:id', passport.authenticate('jwt', {session: false}), albumController.getAllUserAlbums);

router.delete('/delete-by-id/:id', passport.authenticate('jwt', {session: false}), albumController.deleteByID);

module.exports = router;
