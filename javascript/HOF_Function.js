//!. create  a function thats takes a callback function and excitued in afeter n secound indefinitely //!

function greet(fn, time){
    setInterval(fn ,time)
}
greet(function(){
    console.log("saikat");
},2000)


//!impliment a function thats return a function with a  preset greeting (closer)
 
function greeting(greet){
    return ()=>{
        console.log(`hellow${greet}`);
        
    }
}
 greeting(hello) 