let rad = 8;

if(rad > 0){
    const pi = 3.1414;

    let msg = "HIHI";
}

console.log("Rad : "+ rad);
// console.log(pi);   // Error      
// console.log(msg);   // Error      

  


/*
// Scope  :  Let Vs  Var
    // let : block scope  
    // var  : function scope 


for(let i=0 ; i<5 ; i++){
    
    let msg = "shivam";
    console.log(msg);


    
}  // i scope only line 22-30    , bcz using let 


console.log(i); // error
// console.log(msg);  // error , if msg declared inside the for loop with let keyword..
*/



for(var i=0 ; i<5 ; i++){

    var msg1 = "shivamBansal";
    
}  


console.log(i);
console.log(msg1);



/*
let bird = "duck duck";

function birdwatch(){
    
    let bird = "golden duck";

}

console.log("Bird : " + bird);  // duck duck
birdwatch();
console.log("Bird : " + bird);  /// duck duck   bcz not assigned a new variable  , onlyby if written bird = "newvalue"

*/



/*
let bird = "duck duck";

function birdwatch(){
    
    let bird = "golden duck";
    console.log(bird);  // golden duck

}

birdwatch();
console.log(bird);  // duck duck   // same  not assigned a new value  just intialized with new value
*/




/*
let bird = "duck duck";

function birdwatch(){
    
    var bird = "golden duck";

}

console.log("Bird : " + bird);  // duck duck
birdwatch();
console.log("Bird : " + bird);  /// duck duck

*/


/*
var bird = "duck duck";

function birdwatch(){
    
    var bird = "golden duck";

}

console.log("Bird : " + bird);  // duck duck
birdwatch();
console.log("Bird : " + bird);  /// duck duck


*/

/*
let bird = "duck duck";

function birdwatch(){
    
     bird = "golden duck";

}

console.log("Bird : " + bird);  // duck duck
birdwatch();
console.log("Bird : " + bird);  // golden duck
*/




/*
var bird = "duck duck";

function birdwatch(){
    
     bird = "golden duck";

}

console.log("Bird : " + bird);  // duck dukc
birdwatch();
console.log("Bird : " + bird);  // golden duck
*/



/*


let bird = "duck duck";
let birds;

function birdwatch(){
    
     birds = "duck1 duck2 duck3 ";

}

console.log("Bird : " + bird);  // duck dukc
console.log("Bird : " + birds);  // undefined

birdwatch();

console.log("Bird : " + bird);  // duck dukc
console.log("Bird : " + birds);  /// duck1 duck2 duck3 



*/


/*

let bird = "duck duck";
let birds;

function birdwatch(){
    
     let birds = "duck1 duck2 duck3 ";

}

console.log("Bird : " + bird);  // duck dukc
console.log("Bird : " + birds);  // undefined

birdwatch();

console.log("Bird : " + bird);  // duck dukc
console.log("Bird : " + birds);  // undefined

*/


let bird = "duck duck";

var birds;

function birdwatch(){
    
     var birds = "duck1 duck2 duck3 ";

}

console.log("Bird : " + bird);  // duck dukc
console.log("Bird : " + birds);  // undefined

birdwatch();

console.log("Bird : " + bird);  // duck dukc
console.log("Bird : " + birds);  // undefined
