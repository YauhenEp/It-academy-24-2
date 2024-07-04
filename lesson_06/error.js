let a , b, c, d;
try {
  console.log(a);
  let a = 10;
} catch (err) {
  console.log(err)
}


console.log('code');

try {
  const a = 10 / 0;
  // if(a === Infinity) {
  //   throw new Error('You cant divide buy 0!')
  // }
} catch (error) {
  console.log(error)
} finally {
  console.log('I am here everytime')
}

console.log('code!!!!!!!');