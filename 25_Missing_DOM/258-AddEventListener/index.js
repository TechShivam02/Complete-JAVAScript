const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");


// 1 - Type of event ,  2- Call back function
btn1.addEventListener('click' , function(){
    alert("Button 1 , Clicked ");
})


btn2.addEventListener('dblclick' , function(){
    alert("Button 2 , DBLClicked ");
})




function Over(){
    console.log("Enter ");
}
function Out(){
    console.log("Leave ");
} 

// btn2.addEventListener('mouseover' , Over );  
// btn2.addEventListener('mouseout' , Out );



btn2.addEventListener('mouseover' , Over , {once : true} );   // it means it works only for the first time , These are called options  
btn2.addEventListener('mouseout' , Out );


