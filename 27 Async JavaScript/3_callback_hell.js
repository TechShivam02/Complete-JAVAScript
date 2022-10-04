/*

setTimeout(() => {
    document.body.style.backgroundColor = "red";
}, 1000);

setTimeout(() => {
    document.body.style.backgroundColor = "orange";
}, 2000);



setTimeout(() => {
    document.body.style.backgroundColor = "yellow";
}, 3000);

*/


setTimeout(() => {

    document.body.style.backgroundColor = "red";

            
        setTimeout(() => {
            document.body.style.backgroundColor = "orange";

            setTimeout(() => {
                document.body.style.backgroundColor = "yellow";


                setTimeout(() => {
                    document.body.style.backgroundColor = "blue";


                    setTimeout(() => {
                        document.body.style.backgroundColor = "green";
                    }, 1000);


                }, 1000);


            }, 1000);


        }, 1000);


}, 1000);
