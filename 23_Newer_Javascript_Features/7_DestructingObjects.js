/*
const user = {
    email :     "abcdef@gmail.com",
    password : "sdd@123",
    fname : "Harvey",
    lname : "Cold",
    born : 1996,
    died : 2010,
    bio : "Harvey was an american politician ",
    city : "San Francisco",
    state : "California",

};



const {fname , lname , email , password , bio , ...rest} = user;

console.log(fname);
console.log(lname);
console.log(email);
console.log(password);
console.log(bio);

console.log(rest);

*/




const user2 = {
    email :     "defgh@gmail.com",
    password : "445@123",
    fname : "Goege",
    lname : "Mith",
    born : 1992,
    died : 2003,
    
    
    city : "San Francisco",
    state : "California",

};


const {fname , lname , email : gmail , born : birthYear , died : DeathYear  , bio = "Hi i am a Indian" } = user2;

console.log(fname + " " + lname);

// console.log(email);  / Error email is not defined
console.log(gmail);    // now email is trasformed into gmail

// console.log(born);     // born is not defined , now born renamed to birthyear
console.log(birthYear);    // now email is trasformed into gmail


console.log(bio);   // bio defualt value is "Hi i am a Indian"

