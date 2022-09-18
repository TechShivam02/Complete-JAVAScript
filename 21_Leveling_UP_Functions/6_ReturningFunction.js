/*

function makeMysteryFunc(){
    
    const rad = Math.random();

    if(rad > 0.5){
        return  function(){
                        console.log("Congrats , I m  a good function");
                        console.log("You win .....");
                        console.log("You win .....");
                        
                }

    }


    else{
            return  function(){
                        
                    alert("Stop Trying To close the window ");
                    
                        
                }
    }
}

const mystrey = makeMysteryFunc();


mystrey();


*/


/*
function isBetween(num){

    return num >= 50 && num <= 100;
}

console.log(isBetween(30));
console.log(isBetween(40));
console.log(isBetween(60));
console.log(isBetween(80));

*/


function isBetween(min , max){

    return function(num){

        return num >= min && num <= max;

    }


}


let ischild = isBetween(18,24);   // set min = 50 max = 100 

console.log(ischild(17));
console.log(ischild(11));
console.log(ischild(21));
console.log(ischild(23));



console.log(`.............................`);


let isAdult = isBetween(25 , 60);   // set min = 50 max = 100 

console.log(isAdult(16));
console.log(isAdult(18));
console.log(isAdult(26));
console.log(isAdult(50));



