const btn = document.querySelector("#btn");

btn.addEventListener("click" , function(event){
    event.stopPropagation();  // Stoped the event bubbling 
})