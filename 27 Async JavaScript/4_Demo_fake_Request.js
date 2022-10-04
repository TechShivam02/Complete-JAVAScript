

// At last  , written all about promises , need , why ?



const fakeRequestCallback = (url, success, failure) => {
    
    const delay = Math.floor(Math.random() * 500) +1000;
    
    // console.log(delay);

    setTimeout(() => {
        
        if (delay > 1350) {
            failure(`Connection Timeout :( from  ${url}`);
        } 
        
        else {
            success(`Here is your fake data from ${url}`)
        }

    }, delay)
};






// fakeRequestCallback( "books.com" , function(response){console.log(response) } , function(response){ console.log(response) } );


// assuming it  receiving data from book api 


//suppose having 1 req for page1 , if succes from page1 , then for page 2  - req (another callback for page2 succ or failure , if page2 succ similary for page 3)
// for eg 


/*
 // if succ from page 1 then calling for page3

fakeRequestCallback( "books.com/page1" ,

    function(response){
    console.log(response) 


        fakeRequestCallback( "books.com/page2" ,

            function(response){
                console.log(response) 
            } ,function(response){ console.log(response) }
            
        );



    } ,function(response){ console.log(response) }
    
);

*/




fakeRequestCallback( "books.com/page1" ,

    function(response){  // succ of page1
    console.log(response)   


        fakeRequestCallback( "books.com/page2" , 

            function(response){   // succ of page2 , after  succ pf page1
            console.log(response) 


                fakeRequestCallback( "books.com/page3" ,  

                    function(response){   // succ of page3 , after  succ pf page2 , after succ of page1
                        console.log(response) 
                    } ,function(response){ console.log(response) }  // failure of page3 , after  succ pf page2 , after succ of page1
                );


            } ,function(response){ console.log(response) }  // failure of page2 , after  succ pf page1
            
        );

            

    } ,function(response){ console.log(response)}   // falilure of page1
    
);




/*
    When making requests , we would have our sucess and our fail callback

    And then if we needed a nested request , it was the same thing to callbacks per request over and over

    And it wasn't limited to just making requests , So this is all silly and fake for the moment anyway

    // Then comes the concept of promises , people are really frustating about these , look at the above one its really ugly and scary

    // So promises came along and they promised a future where could have asynchronous code , where we didn't need to have all these nested crazy callbacks,
    but we could still have the exact same logic of the same flow
    // i.e  we would be making the making the second req  if the first one works  or anywhere a error we print out the error 
     
    // so promise allow to have a branching path , do this and then do that   but it looks really nicer and really good to understand 
    
*/  

