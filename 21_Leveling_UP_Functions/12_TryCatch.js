/*

    try{
        hello.toUpperCase();
    }catch{
        console.log("Erorororororor ..... ");
    }

*/


function yell(msg){

    try{
        console.log(msg.toUpperCase().repeat(3));
    }

    catch(exp){
        
        console.log(exp);  // print the exception 
        console.error("Pls Pass a string ... ");   // display a error msg  "....."
    }
    
}

yell("shivam ");

yell(34);   // exception .... 
yell(true);   // exception .... 
yell([]);   // exception .... 

yell("dgrgrgrgrgrrg");   






