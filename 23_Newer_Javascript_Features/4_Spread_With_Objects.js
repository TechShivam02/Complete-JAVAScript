const feline = {legs : 4 , family : "Felidae"};
const canine = {isFurry : true , family : "Canine"};


// const obj = {...feline};
// console.log(obj);


// const obj = {...feline , ...canine};
// console.log(obj);   // legs : 4 , family : canine (the final one) , isfurry : true }



// const obj = {...feline , ...canine , color: "Black"};
// console.log(obj);   // legs : 4 , family : canine (the final one) , isfurry : true , color:"Black" }


// const obj = {...[1,2,3,4,5]};
// console.log(obj);      //  0:1  1:2  2:3  3:4  4:5


// const obj = {..."Hello"};
// console.log(obj);  //  0: 'H', 1: 'e', 2: 'l', 3: 'l', 4: 'o'


const dataForm = {
    
    email : "blueMan@gmail.com",
    password : "tobias123",
    username : "tfunke"
}

console.log(dataForm);

const newObj = {...dataForm , id : 245 , isAdmin : false};   // if i want to copy a object , and give somme additiondetails  in new copy object
console.log(newObj);
