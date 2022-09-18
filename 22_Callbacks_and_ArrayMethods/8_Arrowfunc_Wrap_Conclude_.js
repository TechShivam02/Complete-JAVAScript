
const movies = [
    
    {
        title : "Amadeus",
        score: 99,
    },

    {
        title : "Stand By Me",
        score: 85,
    },

    {
        title : "Parasite",
        score: 85,
    },

    {
        title : "Alien",
        score: 90,
    },


];


// const data = movies.map(function(movie){            // function expression
//     return ` ${movie.title} ,${movie.score} `
// })

// console.log(data);





// const data = movies.map((movie) => {                    // Arrow func
//     return ` ${movie.title} ,${movie.score} `
// })

// console.log(data);




// const data = movies.map((movie) => (                   // Arrow Implicit
//             ` ${movie.title} ,${movie.score} `   // note while  ()  removing return  // here No ";"  In this line
//      ))


// console.log(data);






const data = movies.map((movie) => ` ${movie.title} ,${movie.score} ` );   // Ktm in One line ...
console.log(data);
