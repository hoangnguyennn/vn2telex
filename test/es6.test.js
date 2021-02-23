import vn2telex from '../dist'

test('Run on es6:', () => {
  expect(vn2telex('Việt Nam')).toBe('Vieejt Nam')
})
