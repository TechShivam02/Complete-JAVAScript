const btn = document.querySelector("button");

const head = document.querySelector("h1");

btn.addEventListener("click" , function(){

        

        var r = Math.floor(Math.random() * 255 +1);
        var g = Math.floor(Math.random() * 255 +1);
        var b = Math.floor(Math.random() * 255 +1);
        
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

        head.innerText = `rgb(${r},${g},${b})`; 
        


});