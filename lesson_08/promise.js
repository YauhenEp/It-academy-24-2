const axios = require('axios')
const fse = require("fs-extra");
const {get} = require("axios");

async function add () {
  const sum = await axios.get('https://petstore.swagger.io/v2/store/inventory');
  console.log('1 -- ', sum)
  return sum;
}

// console.log('2 -- ', add());

// new Promise((res, rej) => {
//   let statusCode = 2000
//   if(statusCode === 200) {
//     res('Everything is good')
//   } else {
//     rej('this is Sparta');
//   }
// })
//   .then((data) => {
//     console.log('first -- ', data);
//     return 100  - 23;
//   })
//   .then((data) => {
//     console.log('second -- ', data);
//   })
//   .catch(err => {
//     console.log('ERRRRRRRRRRRRRRRRRRRROOOOOOR ---- ', err)
//   })
//   .finally(() => {
//     console.log('I am always here')
//   })

new Promise(res => {
  res(fse.mkdirp('./dir1/'))
})
  .then(() => {
    return fse.outputFile('./dir1/test1.txt', "Movie ")
  })
  .then(() => {
    return fse.mkdirp('./dir2/')
  })
  .then(() => {
    return fse.move('./dir1/test1.txt', './dir2/test1.txt')
  })
  .then(() => {
    return fse.mkdirp('./dir3/')
  })
  .then(() => {
    return fse.copy('./dir2/test1.txt', './dir3/test1.txt')
  })
  .then(() => {
    fse.remove('./dir3/test1.txt')
    fse.remove('./dir2/test1.txt')
    fse.remove('./dir1')
    fse.remove('./dir2')
    fse.remove('./dir3')
  })

Promise.resolve(123)
.then(data => {
  console.log(data)
})

Promise.reject('Errror')
.catch(err => {
  console.log(err)
});

function getResolvePromise(data) {
  return Promise.resolve(data)
}

Promise.all([Promise.reject('first Errrrrror'), Promise.resolve(23), Promise.resolve(45), getResolvePromise('Hi'), getResolvePromise(100), Promise.reject('second Errrrrror')])
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })

function getPromise(status, timeout) {
  return new Promise((res, rej) => {
    if(status === 'reject') {
      setTimeout(() => {
        rej(status)
      }, timeout)
    }
    setTimeout(() => {
      res(status)
    }, timeout)
  })
}

Promise.race([getPromise('Hello', 1000), getPromise('Hi', 1500), getPromise('reject', 200)])
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })

Promise.any([getPromise('Hello', 1000), getPromise('Hi', 1500), getPromise('reject', 200)])
.then(data => {
  console.log(data)
})
  .catch(err => {
    console.log(err)
  })


Promise.allSettled([getPromise('Hello', 1000), getPromise('Hi', 1500), getPromise('reject', 200)])
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })


