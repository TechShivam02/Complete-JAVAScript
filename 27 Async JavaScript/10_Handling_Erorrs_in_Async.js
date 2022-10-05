/*  

    // the await keyword allows us to write  asynchronous code that it looks like synchronous

// we can only use the await keyword inside of functions declared with async
// await will pause the execaution of the function , waiting for a promise to be resolved

*/








// try{
//     abcdef.log("efefe");
// }
// catch(excep){
//     console.log(excep);
// }




const fakedDataPromise = (url) => {
    
    return new Promise( (resolve ,  reject) =>{
        
        const delay = Math.floor(Math.random()*10 + 1);

        setTimeout(()=>{
            if(delay > 5){
                resolve(`Promise Resolved in ${delay} ..`);
            }

            else{
                reject(`Promise Rejected in ${delay} ..`);
            }

        },1000  )
    })
}




// fakedDataPromise("hello.com")

// .then((data)=>{
//     console.log(data);
// })

// .catch((data)=>{
//     console.log(data);
// })


async function callFakePromise(){

    try{
        await fakedDataPromise("hihihih.com")

        .then((data)=>{
                console.log(data);
            })
    }
    
    catch(excep){
        console.log(`Promise Rejected , And Handled by Catch  , Excep is ${excep}`)
    }

}

callFakePromise();






