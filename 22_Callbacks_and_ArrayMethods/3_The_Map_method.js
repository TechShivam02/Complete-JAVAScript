// Map :  creates a new array with the results of calling a callback on every element in the array ..

const numbers = [1,2,3,4,5];


numbers.map(function(ele){
        return ele*2;
    });

    console.log(numbers);   //no change in the original  , it is returning a new array




const ans = numbers.map(function(ele){
    return ele*2;
});

console.log(ans);    // in ans , not getting functions but a  map func returning a function ..




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

const titles = movies.map(function(movie){
    return movie.title.toUpperCase();;
})

console.log(titles);
