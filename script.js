// IIFE In javascript
// Immediately Invoked function Expression

// IIFE with parameters
(function add(a, b) {
    console.log(a + b);
})(2, 3);

(function say() {
    console.log("Hey");
})();

// Es6 IIFE
(() => {
    console.log("Hey");
})();
// IIFE with parameters
(() => {
    console.log("Hey");
})(2, 3);

const value = (() => 100)();
console.log(value);

//  async function
async function add(a, b) {
    return a + b;
}

async function multiply(a, b) {
    return a * b;
}

async function square(a) {
    return a * a;
}

async function addTwoAndSquare(a, b) {
    return square(add(a, b));
}

async function composeTwoFunctions(fn1, fn2) {
    return function (a, b) {
        return fn2(fn1(a, b));
    }
}

const task = composeTwoFunctions(multiply, square);
// console.log(task(2,3));

// let data
// async function getdata(){
//     data = await fetch()
// }
// console.log(data);
// getdata();


const data = (async () => await fetch())();

// private and public varaiables
const atm = function (initialBalance) {
    let balance = initialBalance;

    function withdraw(amt) {
        if (amt > balance) {
            console.log("Insufficient balance");
        } else {
            balance -= amt;
            console.log(`Withdrew ${amt}. New balance is ${balance}`);
        }
    }

    return { withdraw };
};

const myAtm = atm(1000);
myAtm.withdraw(200);  // Output: Withdrew 200. New balance is 80 0
