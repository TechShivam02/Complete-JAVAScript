const form = document.querySelector("#form");
const ultag = document.querySelector("#tweets");

form.addEventListener("submit" , function(event){


    // const first = document.querySelector("#form")[0].value;
    // const second = document.querySelector("#form")[1].value;
    
            // OR

    // to acess  a input tag in form  , if not given id , or dont the positon  -- Ans : here below

    // formName.elements.name   // name is that u set for the input tag
     
            const first = form.elements.username  // first = the input tag username , name ="username" 
            const second = form.elements.password // second = the input tag in password , name ="password"
    

    console.log("Name : " + first.value + " , Username :   " + second.value);
    
    Add_A_Entry(first , second);

    event.preventDefault();  // it prevent the default  



})


function Add_A_Entry(first , second){

    // append is for to append text vgera , appendChild to append a child node etc
    
    let litag = document.createElement("li");
    
        let bold  = document.createElement("b");
        bold.append(first.value);


    litag.append(bold);
    litag.append("  :  ");
    litag.append(second.value);


    ultag.appendChild(litag);


    first.value = "";
    second.value = "";
    
}