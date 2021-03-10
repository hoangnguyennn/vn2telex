import vn2telex from '../dist'

test('Run with typescript:', () => {
  expect(vn2telex('Việt Nam')).toBe('Vieejt Nam')
})
