let example;
class Counter {
    constructor() {
        // console.log(!example)
        if(!example) {
            example = this;
            example.count = 0;
        }
        return example;
    }

    getCounter() {
        return example.count;
    }

    increaseCounter() {
        return example.count++;
    }
}

// let count1 = new Counter();
// let count2 = new Counter();
// let count3 = new Counter();
// console.log(count1)
// count1.increaseCounter();
// count1.increaseCounter();
// count1.increaseCounter();
// count2.increaseCounter();
// count2.increaseCounter();
// count3.increaseCounter();
// count3.increaseCounter();
// count3.increaseCounter();
// count3.increaseCounter();
// console.log(count1)
// console.log(count1)
let count4 = new Counter();
// console.log(count1.getCounter());
// console.log(count2.getCounter());
// console.log(count3.getCounter());

// count3.increaseCounter();

// console.log(count3.getCounter());

class NewCounter {
    constructor() {
        if(typeof NewCounter.instance === 'object') {
            return NewCounter.instance;
        }
        this.count = 0;
        NewCounter.instance = this;
        return this;
    }
    getCounter() {
        return this.count;
    }

    increaseCounter() {
        return this.count++;
    }

    setNew(name, value) {
        return this.name = value;
    }
}

let newCount1 = new NewCounter();


//
newCount1.increaseCounter();
newCount1.increaseCounter();

let newCount2 = new NewCounter();
newCount2.increaseCounter();
newCount2.increaseCounter();
console.log(newCount1.getCounter());
console.log(newCount2.getCounter());


let newCount3 = new NewCounter();
newCount3.increaseCounter();
newCount3.increaseCounter();

console.log(newCount1.getCounter());
console.log(newCount2.getCounter());
console.log(newCount3.getCounter());

// console.log(newCount1.getCounter());
// console.log(newCount2.getCounter());
// console.log(newCount3.getCounter());
//
// newCount1.setNew('car', 'honda')
// newCount1.setNew('car1', 'toyota')
//
// console.log(newCount1);
// console.log(newCount2);
// console.log(newCount3);
