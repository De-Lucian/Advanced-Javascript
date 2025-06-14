// comopsition is a process of combining two or more functions to produce a new function.
// In functional programming, function composition is a way to combine simple functions to build more complex ones.

function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}
//In JavaScript, variables declared as function parameters or inside functions are scoped to that function only (called function scope).
function square(a){
    return a*a;
}

// function addtwoandsquare(a,b){
//     return square(add(a,b));
// }
// console.log(addTwoandsquare(2,3));

function composeTwoFunctions(fn1, fn2){
    return function(a,b){
        return fn2(fn1(a,b));
    }
}
// const task = composeTwoFunctions(multiply, square);
// const task = composeTwoFunctions(add, square);
// console.log(task(2,3));

// Es6 Arrow Function
const c2f = (fn1, f2)  => (a,b) => f2(fn1(a,b));

// Multiple function composition

// function multiply(args){
// return args[0] * args[1];}


function compose(...fns){
    return function(...args){
       return fns.reduceRight((a, b) => b(a), args);
    }
}
// const composeAll = (...fns)=> (...args) => fns.reduceRight((a,b) => b(a), args);