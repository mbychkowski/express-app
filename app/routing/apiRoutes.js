const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const friends = require('../data/friend.js');

var routeAPI = express.Router();

routeAPI.use(bodyParser.urlencoded({extended: false}));
routeAPI.use(bodyParser.json());

routeAPI.get('/api/friends', function(req, res) {
  res.json(friends);
});

routeAPI.post('/api/friends', function(req, res) {
  var newFriend = req.body;

  friends.push(newFriend);

  res.json(newFriend);
});

module.exports = routeAPI;
