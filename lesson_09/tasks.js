// Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после
// которой промис должен зарезолвится (то есть выполнится успешно).

// new Promise((res) => {
//   setTimeout(() => res('Success'), 3000)
// })
//   .then((data) => {
//     console.log(data)
//   })

// async function getPromise() {
//   return new Promise((res) => {
//    setTimeout(() => res('Success'), 3000)
//  })
// }
//
// getPromise().then(data => console.log(data))
//Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после которой промис
//должен зареджектится (то есть выполнится с ошибкой).
// new Promise((res, rej) => {
//   setTimeout(() => rej('Error'), 3000)
// })
//   .catch((err) => {
//     console.log(err)
//   })

// async function getErrorPromise() {
//   return new Promise((res, rej) => {
//     setTimeout(() => rej('Error'), 3000)
//   })
// }
//
// getErrorPromise().catch(data => console.log(data))
// Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так, чтобы
// сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
// Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6
// до 10.

async function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min - 1) + min);
}

// new Promise((res, rej) => {
//   const randomNumber = getRandomNumber(1 , 10);
//   setTimeout(() => {
//     if(randomNumber > 0 && randomNumber < 6) {
//       res(`Success ${randomNumber}`)
//     } else {
//       rej(`Error ${randomNumber}`)
//     }
//   }, randomNumber * 100)
// })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })


// Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. Сделайте так,
// чтобы каждый последующий промис через 3 секунды возводил в квадрат результат предыдущего
// // промиса. После окончания манипуляций выведите число консоль лог на экран.
new Promise((res, rej) => {
  const randomNumber = getRandomNumber(1, 10);
  res(randomNumber);
})
  .then(number => {
    return getPowNumber(number);
  })
  .then(number => {
    return getPowNumber(number);
  })
  .then(number => {
    console.log(number)
  })
  .catch((err) => {
    console.log(err)
  })


// Он выводит в консольлог 10 раз "R2D10", почему?
// function makeDroids() {
//
//   let droids = [];
//
//   for (let i = 0; i < 10; i++) {
//     let droid = function() {
//       console.log("R2D" + i);
//     };
//     droids.push(droid);
//   }
//
//   return droids;
// }
//
// for (let d of makeDroids()) {
//   d();
// }

// Как его переписать, чтобы в консольлог выводилось:
//
//   "R2D0"
// "R2D1"
// "R2D2"
// "R2D3"
// "R2D4"
// "R2D5"
// "R2D6"
// "R2D7"
// "R2D8"
// "R2D9"

async function getNumberAfterTimeout(min, max) {
  const number = await getRandomNumber(min, max);
  const powNumber = await getPowNumber(number);
  const powNumber2 = await getPowNumber(powNumber);
  console.log(powNumber2)
  return powNumber2;
}

async function getPowNumber(number, powNumber = 2, timeout = 3000) {
  return new Promise(res => {
    setTimeout(() => {
      res(Math.pow(number, powNumber));
    }, timeout)
  })
}

getNumberAfterTimeout(1, 10)