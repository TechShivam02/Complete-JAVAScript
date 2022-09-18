function add(x , y){

    if( typeof x !== 'number'    || typeof y !== 'number' ){
        return false;
    }

    else{
        let sum  = x+y;

        return sum;

    }
}

let ans = add(5,6); 
console.log(ans);
