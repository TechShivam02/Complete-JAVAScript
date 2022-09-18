let maxi =  parseInt(prompt("Enter the max number : "));


while(!maxi){
    maxi =  parseInt(prompt("Enter a Valid number . "));
}


let targetAns = Math.floor(Math.random() * maxi) + 1;

console.log("Lottery Num : " + targetAns);

    








let guess = parseInt(prompt("Enter your first guess : "));


let count=1;


while(guess != targetAns){

   if(guess > targetAns){
        guess = parseInt(prompt("Too High !! , Enter a New guess.. "));
    }

    else if(guess) {
        guess = parseInt(prompt("Too Low !! , Enter a New guess.. "));
    }

    
    if(guess == 'q'){
        break;
    }


    

    count++;

    
}


if(guess == 'q')
{
    console.log("Ok , You Quit !!");

}

else{

    console.log("Congrats , You Win !! ");

    console.log(`You Got It , and took you  ${count} times `);
}
