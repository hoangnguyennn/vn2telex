const vn2telex = require('../dist')

test('Run on es5:', () => {
  expect(vn2telex('Việt Nam')).toBe('Vieejt Nam')
})
