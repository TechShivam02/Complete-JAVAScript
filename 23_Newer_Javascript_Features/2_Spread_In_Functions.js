/*

    Spread syntax (...) allows an iterable, such as an array or string, 
    to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
    In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.


*/



console.log(Math.max(9,3,65,7,54,24,6,67,565,3343,2424,5,78,9));
console.log(Math.min(9,3,65,7,54,24,6,67,565,3343,2424,5,78,9));



const nums = [9,3,65,7,54,24,6,67,565,3343,2424,5,78,9];

console.log(Math.max(nums));
console.log(Math.min(nums));

console.log(Math.max(...nums));  // using the spread operator
console.log(Math.min(...nums));


console.log("");

console.log(nums);
console.log(...nums);   // spread the each ele of the array


console.log("");
console.log("shivam");
console.log(..."shivam");
