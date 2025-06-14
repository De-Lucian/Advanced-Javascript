// Some Method Gives Boolean Value (true or false)
// Reduce Method is used to reduce the array into a single value.
// Every Method is used to check if all the elements in the array satisfy the condition.
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

// Array Some Method
// Is there at least one male character?
const oneMaleCharcter = characters.some((characters) => characters.gender === 'male');
console.log(oneMaleCharcter);

// Is there at least one characters with blue eyes?
const oneBlueEyes = characters.some((characters) => characters.eye_color === 'blue');
console.log(oneBlueEyes);

// Is there at least one characters with taller than 210?
const oneTallerThan210 = characters.some((characters)=> characters.height > 210);
console.log(oneTallerThan210);

// Is there at least one characters with mass less than 50?
const OneMasslessThan50 = characters.some((characters)=> characters.mass < 50);
console.log("One Mass Less than 50:", OneMasslessThan50);

// With Return

const onemasslessthan50 = characters.some((characters)=>{
    return characters.mass < 50;
})
console.log(onemasslessthan50);

// Array Sort Method is used to sort the array based on a condition.

// Sort by Mass
const byMass = characters.sort((a,b) => a.mass - b.mass);
// const byMass = characters.sort((a,b)=> b.mass - a.mass); 
// Sort use to give descending order and ascending order 
console.log(byMass);

// Sort by height
const byheight = characters.sort((a,b)=> a.height - b.height);
console.log(byheight);

// Sort by name
// String Comparison
const byName = characters.sort((a,b)=> {
    if (a.name < b.name) return -1;
    return 1;
});
console.log(byName);
// characters.sort((a, b) => a.name.localeCompare(b.name));
// console.log(characters);

// Sort by gender
const byGender = characters.sort((a,b)=> {
    if (a.gender === 'female') return -1; // Put a before b
    return 1; // Put b before a.
});
console.log(byGender);

// Reduce Method in Array
// Get total mass of all charcters
const totalMass = characters.reduce((acc, cur) => {
    return acc + cur.mass;
},  0);
console.log(totalMass);

// Get total height of all characters
const totalHeight = characters.reduce((acc, cur)=> acc + cur.height, 0);
console.log(totalHeight); 

// Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if(acc[color]){
        acc[color]++;
    }else{
        acc[color] = 1;
    }
    return acc;
},{});
console.log(charactersByEyeColor);

// Get total number of characters in all the character names
const  totalnumberbyname = characters.reduce((acc, cur) => acc + cur.name.length, 0);
console.log(totalnumberbyname);

// With Return

const totalNameCharacters = characters.reduce((acc, cur)=>{
    return acc + cur.name.length;
},{});
console.log(totalNameCharacters);

// Every Method in Array
// Does every character have blue eyes?
const allblueEyes = characters.every((characters)=> characters.eye_color === 'blue');
console.log(allblueEyes);

// Does every character have mass more than 40?
const allMassMoreThan40 = characters.every((characters)=> characters.mass < 40);
console.log(allMassMoreThan40);

// Is every character shorter than 200? 
const allShorterThan200 = characters.every((characters)=> characters.height < 200);
console.log(allShorterThan200);

// Is every character male?
const allMale = characters.every((characters)=> characters.gender === 'male');
console.log(allMale);

// With Return

const allmale = characters.every((characters) => {
    return characters.gender === 'male';
});
console.log(allmale);