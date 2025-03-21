const path = require('path');

describe('Our first test', () => {
  test('check boolean', async () => {
    const filePath = `..\\..\\data\\Company.xml.zip`
    const pathTaFile = path.join(__dirname, filePath);
    console.log(pathTaFile)
    await expect(true).toEqual(true)
  })

  test('check boolean', async () => {
    const filePath = `../../data/Company.xml.zip`
    const pathTaFile = path.join(__dirname, filePath);
    console.log(pathTaFile)
    await expect(false).toEqual(false)
  })
});