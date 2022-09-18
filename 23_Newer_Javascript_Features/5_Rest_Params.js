// Rest Params :  Collect all remaining arguments into an actula array



/*
function sum(){
    console.log(arguments);
}


sum();
sum(1,2,3,4);
*/



/*

function sum(nums){
    console.log(nums);
}


sum();  // undefined
sum(1,2,3,4);  // 1


*/

 

/*
function sum(...nums){
    console.log(nums);
}


sum(); // []
sum(1,2,3,4);  // [1,2,3,4];
*/



/*

function sum(...nums){
 
    const ans = nums.reduce( (total,curr) => {
        return total+curr;
    })

    return ans;

}


   
console.log(sum(1,2,3,4,5));

*/

function raceResults(gold , silver , ...restAll){
    
    console.log(`Gold medal goes to : ${gold}`);
    console.log(`Silver medal goes to : ${silver}`);

    console.log(`And , Thanks TO EveryOne Else :  ${restAll} `);
  
    
}

raceResults("Shivam" , "Ajay" , "Rahul", "Aman" , "Roy", "Arihan" , "Amridh");
