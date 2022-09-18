// WRITE YOUR CODE IN HERE:

let li = document.querySelectorAll("li");
console.log(li);

for(let ele of li){
    ele.classList.toggle("highlight");   // the ones having class highlight true will turned off , and  didn't having highlight class will turned true ON
}