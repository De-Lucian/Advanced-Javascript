// Currying Concept
function add(y){
    return function(x){
            return function(z){
                return x + y + z;
            };
        };
    }   

console.log(add(2)(3)(4)); // 9
console.log(add(2)(3)(4) === 9); // true
console.log(add(2)(3)(4) === 10); // false

function sendAutomatedEmail(email){
    return function(subject){
        return function(message){
            console.log(`Sending email to ${email} with subject "${subject}" and message "${message}"`);
        };
    };
}

let step1 = sendAutomatedEmail("User@gmail.com");
let step2 = step1("Welcome to our Service");
step2('We are glad to have you here!'); // Sending email to

// Es6 
// Arrow function
const add = (x) => (y) => (z) => x + y + z;
console.log(add(2)(3)(4)); // 9
console.log(add(2)(3)(4) === 9); // true
console.log(add(2)(3)(4) === 10); // false
