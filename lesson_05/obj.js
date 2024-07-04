let person = {
  name: 'Yauhen'
}

let person1 = {
  name: 'Yauhen'
}

console.log(person === person1)
person1.lastname = 'B'
console.log('person --- ', person)
console.log('person1 --- ', person1)

person1 = person;

console.log(person === person1)

console.log('person --- ', person)
console.log('person --- ', person1)
person1.lastname = 'B'
console.log('person --- ', person)
console.log('person --- ', person1)


person['family status'] = 'married'
console.log('person --- ', person1)


for(let key in person1) {
  console.log(key)
  console.log(person1[key])
}

