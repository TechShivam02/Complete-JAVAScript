// ForEach : accept a callback function   calls the function once per element in the array

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];



/*

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    function print(ele){
        console.log(ele);
    }


num.forEach(print);   // output  :  print the each ele of the array {calls the function per ele on the array}

*/


num.forEach(    function(ele){  

                    if(ele % 2 == 0){
                        console.log(ele);
                    }
          }
            
);


console.log("");

for(let ele of num){

    console.log(ele);
}


console.log("");
console.log("");




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


movies.forEach(function(movie){ 
    console.log(` Title : ${movie.title}  , Score : ${movie.score} `);
});

