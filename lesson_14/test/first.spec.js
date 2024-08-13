import {expect} from 'chai';
import {add, timeout} from '../testFile.js';

describe('add function functionalities', () => {

  before(async () => {
    console.log(`Run before all tests one time`)
  })

  after(async () => {
    console.log(`Run after all tests one time`)
  })

  beforeEach(async () => {
    console.log(`Run before each tests`)
  })

  afterEach(async () => {
    console.log(`Run after each test`)
  })

  describe('positive tests', () => {

  });

  it('should plus correctly two positive numbers', async () => {
    const result = add(10, 10);
    await timeout(3);
    expect(result).to.equal(20)
  })

  it('should plus correctly two negative numbers', async () => {
    const result = add(-10, -10);
    expect(result).to.equal(-20)
  })

  it('should plus correctly more than two numbers', async () => {
    const result = add(-10, -10, 21);
    expect(result).to.equal(1)
  });

  [
    [1, 2, 3], [2, 3, 5], [7, 8, 15]
  ].forEach((dataArray) => {
    it(`should plus correctly two positive numbers ${dataArray[0]} and ${dataArray[1]}`, async () => {
      expect(add(dataArray[0], dataArray[1])).to.equal(dataArray[2]);
    })
  })
});