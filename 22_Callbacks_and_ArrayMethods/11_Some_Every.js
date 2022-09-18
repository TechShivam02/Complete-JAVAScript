// Some 
// Similar to every , but return true if any of the array element pass the test function


                        // Some / Every -->  // Output : true | false 

// if any ele of array pass the test cond  , return true;


const words = ['dog' , 'jello' , 'log' , 'cupcake' , 'bag' , 'wag'];


const ans = words.some( word => {
    return word.length > 5;
});  // true


console.log(ans);

// Do any word starrts with 'Z'

console.log(words.some(word => word[0] === 'Z'));  // false;
console.log(words.some( word => word.includes("cake")) );  // true;




console.log("");



const words1 = ['dog' , 'jello' , 'log' , 'cupcake' , 'bag' , 'wag'];

const ans1 = words1.every( word => {
    return word.length ==3;
});  // false

console.log(ans1);   // every ele has lengtg == 3 ? ,  no ... false



console.log(words1.every(word => word[0] === 'Z'));    // every word start with letter Z  no 
console.log(words1.every( word => word.includes("cake")) );  // False;



const ans2 = words1.every( word => {
    return word.length >1;
});  // true

console.log(ans2);   