const functions = require('./functions');

test('adds 1 + 2 to equal 3', () => {
  expect(functions.sum(1, 2)).toBe(3);
});

test('subtract 1 - 2 to equal -1', () => {
  expect(functions.subtract(1, 2)).toBe(-1);
});

test('multiply 3 * 4 * 5 to equal 60', () => {
  expect(functions.multiply(3, 4, 5)).toBe(60);
});

test('stringsEqual "Test String" === "Test String" to equal true', () => {
  expect(functions.stringsEqual("Test String", "Test String")).toBe(true);
});
