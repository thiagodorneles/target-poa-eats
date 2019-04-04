const mongoose = require('mongoose')
const { db } = require('./../database')

const restaurantsSchema = mongoose.Schema({
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
})

const Restaurant = db.model('restaurants', restaurantsSchema)

export {
  Restaurant
}
