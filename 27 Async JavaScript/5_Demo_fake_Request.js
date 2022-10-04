


const fakeRequestPromise = (url) => {
    
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 3000) {
                reject();
            } else {
                resolve();
            }
        }, delay)
    })
}



// const req = fakeRequestPromise("hihi.com");

// req
//     .then(()=>{
//         console.log("Promise RESOLVED !!");
//         console.log("It Worked ..");
//     })

//     .catch(()=>{
//         console.log("Promise REJECTED !!");
//         console.log("Oh NOO , ERROR !!! ..");
//     })





    // also no need of creating object , directly it can be done


// fakeRequestPromise("hihi.com")
//     .then(()=>{
//         console.log("Promise RESOLVED !!");
//         console.log("It Worked ..");
//     })

//     .catch(()=>{
//         console.log("Promise REJECTED !!");
//         console.log("Oh NOO , ERROR !!! ..");
//     })





fakeRequestPromise("hihi.com")
    .then(()=>{
        console.log("Promise RESOLVED !!");
        console.log("It Worked ..");

        fakeRequestPromise("cdvvdvdvdv.com")
            .then(()=>{
                console.log("Promise REsolveed 2nd");
                console.log("It Worked Again ");
                
            })

            .catch(()=>{
                console.log("Opps , 2nd Promise REjected ");
                console.log("Now , 2nd time , it didn't WORKED");
            })

    })

    .catch(()=>{
        console.log("Promise REJECTED 1)!!");
        console.log("Oh NOO , ERROR 1) !!! ..");
    })



        
    /*

        Promise RESOLVED !!
        It Worked ..
        Promise REsolveed 2nd
        It Worked Again

    */



    /*
        Promise RESOLVED !!
        It Worked ..
        Opps , 2nd Promise REjected 
        Now , 2nd time , it didn't WORKED

    */


    /*

        Promise REJECTED 1)!!
        Oh NOO , ERROR 1) !!! ..
    
    
    */