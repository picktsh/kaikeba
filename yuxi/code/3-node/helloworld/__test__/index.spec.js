test('测试hello World', () => {
  const helloKkb = require('../index')
  // console.log('helloKkb', helloKkb);
  expect(helloKkb)
    .toBe('hello kkb')
})
