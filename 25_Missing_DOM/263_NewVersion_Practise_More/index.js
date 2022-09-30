const form =document.querySelector("#shelterform");


form.addEventListener("submit" , function(event){

    event.preventDefault();  // Dont send a new Request , don't go to the URL
    

    const input = document.querySelector("#input");



    let ele = document.createElement("li");
    ele.innerHTML = input.value;

    input.value = "";


    document.getElementById("list").appendChild(ele);
        
})