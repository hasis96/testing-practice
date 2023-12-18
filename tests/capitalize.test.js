const capitalize = require('../code/capitalize');

test('capitalizes first letter of alphabet', () => {
  expect(capitalize('alphabet')).toBe('Alphabet');
});
