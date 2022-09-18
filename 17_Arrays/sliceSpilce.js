/*

conclude  - merze arrays
includes   - look for a value
indexOf  - just like a string .indexOf
join - create a string from an array
reverse - reverse an array

slice - copies a portion from the array / original array me no change
splice - removes / replaces elements
sort - sorts an array

*/




/// Slice    : copies a portion of array // originl array wont be change 



let arr = ['red' , 'efef' , 'grrg' , 'wwxg' , 'zefef'];

console.log(arr.slice(2));
console.log(arr.slice(2));

console.log(arr);

console.log(arr.slice(2,4));  //  firsindex included , lastwala not included    (2) ['grrg', 'wwxg']


console.log(arr.slice(-3));  // last 3 values
console.log(arr.slice(-2));  // last 2 vlaue
console.log(arr.slice(-4));


console.log(arr.slice(-4 , -2));





// splice( start , deletCount );  // to delete   ele from the originla aray
// splice( start , deletCount , itemsTobeAddedAt that place);  //  to replace ele with new ele's     


let array = ["red" , "orange" , "yellow" , "pink" , "violet" , "grey"];

console.log(array.splice(3 , 2 ));  // start from 3   and delete the 2 items
console.log(array); 



array.splice(2 , 1 , "Hello" , "Hemlo");   // start from 2index , delet 1 ele , and inset folloe
console.log(array);







// Sort  the array 

const day = ["abz" , "def" , "thh" , "abr" , "tgth" , "bef"];  // sort on value   abz abr    ab same then r wala come first 
day.sort();

console.log(day);


let numm = [4,5,8,6,344,5,0,-434];
numm.sort();
console.log(numm);


