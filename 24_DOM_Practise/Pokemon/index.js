const container = document.querySelector("#container");


for(let i=1 ;i<=500 ; i++){

    let div = document.createElement("div");
    div.classList.add = "divPokemon"


    
    const img = document.createElement("img");
    img.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;


    const span = document.createElement('span');
    span.innerText = `#${i}`;

    


    div.appendChild(img);
    div.appendChild(span);
    


    
    container.appendChild(div);



}