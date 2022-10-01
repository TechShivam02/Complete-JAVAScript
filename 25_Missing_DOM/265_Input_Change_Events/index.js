
    // i want after getting each input , reflect the change HowEver we have keydown event 
        // But sometime if the input is taken by voice , screeen reader ,  or anything else which does not include of any key then the keydown events wont work

    // Soln : Then we have Change Events


const input = document.querySelector("input");

/*

input.addEventListener("change" , function(event){

    console.log("Change Event");   //Change Event :  blur { when u give some input , it will only show the output when u click outside the input tag after giving the input

})

*/



let head = document.querySelector("h2");

input.addEventListener("input" , function(event){

    console.log("Input Event");   //Input Event :  now if u click inside the input , it will show th output
        // Now as u will type it will reflect the changes side by side

     // lets check how to get the value of input , we will find by event

     console.log(event);
            // event -> data       m input ki value store hoti hai ...

     head.innerHTML += event.data;




});


