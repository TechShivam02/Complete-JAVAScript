console.log("hi" == "hi");

console.log( ['hi' , 'bye'] == ['hi' , 'bye']);
console.log([2] == [2]);



let nums = [1,2,3];
let numsCopy = nums;

console.log(nums);
console.log(numsCopy);

numsCopy.push(4);

console.log(nums);
console.log(numsCopy);

console.log(nums == numsCopy);

