"use strict";

var mongoose = require('mongoose');

var _require = require('./../database'),
    db = _require.db;

var restaurantsSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [5, 'Name must have at least 5 chars']
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  }
});
var Restaurant = db.model('restaurants', restaurantsSchema);
exports.Restaurant = Restaurant;