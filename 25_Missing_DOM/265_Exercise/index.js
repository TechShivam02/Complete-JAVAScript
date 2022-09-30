// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass


const form = document.querySelector("#form");

form.addEventListener("submit" , function(event){
    
        event.preventDefault();

        const first = form.elements.product;
        const second = form.elements.quantity;

        Add_Product_with_Quantity(first , second);
      
})


function Add_Product_with_Quantity(first , second){

        const ULlist = document.querySelector("#list");


        const heading = document.createElement("h1");


                const litag = document.createElement("li");

                const productital = document.createElement("i");
                productital.append(first.value);
                litag.append(productital);

                        litag.append(" : ");

                const Quantbold = document.createElement("b");
                Quantbold.append(second.value);
                litag.append(Quantbold);


        heading.appendChild(litag);
        ULlist.appendChild(heading);


        first.value = "";
        second.value = "";
        

}
        
        