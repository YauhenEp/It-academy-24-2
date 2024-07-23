/**
 * @example add(1, 2)
 * @param numberOne {number}
 * @param numberTwo {number}
 * @returns {number}
 */
function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function minus() {
  return 2 - 1;
}

function getCount() {
  let count = 0;
  return function () {
    return count++;
  };
}

const pers = {
  name: 'sfvg0',
  lastname: 'sdfgfsg',
};

const counter = getCount();
console.log(counter);
console.log(counter());
console.log(counter());
console.log(counter());

const counter1 = getCount();
console.log(counter1());

module.exports = { add, minus };
