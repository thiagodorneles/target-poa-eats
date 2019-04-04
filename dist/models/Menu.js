"use strict";

var mongoose = require('mongoose');

var _require = require('./../database'),
    db = _require.db;

var menuSchema = mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'restaurants',
    required: [true, 'Restaurant is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  category: {
    type: String,
    "enum": ['Entree', 'Dish', 'Desert'],
    required: [true, 'Category is required']
  }
});
var Menu = db.model('menus', menuSchema);
exports.Menu = Menu;