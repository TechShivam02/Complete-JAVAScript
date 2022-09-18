const cat = {
    name : "Blue steele",
    color : "grey",
    breed : "scottish fold",

    meow(){
        console.log(` ${this.name}  Says Meowwwww ..... `);
    },

    details(){
        console.log(`cat name : ${name} , color : ${color} , breed : ${breed} `);
    },

    Completedetails(){
        console.log(`cat name : ${this.name} , color : ${this.color} , breed : ${this.breed} `);
    }

};


cat.meow();
    
        // cat.details();  // errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr    

cat.Completedetails();  



console.log(`    `);  // to print a blank line  .....


const meow2 = cat.meow;   // returning a function ..
console.log(meow2);  // printing the function ..
console.log(meow2());   // print the function value ,  see the cat name --> nothing

console.log(this);

