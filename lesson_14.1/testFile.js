function add(numOne, numTwo, ...rest) {
  let sum = numOne + numTwo;
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i]
  }
  return sum;
}

async function timeout(sec) {
  return new Promise(res => {
    setTimeout(() => {
      res('Res')
    }, sec * 1000)
  })
}

module.exports= {add, timeout}