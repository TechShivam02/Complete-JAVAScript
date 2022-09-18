/*
var arr = [1,2,3,4];

var sum =0;
var product = 1;

for(let i=0;i<arr.length ; i++){
    sum+= arr[i];

    product *= arr[i];


}

console.log("Sum : " + sum);
console.log("Product : " + product);
*/


// var str = prompt("Enter the string : ");



/*


var str = prompt("Enter the String : ");
let n = str.length;


let ans = "";

    for(let i=0 ; i<n;i++){

            var ch = str[i];

            var copy = str[i];


            if(ch == copy.toUpperCase()){

                ans += str[i].toLowerCase();
            
        }

            else{
                    ans += str[i].toUpperCase();
            }
            
    }


    str = ans;

    console.log(str);



    */




    /*
    var arr = [];

    let n = prompt("Enter the No Of Items : ");

    for(let i=0 ;i<n;i++){
        arr.push(prompt(`Enter the ${i+1}  item `));
    }

    console.log(arr);

    */




    /*

    var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

    let n =arr.length;
    let maxi = -99999;
    let ans = "";


    var freq ={};
    
    for(let i =0 ; i<n;i++){

        let ele = arr[i];

        freq[ele] = 0;
        let count=0;


        for(let j =0 ; j<n;j++){
            if(arr[j] == ele){
                count++;
            }
        }

        freq[ele] = count;

        if(count > maxi){
            maxi = count;
            ans = ele;

        }


        
    }

    // console.log(freq);

    console.log(ans + " (" + maxi + ") times " );


    */




    /*
    function last(array ,  k =1){

        let n = array.length;
        
        if(k <= n){
            for(let i = n-k ; i<n ; i++){
                console.log(array[i]);
            }
        }

        else if(k > n){
            for(let i = 0 ; i<n ; i++){
                console.log(array[i]);
            }
        }
       

    }


    console.log(last( [7, 9, 0, -2 ] ,3));
    */




    /*

    let num1 = 400;
    let num2 = 600;

    if(num1 > num2){
        console.log(" Num1 , Is Greater . ");
    }

    else{
        console.log("Num2 , Is Greater . ");
    }


    */



/*

    let x = Number(prompt("Enter the side of x "));
    let y = Number(prompt("Enter the side of y "));
    let z = Number(prompt("Enter the side of z "));
    
    

    if(x== y  && y==z){
        console.log("Given Triangle is , Equilateral.");
    }
    
    else if(x== y  ||  y==z  || x==z){
        console.log("Given Triangle is , Isosceles.");
    }

    else{
        console.log("Given Triangle is , Scalene.");
    }
    

    */


    // var a = [];
    // a.unshift(1);
    // a.unshift(22);   //  22 1 

    // console.log(a.shift());  // 22     -->  // 1

    // console.log(a);
    //     a.unshift(3,[4, 5]);   // 3   [4,5]  1 

    // console.log(a); 
   
    // console.log(a.shift());
    // console.log(a.shift());
    // console.log(a.shift());

    

//     let arrayOfLetters = ['a','b','c','d','e','f'];
// const anotherArrayOfLetters = arrayOfLetters;
// arrayOfLetters = [];
// console.log(anotherArrayOfLetters);


var mycolor  = ["Red", "Green", "White", "Black"];

console.log(mycolor.toString());
console.log(mycolor.join());
console.log(mycolor.join('+'));
