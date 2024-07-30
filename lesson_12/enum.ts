enum Color {
  red = 'red',
  blue = 'blue',
  black = 'black'
}

console.log(Color.black);

function getColor(color: Color): string {
  return Color.red
}

getColor(Color.blue);


function printText(text: string): void {
  console.log(text);
}

function addNumb(numOne: number, numTwo: number, ...num: number[]): number{
  return num.reduce((acc, next) => acc + next, numOne + numTwo)
}

console.log(addNumb(12, 12,  14));


function getValue<T,M>(value: T, valueOne: M): T | M {
  return value || valueOne;
}

console.log(getValue(10, 12))
console.log(getValue('', 12))