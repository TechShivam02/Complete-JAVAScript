var btn = document.querySelector("#btn");
console.dir(btn);



btn.onclick = function(){
    console.log("You clicked me ")
}


function Enter(){
    console.log("on Mouse Enter");
}

function Leave(){
    console.log("on Mouse Leave");
}


btn.onmouseenter = Enter;
btn.onmouseleave = Leave;


    document.querySelector("#btn").ondblclick = ()=> alert("U DBL Clicked Me ");

