const { describe, it } = require('mocha')
const { expect } = require('chai')
const { db } = require('./../../src/database')

describe('Database tests', () => {
  it('Must have method to connect with a model', () => {
    expect(db).respondsTo('model')
  })
})
