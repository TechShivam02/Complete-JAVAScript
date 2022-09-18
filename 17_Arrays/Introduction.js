let days = ["mon" ,"tues" , "wed"];

console.log(days[0]);


let abcedf = [true , undefined , 13, 323.232 , NaN , false , null , "rrf"];

console.log(abcedf[0]);
console.log(abcedf[1]);
console.log(abcedf[2]);
console.log(abcedf[3]);


console.log(abcedf.length);



console.log(abcedf[100]);





let name = "shivamkumar";

console.log(name[0]);

name[0] = 'S';
console.log(name); // not changed


let arr = ['abc' , 'def' , 'ghi'];
arr[0] = 'zdc';

console.log(arr);
 

arr[10] = "11Item";

console.log(arr);   //  ['zdc', 'def', 'ghi', empty × 7, '11Item']

console.log(arr.length);  // 11 
arr[11] = "12Items"

console.log(arr);
    





