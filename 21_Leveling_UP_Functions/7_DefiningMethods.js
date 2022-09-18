// Every method is a function , but not every function is a method 




console.log("hello".toUpperCase());  // method  // using . //  , every method is a func

function add(x,y){   // function  // but not every func is a method  // represented by function keyword
    return x+y;
}



// Creating OWN Methods  , using functions ..


const myMath  = {

    PI : 3.14159,

    square : function(num){
        return num**2;            // or num*num
    },

    cube : function(num){
        return num**3;       // or num*num*num
    }


};


console.log(myMath.PI);
console.log(myMath.square(5));
console.log(myMath.cube(5));



console.log(`                      `);



const myMathShortcut  = {

        PI : 3.14159,   // bcz a object    dont forgot to insert a comma  "," 

        square(num){
            return num**2;            // or num*num
        },      // ","

        cube(num){
            return num**3;       // or num*num*num
        },  // ","

};

console.log(myMathShortcut.PI);
console.log(myMathShortcut.square(5));
console.log(myMathShortcut.cube(5));

