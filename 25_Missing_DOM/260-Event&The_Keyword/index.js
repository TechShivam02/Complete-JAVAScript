function giveRandomClr(){
    
    var r = Math.floor(Math.random() * 255 +1);
    var g = Math.floor(Math.random() * 255 +1);
    var b = Math.floor(Math.random() * 255 +1);

    return `rgb(${r},${g},${b})`;

};



/*
const buttons = document.querySelectorAll("button");
for(let btn of buttons){

    btn.addEventListener("click" , function(){
        btn.style.backgroundColor = giveRandomClr(); 
        btn.style.color = giveRandomClr(); 
        
    })
}



const h1s = document.querySelectorAll("h1");
for(let h1 of h1s){
    h1.addEventListener("click" , function(){
        h1.style.backgroundColor = giveRandomClr(); 
        h1.style.color = giveRandomClr(); 
    })
}

*/




function colorize(){
    this.style.backgroundColor = giveRandomClr(); 
    this.style.color = giveRandomClr(); 
}

const buttons = document.querySelectorAll("button");
for(let btn of buttons){
    btn.addEventListener("click" , colorize)
}



const h1s = document.querySelectorAll("h1");

for(let h1 of h1s){
    h1.addEventListener("click" , colorize);
}