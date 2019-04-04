const { Menu } = require('./../models/Menu')

const list = (req, res) => {
  Menu.find({ restaurantId: req.params.id }).then(menuList => res.json(menuList))
}

const create = (req, res) => {
  const { body } = req // const body = req.body
  body.restaurantId = req.params.id

  const newMenu = new Menu(body)

  newMenu.save()
    .then(menuCreated => res.json(menuCreated))
    .catch(error => res.status(400).json(error))
}

exports.menusController = {
  listAll: list,
  create: create
}
