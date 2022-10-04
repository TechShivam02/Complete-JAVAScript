const fakeRequestPromise = (url) => {

    return new Promise ( (resolve , reject) => {

        const delay = Math.floor(Math.random() * (4500)) + 500;
        
        setTimeout(() => {
           
            if (delay > 3000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }


        }, delay)

    })
}


// fakeRequestPromise("hihi1.com")

//     .then(()=>{
//         console.log("1 , Promise Resolved");

        
//         fakeRequestPromise("hihi2.com")
//             .then(()=>{
//                 console.log("2 , promise REsolved");
//             })
//             .catch(()=>{
//                 console.log(" Rejected , promise 2");
//             })

//     })

//     .catch(()=>{
//         console.log("1 , promise REJECTED");
//     })



// fakeRequestPromise("hihi.com")
    
//     .then(()=>{
//         console.log("1, Promise Resolved");
//         return fakeRequestPromise("hihi_2.com");

//     })

//     .then(()=>{
//         console.log("2, Promise Resolved");
//     })

//     .catch(()=>{
//         console.log(" Promise, REJECTED");
//     })





// fakeRequestPromise("hihi.com")
    
//     .then(()=>{
//         console.log("1, Promise Resolved");
//         return fakeRequestPromise("hihi_2.com");

//     })

//     .then(()=>{
//         console.log("2, Promise Resolved");
//         return fakeRequestPromise("hihi_3.com");

//     })


//     .then(()=>{
//         console.log("3, Promise Resolved");
//     })



//     .catch(()=>{
//         console.log(" Promise, REJECTED");
//     })







fakeRequestPromise("hihi.com")
    
    .then((data)=>{
        console.log("1, Promise Resolved");
        console.log(data);

        return fakeRequestPromise("hihi_2.com");

    })

    .then((data)=>{
        console.log("2, Promise Resolved");
        console.log(data);

        return fakeRequestPromise("hihi_3.com");

    })


    .then((data)=>{
        console.log("3, Promise Resolved");
        console.log(data);
    })



    .catch((data)=>{
        console.log(" Promise, REJECTED");
        console.log(data);
    })
