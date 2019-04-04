const { describe, it } = require('mocha')
const { expect } = require('chai')

describe('First test', () => {
  it('1 should be equal to 1', () => {
    expect(1).to.be.equal(1)
  })
})
