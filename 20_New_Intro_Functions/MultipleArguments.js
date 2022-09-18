function greet(fname , lname){
    console.log(` Hemlo !!  Fname : ${fname}  , Lname : ${lname} `);
}

function repeat(fname , lname , noTime){

    while(noTime --){
        greet(fname , lname);
       
    }
}



repeat("shivam" , "kumar" , 5);
