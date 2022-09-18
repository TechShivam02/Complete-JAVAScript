const fullNames = [
    
    {
        fname : "FirstFname",
        lname: "FirstLname",
    },

    {
        fname : "SecondFname",
        lname: "SecondLname",
    },

    {
        fname : "ThirdFname",
        lname: "ThirdLname",
    },

    {
        fname : "FourthFname",
        lname: "ForthLname",
    },

    {
        fname : "FifthFname",
        lname: "FifthLname",
    },

];


const fname = fullNames.map(function(ele){
    return ele.fname;
})


console.log(fname);


