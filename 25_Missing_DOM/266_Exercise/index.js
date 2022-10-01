let head = document.querySelector("h1");

const input  = document.querySelector("input");

input.addEventListener("input" , function(event){

    if(this.value == ""){
        head.innerHTML = "Enter Your Username";
        console.log("Empty..");
    }


    else if(this.value){
        head.innerHTML = "Welcome," + this.value;
    }

    


})