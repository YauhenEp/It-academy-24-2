let arr = [1, 10, 20, 6, 21, 63, 89, 2];

let arrAfterSorting = [...arr];

console.log(arr.sort((a, b) => a - b))

console.log(arr)

arrAfterSorting = arr.sort((a, b) => a - b)

console.log(arr === arrAfterSorting);

console.log(arr.push(1000));
console.log(arr)

console.log(arr.unshift(1000));
console.log(arr)

console.log(arr.pop());
console.log(arr)


console.log(arr.shift());
console.log(arr)