const form = document.querySelector("#form");
const ultag = document.querySelector("#tweets");


form.addEventListener("submit" , function(event){


            const first = form.elements.username  
            const second = form.elements.password 
    

    console.log("Name : " + first.value + " , Username :   " + second.value);
    
    Add_A_Entry(first , second);

    event.preventDefault();  
})



function Add_A_Entry(first , second){

   
    let litag = document.createElement("li");
    
        
    

    litag.append(first.value);
    litag.append("  :  ");
    litag.append(second.value);


    ultag.appendChild(litag);


    first.value = "";
    second.value = "";
    
}



        // Task  : if i want to remove the li  , on after every Click  (Something like todo list)




// Event Deligation 


/*

const lis = document.querySelectorAll("li");
for(let li of lis){
 
        li.addEventListener("click" , function(){
            li.remove();

            console.log("li clicked ")
        })
}

            // this wont WORK , bcz it can;t see into the future  , it can;t say for every all that may be add in future
*/

// But can be done by parent



ultag.addEventListener("click" , function(event){
    
    // console.log(event);  // event -> target  = li or p 

    // console.log(event.target);
    
        // event.target.remove();  // this will remove  eighther para or li , or whatever


    console.dir(event.target);

    if(event.target.nodeName == 'LI'){
        event.target.remove();
    }

    

})

