const validateValue = require('./validateValue');
// eslint-disable-next-line
test('Валидация значения', () => {
  // eslint-disable-next-line
  expect(validateValue(50)).toBe(true);
});