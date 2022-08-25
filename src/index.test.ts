const { generateUnique } = require('../dist/index');

test('return string', () => {
  expect(generateUnique(12, true, true, true, true)).toBeTruthy();
});

test('string length', () => {
  expect(generateUnique(12, true, true, true, true)).toHaveLength(12);
});

test('start with contain', () => {
  expect(generateUnique(12, true, true, true, true, 'user-', null)).toContain(
    'user-'
  );
});

test('end with contain', () => {
  expect(generateUnique(12, true, true, true, true, null, 'user-')).toContain(
    'user-'
  );
});
