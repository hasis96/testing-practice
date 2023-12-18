const caesarCipher = require('../code/caesarCipher');

test('encrypts string by shifting the string with given key', () => {
  expect(caesarCipher('marcus crassus', 5)).toBe('rfwhzx hwfxxzx');
});
