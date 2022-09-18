 
 
 
// for every function scope anything declared can be accessed inside , i.e  child can access it ,   Not the parent



function bankRobbery()  
{
        const heroes = ['spiderman' , 'wolverine' , 'black panther'];

        function cryForHelp(){

            function inner(){
                    for(let hero of heroes){
                        console.log(` Please Help US , ${hero.toUpperCase()} `);
                    }
            }

            
            inner();
        }


    cryForHelp();


}



bankRobbery();

// cryForHelp();   // Error ..

