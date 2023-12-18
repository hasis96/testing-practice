const calculator = require('../code/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('divides 10 by 5 to equal 2', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test('multiply 2 by 3 to equal 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
