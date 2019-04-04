"use strict";

var _require = require('./../models/Menu'),
    Menu = _require.Menu;

var list = function list(req, res) {
  Menu.find({
    restaurantId: req.params.id
  }).then(function (menuList) {
    return res.json(menuList);
  });
};

var create = function create(req, res) {
  var body = req.body; // const body = req.body

  body.restaurantId = req.params.id;
  var newMenu = new Menu(body);
  newMenu.save().then(function (menuCreated) {
    return res.json(menuCreated);
  })["catch"](function (error) {
    return res.status(400).json(error);
  });
};

exports.menusController = {
  listAll: list,
  create: create
};