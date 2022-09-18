
// function rollDie(numSides){
//     return Math.floor(Math.random() * numSides)+1;
// }

// console.log(rollDie(6));





/*

function rollDie(numSides){

    if(numSides == undefined){
        numSides = 6;
    }

    return Math.floor(Math.random() * numSides)+1;
}

// console.log(rollDie());

console.log(rollDie(6));


*/





/*

function rollDie(numSides = 6){
    return Math.floor(Math.random() * numSides)+1;
}

console.log(rollDie());
*/



/*

function greet(msg , person){
    return `${msg} , ${person}`;
}

console.log(greet("Hello!" , "Shivam"));

*/



function greet(msg = "Hi There!! ", person){
    return `${msg} , ${person}`;
}

console.log(greet( undefined , "Shivam" ));



