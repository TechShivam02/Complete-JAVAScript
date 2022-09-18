const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:



let head = document.querySelectorAll("h1 span");
console.log(head)

let i=0;

for(let ele of head){

    let clr = colors[i++];
    ele.style.color = clr;
}

