const product = {
    
    name : "Gummy Bears",   // must be comma  , not ;     also  :  between them not = 
    instock : true,

    price : 1.99,

    flavours : ["grape", "apple", "cherry"]
}


console.log(product);

console.log(product[name]);  // error   Ans : Undefined

        console.log(product["name"]); // Gummy ....   1st methid


console.log(product["rgrgrrgg"]);  // undefined


        console.log(product.name);   // 2nd method  






                        // Valid Keys : Every Keys are converted  to Strings 
const years = {

        2000 : "good",
        2001 : "nice",

        2020 : "bad"
}

// Valid Keys : Every Keys are converted  to Strings 


console.log(years);
console.log(typeof years + "   <------dffdffffffffffffffffff");



// console.log(years.2000.);  // error

console.log(years[2020]);  // error   also work
console.log(years["2000"]);  // error




const vese = {
        
    true : "efrgg",
    false : " rgggrgrgr",

    null : "egrgrg",

    undefined : "rgrg",
}                                   // Valid Keys : Every Keys are converted  to Strings 


console.log(vese);
console.log(vese.true);

console.log(vese.undefined);
console.log(vese.null);

console.log(vese[true]);
console.log(vese["true"]);

console.log(vese["undefined"]);












const BlaBla = {
    
    name : "Gummy Bears", 
    instock : true,

    price : 1.99,

    flavours : ["grape", "apple", "cherry"]
}

console.log(BlaBla);
console.log(BlaBla[name]);  // undefined

console.log(BlaBla.name);  // undefined


console.log(BlaBla["name"]);  // undefined

console.log(BlaBla["na" + "me"]);




const birth = 2022;

console.log(birth);
console.log(BlaBla.birth);
console.log(BlaBla[birth]);







