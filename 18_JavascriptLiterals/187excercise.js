const product = {
    
    name : "Gummy Bears",
    instock : true,

    price : 1.99,

    flavours : ["grape", 23244, 5.5 ,  "cherry"]
}

console.log(product);


console.log( typeof (product));

console.log( typeof (product["price"]));  // object k ander  "" m pass kro
console.log( typeof (product.flavours));  
console.log( typeof (product.flavours[2]));  