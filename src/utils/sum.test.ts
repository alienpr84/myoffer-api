import sum from './sum';

it('sum must be 5', () => {
  const result = sum([3, 2]);
  expect(result).toBe(5);
});
