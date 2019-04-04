import { Router } from 'express'
import { restaurantsController } from './../controllers/restaurantsController'
import { menusController } from './../controllers/menusController'

const routes = Router()

routes.get('/', (req, res) => res.send('Poa eats vem ai!'))

routes.get('/restaurantes', restaurantsController.listAll)
routes.post('/restaurantes', restaurantsController.create)

routes.get('/restaurantes/:id/menus', menusController.listAll)
routes.post('/restaurantes/:id/menus', menusController.create)

export {
  routes
}
