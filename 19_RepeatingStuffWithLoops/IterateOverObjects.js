const myObject = new Object();

    myObject["firstname"] = "Gareth";
    myObject["lastname"] = "Simpson";
    myObject["age"] = 21;




const testScore = {

    aman : 90,
    roahn : 70,
    ajay : 87,
    hinys : 78,
    gihyt : 98,
    moklk : 99,
    jolnm : 67,

}


// object me in lgta hai , and array me of lgta Hai ...



for(let ele in testScore){   

    // console.log(ele);     // keys 
    // console.log(testScore[ele]);           // value

    console.log(`${ele} , Scored : ${testScore[ele]}  Marks . `);   // key   with it values ...

}





console.log(Object.keys(testScore));
console.log(Object.values(testScore));
console.log(Object.entries(testScore));

console.log(Object.keys(testScore).length);  // to get the length of object


