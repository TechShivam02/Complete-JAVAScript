// new Promise((resolve, reject) =>{
//     resolve();
// })




/*

const fakeRequestPromise = (url) =>{

    return new Promise((resolve , reject) => {

        const rndm = Math.floor(Math.random()*10) +1;
        console.log(rndm);

        setTimeout(() => {

            if(rndm > 5){
                reject();
            }
            else{
                resolve();
            }
        }, 1000);

    })
}



fakeRequestPromise("hihih.com")

.then(()=>{
    console.log("Promise Resolved");
})

.catch(()=>{
    console.log("Rejected , Promise ");
})

*/



const delayColorChange = (color , delay) =>{

    return new Promise( (resolve , reject) =>{
        
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();

        }, delay);
    })

}


// delayColorChange("red",1000)

// .then(()=>{
//     delayColorChange("orange" , 1000);
// })




// delayColorChange("red",1000)


// .then(()=>{
    
//     delayColorChange("orange" , 1000)

//     .then(()=>{
//         delayColorChange("green" , 1000)
//     })

// })






// delayColorChange("red",1000)


// .then(()=>{
//     return delayColorChange("orange",1000);
// })

// .then(()=>{
//     delayColorChange("green",1000);
// })




// delayColorChange("red",1000)


// .then(()=>{
//     return delayColorChange("orange",1000);
// })

// .then(()=>{
//     return delayColorChange("green",1000);
// })


// .then(()=>{
//      delayColorChange("yellow",1000);
// })



/*  // output  : red then pink 

delayColorChange("red",1000)

.then(()=>{
    delayColorChange("orange" ,1000)
})

.then(()=>{
    delayColorChange("green" ,1000)
})

.then(()=>{
    delayColorChange("yello" ,1000)
})

.then(()=>{
    delayColorChange("pink" ,1000)
})

*/




// delayColorChange("red",1000)

// .then(() => delayColorChange("red",1000))
// .then(() => delayColorChange("orange",1000))
// .then(() => delayColorChange("pink",1000))
// .then(() => delayColorChange("yellow",1000))
// .then(() => delayColorChange("green",1000))
