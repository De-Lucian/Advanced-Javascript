// syncorous JavaScript code
// It is a simple example of synchronous execution in JavaScript
let a = 10;
let b = 20;
let result = a+b;

// Asynchronous JavaScript code
// Fetching provide a way to make HTTP requests in JavaScript
let resultFromServer = fetch(
    "https://jsonplaceholder.typicode.com/posts"
);
// Awaiting for the result
async function getData(){
    let resultFromServer = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(await resultFromServer.json());
}
getData();
// The above code is an example of asynchronous JavaScript code
console.log(result);
// The above code is an example of synchronous JavaScript code
// Alternative of  async/await
fetch(
    "https://jsonplaceholder.typicode.com/posts"
)
    .then((response) => response.json())
    .then((data) =>  { console.log(data)}) // callback function
    // callback function
    .catch((error) => console.error("Error:", error)); // error handling
// Await funtion is used to wait for the result of a promise in async function also used to handle the resut of a promise. Fetch is a built-in function in JavaScript that is used to make HTTP requests. It returns a promise that resolves to the response of the request. The response can be converted to JSON using the json() method. The async/await syntax is used to handle asynchronous code in a more readable way. The await keyword is used to wait for the result of a promise before continuing with the execution of the code. The async keyword is used to define an asynchronous function.
// This type of async function with try...catch is commonly used in all web apps, mobile apps, and backend systems whenever you make HTTP requests.

// It's a must for:

// ✅ Fetching from APIs

// ✅ Sending data to servers

// ✅ Handling errors properly

// ✅ Keeping your app running even when something fails