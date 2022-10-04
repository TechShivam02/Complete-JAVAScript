/*
async function hello(){
}

console.log(hello());  // return a promise

*/


// async function hello(){
//     return "hemlo world";
// }

// console.log(hello());
 


// if the promise return a value , that promise is resolved automatically


/*
async function hello(){
    return "hemlo world";
}


hello()
 .then(()=>{
    console.log("Promise REsolved");
 })

*/



// async function hello(){
//     return "hemlo world";
// }


// hello()
//  .then((data)=>{
//     console.log("Promise  DATA -> " + data); 
//  })





/*

// this code will never run , it  is immediatly Rejected.

async function hello(){

    throw "Incorrect World";
    return "hemlo world";
}


hello()
 .then((data)=>{
    console.log("Promise  DATA -> " + data); 
 })
 
 .catch((data)=>{
    console.log("Promise Rejected with : " + data);
 })

 */



 /*
 const login = async (username , paswrd) => {

        if(!username || !paswrd){
            throw "Missing Credentials";
        }

        if(paswrd === "12345"){
            return "Welcome";
        }

        throw "Invalid Password";
 }


 login("abcdef")  // passwrd not given , rejected  returned  , handled by catch

 .then((data)=>{
    console.log("Looged IN");
    console.log(data);
 })

 .catch((data)=>{
    console.log(data);
 })

 */




 /*

 const login = async (username , paswrd) => {

    if(!username || !paswrd){
        throw "Missing Credentials";
    }

    if(paswrd === "12345"){
        return "Welcome";
    }

    throw "Invalid Password";
}


login("abcdef" , "12345")  // new promise , resolved with value ,  handled by then , in then (data = returned from resolved )

.then((data)=>{
console.log("Logged IN");
console.log(data);
})

.catch((data)=>{
console.log(data);
})

*/


const login = async (username , paswrd) => {

    if(!username || !paswrd){
        throw "Missing Credentials";
    }

    if(paswrd === "12345"){
        return "Welcome";
    }

    throw "Invalid Password";
}


login("abcdef" , "13ddr")  // new promise , rejected , catch , invalid password

.then((data)=>{
console.log("Logged IN");
console.log(data);
})

.catch((data)=>{
console.log(data);
})