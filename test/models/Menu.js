const { describe, it } = require('mocha')
const { expect } = require('chai')
const { Menu } = require('./../../src/models/Menu')
const { ObjectId } = require('mongoose').Types

describe('src/models/Menu - Menu model tests', () => {
  it('Must throw an error when try to insert an invalid menu document', (done) => {
    const insertMenu = new Menu({
      restaurantId: new ObjectId()
    })

    insertMenu.save().catch(() => done())
  })

  it('Insert a new menu on database', async () => {
    const insertMenu = new Menu({
      restaurantId: new ObjectId(),
      name: 'Marmita da Tia',
      description: 'O melhor xis',
      price: 12,
      category: 'Dish'
    })

    const menuCreated = await insertMenu.save()
    const itemFound = await Menu.findOne({ _id: ObjectId(menuCreated._id) })

    expect(itemFound).to.be.an('object')

    await Menu.remove({ _id: ObjectId(menuCreated._id) })
  })
})
