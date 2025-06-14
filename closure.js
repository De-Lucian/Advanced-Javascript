// Closure is the combination of a function and the lexical environment within which that function was declared. 
// mdn web docs example
// lexical Environment
function init(){
    const name = 'Mozilla';
    function displayName(){
        console.log(name);
    }
    displayName();
}
init();
// In this example, the function displayName is a closure that captures the variable name from its lexical environment.
// Closures 
function makefunc(){
    const name = 'Mozilla';
    function displayName(){
        console.log(name);
    }
    return displayName;
}    
const myFunc = makefunc();
myFunc(); // Mozilla
// myfunc() is directly invoked and it returns the function displayName in browser console.

// Mozilla Adder
    function makeAdder(x){
        return function(y){
            return x + y;
        };
    }
    const add5 = adder(5);
    const add10 = adder(10);

    console.log(add5(2)); // 7
    console.log(add10(2)); // 12
    // The function makeAdder returns a new function that adds x to its argument y.

    // With Another Example
    function adder(x){
        function add(b){
            console.log(x+y);
        }
        return add;
    }

    const add50 = adder(5);
    const add100 = adder(10);

    console.log(add50(2)) // 7
    console.log(add100(2)) // 12

    // Practical Closure Example in DOM 

    // <button id="size-12">12</button>
    // <button id="size-14">14</button>
    // <button id="size-16">16</button>


    function makeSizer(size){
        function changeSize(){
            document.body.style.fontSize = size + 'px';
        // document.body.style.fontSize = `${size}px`;
        }
        return changeSize;
    }

    const size12 = makeSizer(12);
    const size14 = makeSizer(14);
    const size16 = makeSizer(16);
    const size70 = makeSizer(70);
// const btn = document.getElementById('myBtn');
// btn.addEventListener('click', size12);
// document.getElementById('size-14').onclick = size14;

// Emulating Private Variables with Closures

const counter = (function(){
    let privateCounter = 0;
    function changeBy(val){
        privateCounter += val;
    }
    return {
        increment(){
            changeBy(1);
        },
        decrement(){
            changeBy(-1);
        },
        value(){
            return privateCounter;
        },
    };
})();

console.log(counter.value()); // 0
counter.increment();
counter.increment();
console.log(counter.value()); // 2

counter.decrement();
console.log(counter.value()); // 1

// closure Scope Chain
// global Scope
const d = 10;
function sum (a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    return a + b + c + d + e;
                };
            };
        };
    };
}
console.log(sum(1)(2)(3)(4)); // 20

// anonymous function
const e = 10;
function sum(a) {
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    return a + b + c + d + e;
                };
            };
        };
    };
}

