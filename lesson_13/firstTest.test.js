const path = require('path');

describe('Our first test', () => {
  test('check boolean', async () => {
    const filePath = `..\\..\\data\\Company.xml.zip`;
    const fileName = filePath.split('\\')[filePath.split('\\').length - 1];
    const pathTaFile = path.join(process.cwd(), 'test', 'data', fileName);
    const pathTaFile1 = path.resolve(fileName);
    console.log('1 - ', pathTaFile)
    console.log('2 - ', pathTaFile1)
    console.log('cwd - ', process.cwd());
    await expect(true).toEqual(true)
  })

  test('check boolean', async () => {
    const filePath = `../../data/Company.xml.zip`
    const pathTaFile = path.join(process.cwd(), filePath);
    console.log(pathTaFile)
    await expect(false).toEqual(false)
  })
});