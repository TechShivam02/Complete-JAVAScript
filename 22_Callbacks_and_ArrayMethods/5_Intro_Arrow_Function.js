// They helps to Create function Expression.. // used to make the fexpressions smaller


// const add = function(x,y)
// {
//     return x+y;
// }



const add = (x,y) => {
    return x+y;
}

console.log(add(3,4));




const square = (x) => {
       return x*x;
}

console.log(square(5));






const SquarE = num => {    // without parent expressions...
    return num*num;
}

console.log(SquarE(6));





const RollDie  = () =>{
    return Math.floor( Math.random() *6  +1);
}

console.log(RollDie());


