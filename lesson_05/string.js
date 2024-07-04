let str = 'hello';
str = 'bye bye'

console.log(str[0])

for(let i = 0; i < str.length; i++) {
  console.log(str[i])
}

const str1 = "bye bye"

console.log(str === str1)

console.log(str1.concat(str, ' hello'));

console.log(str1.indexOf('bye'))
console.log(str1.lastIndexOf('bye'))

console.log(str1.includes(' 1bye'))

console.log(str1.match(/^B/))

console.log(str1.replace(/bye/g, 'hello'))


const sliceString = 'Hello world !'

console.log(sliceString.slice(7, 3))

console.log(sliceString.split(''))

console.log(sliceString.substr(3, 3))