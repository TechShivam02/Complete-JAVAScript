/*  

    // the await keyword allows us to write  asynchronous code that it looks like synchronous

// we can only use the await keyword inside of functions declared with async
// await will pause the execaution of the function , waiting for a promise to be resolved

*/




const delayColorChange = (color , delay) => {
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();

        }, 1000);
    })
}


/*  // output // red
 
async function rainbow(){
    
    delayColorChange("red" , 1000);

}

*/



/*      // output // orange directly 
 
async function rainbow(){
    
    delayColorChange("red" , 1000);
    delayColorChange("orange" , 1000);
    

}

*/



/*
      // output  // red then orange 
 
async function rainbow(){
    
    await delayColorChange("red" , 1000);
    delayColorChange("orange" , 1000);
    
    // await : it will pause the exec of , until promise resolved  of  "red" color , after promise reslved then only move to next line below

}

*/




/*
      // output  // red then green directly 
 
async function rainbow(){
    
    await delayColorChange("red" , 1000);
    
    delayColorChange("orange" , 1000);
    delayColorChange("green" , 1000);
    
    
    // await : will only pause the exec of red , red perform then    move to green direclty
}

*/



/*
      // output  // red then orange then green 
 
async function rainbow(){
    
    await delayColorChange("red" , 1000);
    
    await delayColorChange("orange" , 1000);
    delayColorChange("green" , 1000);
    
    
    // await : will only pause the exec of red , red perform then   
    // await : will only pause the exec of orange  , red perform then  
    // then green  
    
}

*/




/*/
      // output  // red  then green directly
 
async function rainbow(){
    
    await delayColorChange("red" , 1000);
    
     delayColorChange("orange" , 1000);
    await delayColorChange("green" , 1000);
    
    
    // await : will only pause the exec of red , red perform then  
    // green directly 
    
}

*/





      // output  // red  then ornage then blue then yellow then green then pink 
 
async function rainbow(){
    
    await delayColorChange("red" , 1000);
    
    await delayColorChange("orange" , 1000);
    await delayColorChange("blue" , 1000);

    await delayColorChange("yellow" , 1000);

    await delayColorChange("green" , 1000);

    await delayColorChange("pink" , 1000);

    
    return "All Done"
    
    // await : will only pause the exec of red , red perform then  
    // await : will only pause the exec of orange , orange perform then
    // await : will only pause the exec of blue , blue perform then
    // and so on ...........................

    // once all done , it will be resolved with promise value of  ALL DONE
      
}



rainbow()
.then((data)=>{
    console.log("Is All Perform : " + data);
})
