const person = {
    fname : "Viggo",
    lname : "Mortesem",


    fullname : function(){
        return ` ${this.fname} ${this.lname} `
    },

    fullnameArrow : () => {

        console.log(this);
        return ` ${this.fname} ${this.lname} `
    },

    
}


console.log(person.fullname());
console.log(person.fullnameArrow());  // undefined undefined
