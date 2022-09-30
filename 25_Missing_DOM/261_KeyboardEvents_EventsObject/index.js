document.querySelector('button').addEventListener('click' , function(evt){
    
    console.log(evt);

}); 



const input = document.querySelector("input");

/*

input.addEventListener("keydown" , function(){
    console.log("KeyDown!");
})
input.addEventListener("keyup" , function(){
    console.log("KeyUp");
})

*/



input.addEventListener("keydown" , function(event){
    console.log(event);

        // event.key     // IF I WANT THE  actual letter , and does not care about where it is present on the keyboard   "EVENT.KEY"
        // event.code   // IF WANT ACTUAL ACURATE POSITION , and where it is present on keyboard , eg  if shiftpressed LEFTSHIIF RIGHTSHIFT   .. 

    console.log(event.key + " :: " + event.code);
    
});



// If u want , that u press anything without giving in input 
// window.addEventListener("keydown" , function(event){
//     console.log(event.code);
// })



window.addEventListener("keydown" , function(event){
   
    switch(event.code){
        
        case "ArrowUp":
            console.log("UP !");
            break;

        case "ArrowDown":
            console.log("DOWN !");
            break;
    
        case "ArrowLeft":
            console.log("LEFT !");
            break;
        
        case "ArrowRight":
            console.log("RIGHT !");
            break;

        default :
            console.log(event.code);
            break;                  
    }


});