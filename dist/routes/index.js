"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _express = require("express");

var _restaurantsController = require("./../controllers/restaurantsController");

var _menusController = require("./../controllers/menusController");

var routes = (0, _express.Router)();
exports.routes = routes;
routes.get('/', function (req, res) {
  return res.send('Poa eats vem ai!');
});
routes.get('/restaurantes', _restaurantsController.restaurantsController.listAll);
routes.post('/restaurantes', _restaurantsController.restaurantsController.create);
routes.get('/restaurantes/:id/menus', _menusController.menusController.listAll);
routes.post('/restaurantes/:id/menus', _menusController.menusController.create);