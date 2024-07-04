// let month = 1;
// while (month < 13) {
//   console.log(`Month number ${month}`);
//   month++;
// }

// let abc = 0;
// console.log(abc);
// abc += 1;
// console.log(abc);
// abc = abc + 1;

// let dayOfWeek = 0;
// do {
//   dayOfWeek++;
//   console.log(`Month number ${dayOfWeek}`);
// } while (dayOfWeek < 0)

const text = 'some text';

for(let i = 0; i < text.length; i += 2) {
  console.log(`letter with index ${i} is ${text[i]}`)
}

for(let letter of text) {
  let index = text.indexOf(letter) % 2;
  if(index !== 0) {
    continue;
  }
  console.log(`letter is ${letter}`)
}


let arr = [10, 20, 30, 40, 50];

for(let number of arr) {
  console.log(number += 1)
}

let person = {
  name: 'Yauhen',
  lastname: 'B',
  age: 35,
}

for(let key in person) {
  console.log('Key is -- ', key)
  console.log('Value is --- ', person[key])
}

