const reverseString = require('../code/reverseString');

test('reverse string', () => {
  expect(reverseString('helloWorld')).toBe('dlroWolleh');
});
