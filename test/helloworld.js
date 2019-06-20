const { expect } = require('chai')

function add(a, b) {
  return a + b
}

//Test suite: Group of test cases
describe('Arithmetic', () => {
  it('Addition is Valid', () => {
    expect(add(10, 20)).to.be.equal(30)
  })  //test case 1
  
  it('Returns 0 with no args', () => {
    expect(add()).to.be.equal(0)
  })  //test case 2
})