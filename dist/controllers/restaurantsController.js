"use strict";

var _require = require('./../models/Restaurant'),
    Restaurant = _require.Restaurant;

var list = function list(req, res) {
  Restaurant.find().then(function (restaurantsList) {
    return res.json(restaurantsList);
  });
};

var create = function create(req, res) {
  var newRestaurant = new Restaurant(req.body);
  newRestaurant.save().then(function (restauranteCreated) {
    return res.json(restauranteCreated);
  })["catch"](function (error) {
    return res.status(400).json(error);
  });
};

exports.restaurantsController = {
  listAll: list,
  create: create
};