import { Restaurant } from './../models/Restaurant'

const list = async (req, res) => {
  const list = await Restaurant.find()
  res.json(list)
  // Restaurant.find().then(restaurantsList => res.json(restaurantsList))
}

const create = async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body)
  
    const restauranteCreated = await newRestaurant.save()

    res.json(restauranteCreated)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const restaurantsController = {
  listAll: list,
  create: create
}
