console.log("Hello ...");


setTimeout(() => {
        console.log(" ... Are You Still There .... ");
}, 1000);




const id  = setInterval(() => {
    
    console.log(Math.floor(Math.random() * 6 + 1 ));

}, 500);


clearInterval(id);


    /*   how and where  the clear interval is used ...

    // <p id="demo"></p>

    // <button onclick="myStop()">Stop the time</button>

    // <script>
    // const myInterval = setInterval(myTimer, 1000);


    // function myTimer() {
    //   const date = new Date();
    //   document.getElementById("demo").innerHTML = date.toLocaleTimeString();
    // }


    // function myStop() {
    //   clearInterval(myInterval);
    // }


    */



