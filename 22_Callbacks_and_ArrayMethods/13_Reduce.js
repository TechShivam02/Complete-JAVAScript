/*

// Reduce   : exec a reduce function on each ele of the array , and resulting in a single value;
// Its Main goal is to take some array and reduce it down to a single value  

const arr = [3,5,7,9,11];

const ans = arr.reduce( (accumuLator,currentVaue) => {
    return accumuLator+currentVaue;
});


// similar to like   for(int i=0 ;i<n;i++){
    sum+=arr[i];
}




// callback     accumulator   currentVal     returnVal

// firstcall       3            5              8
// secondcall      8            7              15
// thirdcall       15           9              24
// fourthcall      24          11              35

// final Ans = 35 


cconsole.log(ans);


*/


const arr = [9.99 , 4.66 , 10.6 , 8.4 , 2.52];

const ans = arr.reduce( (total,price) => {
    return total+price
});




console.log(ans);
console.log("Original : " + arr);



// finding minimum using reduce ....

const minans = arr.reduce( (min,curr) => {
 
        if(curr < min){
            min = curr;
        }

        return min;

});

console.log("Min : "+ minans);




// finding Maximum using reduce ....

const maxans = arr.reduce( (max,curr) => {
 
    if(curr > max){
        max = curr;
    }

    return max;

});

console.log("Max : "+ maxans);

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


const anss = movies.reduce( (bestMovie , currMovie)  => {

        if(currMovie >  bestMovie.score){
            return currMovie;
        }

        return bestMovie;
         
});

console.log(anss);