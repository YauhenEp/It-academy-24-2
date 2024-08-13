const {add, timeout} = require('../testFile.js');

describe('add different data types', () => {

  test('add NaN and undefined should return NaN', async () => {
    const result = add(NaN, undefined);
    await timeout(1)
    await expect(result).toBe(NaN);
  })

  test('add NaN and undefined should return NaN', async () => {
    // import { expect } from 'chai';
    const result = add(NaN, undefined);
    await expect(result).toBe(NaN);
  })

  it('should plus correctly more than two numbers', async () => {
    const result = add(-10, -10, 21);
    expect(result).toEqual(1)
  });
});