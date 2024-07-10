const fse = require('fs-extra');

fse.mkdirp('./dir1/', () => {
  fse.outputFile('./dir1/test1.txt', "Movie ", () => {
    fse.mkdirp('./dir2/', () => {
      fse.move('./dir1/test1.txt', './dir2/test1.txt', () => {
        fse.mkdirp('./dir3/', () => {
          fse.copy('./dir2/test1.txt', './dir3/test1.txt', () => {
            fse.remove('./dir3/test1.txt')
            fse.remove('./dir2/test1.txt')

            fse.remove('./dir1')
            fse.remove('./dir2')
            fse.remove('./dir3')
          });
        })
      })
    })
  })
})









