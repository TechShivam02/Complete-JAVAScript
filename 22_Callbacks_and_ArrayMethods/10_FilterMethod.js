// Creates a new array with all elements that pass the test implemented by the provided function ..


const nums = [9,8,7,6,5,4,3,2,1];

const odd = nums.filter ( n => {
    return n>4;
});



// Filter return true or false , if return true then the item is added in filtered array ...


// filter pass a callback on the array , and return the neccessary output ,
// Where as map , calls on each ele of the array ..

console.log(odd);   
console.log(nums);




// Filter return true or false , if return true then the item is added in filtered array ...





// Eg -2 ...................................................
// If i want to filter the movies whose score is greater then 80 


const movies = [
    
    {
        title : "Amadeus",
        score: 99,
    },

    {
        title : "Stand By Me",
        score: 80,
    },

    {
        title : "Parasite",
        score: 91,
    },

    {
        title : "Alien",
        score: 79,
    }
    ,

    {
        title : "Abcdef",
        score: 95,
    },

];



const goodMovies = movies.filter( (movie) => {
    return  movie.score > 80;
})

console.log(goodMovies);


const badMovies = movies.filter( (movie) => {
    return  movie.score < 80;
})

console.log(badMovies);


// Filter return true or false , if return true then the item is added in filtered array ...

// where as map , call the function on each ele , what action to perform ..


