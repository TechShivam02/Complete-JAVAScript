// const random = () =>{
//     return Math.floor(Math.random() * 6 + 1); 
// }

// console.log(random());


// Instead of using the return keyword   -->  Remove the {}  and use ()  and remove ";"   



const random = () =>(
     Math.floor(Math.random() * 6 + 1)        // no ;  after it 
)
console.log(random());





const add = (x,y) =>(
    x+y        // no ;  after it 
)
console.log(add(5,6));




const ADDsimple = (x,y) =>  x+y;        // just one Line Code ..
console.log(ADDsimple(5,6));





//  REvising the all  .......................................................... 


const isEven = function(num){     // Using Regular expression
    return num % 2 ==0;
}
console.log(isEven(5));



const isEven1 = (num) => {      // Arrow function 
    return num%2 == 0;
}
console.log(isEven1(10));



const isEven2 = num => {     // No parents around Param   
    return num%2 == 0;
}
console.log(isEven2(4));




const isEven3 = num => num%2 == 0;
console.log(isEven3(7));
