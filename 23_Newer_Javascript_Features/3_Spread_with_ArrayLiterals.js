
// spread  : copying to a newer One..


const cat = ['Blue' , 'Scout' , 'Rocket'];

// const allPets  = cat;
// console.log(allPets);

const allPets = [...cat];
console.log(allPets);


                        console.log("");

allPets.push("HiHiHi");


console.log(allPets);
console.log(cat);


                            console.log("");



const newArr = [...allPets , ...cat];
console.log(newArr);


                        console.log("");

const str= "hello";

console.log(...str);
const arr = [...str];

console.log(arr);

