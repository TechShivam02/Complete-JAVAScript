/*

Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid"

*/




function capitalize(str){
    let ans = "";

    ans += str[0].toUpperCase();

    ans+= str.slice(1);

    return ans;


}

// console.log(capitalize("eggplant"));
// console.log(capitalize("pamplemousse"));
// console.log(capitalize("squid"));






var numDay ={
    
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday",
    7 : "Sunday",
    
};

// console.log(numDay[1]);
// console.log(numDay[7]);
// console.log(numDay[4]);
// console.log(numDay[0]);





function lastElement(array){
    
    let n = array.length;
    return array[n-1];
}

// console.log(lastElement([3,5,7]));    //7
// console.log(lastElement([1])); //1
// console.log(lastElement([])); //null





function sumArray(array){

    let sum = 0;

    for(let ele of array){
        sum += ele;
    }
    return sum;

}

console.log(sumArray([1,2,3]) ) ;   // 6
console.log(sumArray([2,2,2,2])) ;  // 8
console.log(sumArray([50,50,1])) ;  // 101