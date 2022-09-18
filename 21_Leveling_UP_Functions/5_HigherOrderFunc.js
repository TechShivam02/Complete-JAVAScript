// Outcomes : 
   
     // Accept other funcs as arguments
    // Return a Fucntion 

    
// Passing a function as a argument .... 





function callTwice(func){

    func();
    func();

}
    
function times6(fnc){

        for(let i=0 ; i<6 ; i++){
                fnc();  // fnc()  : calling the func    // fnc :  is function  
        }


}

    function rollDie(){
        
        const roll = Math.floor(Math.random() * 6 )+1;
        console.log(roll);
    }




// callTwice(rollDie);  
times6(rollDie);
