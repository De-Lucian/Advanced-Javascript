const characters = [
    {
        name:"Lukey skywalker",
        height:"172",
        mass:"77",
        eye_color:"blue",
        gender:"male",
    },
    {
        name:"Darth Vader",
        height:"202",
        mass:"136",
        eye_color:"yellow",
        gender:"male",
    },
    {
        name:"Leia Organa",
        height:"150",
        mass:"49",
        eye_color:"brown",
        gender:"female",
    },
    {
        name:"Anakin Skywalker",
        height:"188",
        mass:"84",
        eye_color:"blue",
        gender:"male",
    },
]

// Array Map
// Get array of all names
const names = characters.map((characters)=> characters.name);
console.log(names);

// Get array of all heights
const heights = characters.map((characters)=>characters.height);
console.log(heights);
// Return Method
const heigths = characters.map(characters => {
    return characters.height;
})
console.log(heigths);
// Get array of objects with name and height properties
 const nameandheight = characters.map(characters => {
    return{
        name:characters.name,
        height:characters.height,
    }
 });
 console.log(nameandheight);

 const minifieldRecords = characters.map((characters)=>({
    name:characters.name,
    height:characters.height,
 }));
 console.log(minifieldRecords);

 // Get array of all first names
 const firstNames = characters.map((characters)=> characters.name.split(" ")[0]);
 console.log(firstNames);

 // return Type
 const firstName = characters.map((characters)=>{
    return characters.name.split(" ")[0];
 });
 console.log(firstName)

 // Array Map is used to transform the array into a new array.