
/*

conclude  - merze arrays
includes   - look for a value
indexOf  - just like a string .indexOf
join - create a string from an array
reverse - reverse an array
slice - copies a portion from the array
splice - removes / replces elements
sort - sorts an array

*/




let arr1 = ['a' , 'b' , 'c'];
let arr2 = ["dfdf" , "rgrg" , "gtgtg"];

arr1.concat(arr2);
console.log(arr1);  // 'a' , 'b' , 'c'

let arr3 = arr1.concat(arr2);
console.log(arr3);


console.log(arr3.includes("dfdf"));
console.log(arr3.includes("frfr"));


console.log(arr3.indexOf("rgrg"));
console.log(arr3.indexOf("rgrgfrrgr"));


arr3.reverse();
console.log(arr3);
