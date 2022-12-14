// Write an arrow function expression called greet.  It should accept a single string argument, representing a person's name.  It should return a greeting string as shown below:

// greet("Hagrid") //"Hey Hagrid!" 
// greet("Luna") //"Hey Luna!"


const greet = (str) => {
    return "Hey " + str + "!";
}

console.log(greet("Hagrid"));
console.log(greet("Luna"));
