// Promisification 
// This function takes a function that accepts a callback and returns a promise
// Old Method , uses before ES6

// Without Promises
function loadScript(src, callback){
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
}

// Usage
loadScript('https://example.com/script.js', (error, script) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Script loaded: ${script.src}`);
    }
});

// With Promises

function loadScriptPromise(src){
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.head.append(script);
    });
}
 