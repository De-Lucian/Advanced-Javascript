// Array Filter

const characters = [
    {
        name:"Lukey skywalker",
        height:"172",
        mass:"77",
        eye_color:"blue",
        gender:"male",
    },
    {
        name: "Darth Vader", 
        height: 202,
        mass: 136,
        eye_color:"Yellow",
        gender: 'male',
    },
    {
        name: "Leia Organa",
        height: 150,
        mass: 49,
        eye_color:"brown",
        gender: "female",
    },
    {
        name:"Anakin Skywalker",
        height:"188",
        mass:"84",
        eye_color:"blue",
        gender:"male",
    },
]

// Get charcters with mass greater than 100
const greater100Characters = characters.filter((characters)=> characters.mass > 100)
console.log(greater100Characters);

// Get charcters with mass less than 100
const less100Charaters = characters.filter((characters)=> characters.height < 200)
console.log(less100Charaters);

// Get all
const allCharacters = characters.filter((characters)=> 
characters);
console.log(allCharacters);

// Get Male characters
const maleCharacters = characters.filter((characters)=> characters.gender === 'male' || characters)
console.log(maleCharacters);

//Array funciton is Used to filter the array based on a condition.

