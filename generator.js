// Iterators 
// for (const val of [1,2,3,4]){
//     console.log(val);
// } Default iterator
// for making generator function * is used and yield is used to yield values
function makeIterator(start = 0, end = Infinity, step = 1){
    let nextStart = start;
    let iterationCount = 0; 
    return {
        next(){
            let result;
            if(iterationCount < end){
                result = {value: nextStart, done:false};
                nextStart = nextStart + step;
                iterationCount++;
                return result;
            }
            return {value:iterationCount, done:true}
        },
    };
}

const it = makeRangeIterator(1,10,2);
let result = it.next();
while(!result.done){
    console.log(result.value);
    result = it.next();
}
console.log("Iterated over sequence of size:", result.value); 

// Generators
function* count(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
// console.log(count()); Gnerator function
// const it = count();
// for (const val of it){
//     console.log(val);
// }

function* makeMyIterator(start,end){
    for (let i = start; i < end; i++){
        yield i;
    }
}
const ich = makeMyIterator(1,10);

for (const val of ich){
    console.log(val);
}

// Generators are iterable
// const btn = doucment.qetElementById("bnt");
// btn.addEvenListener("click", () =>{
// btn.innerText = ich.next().value;
//    });