const timeelement = document.getElementById("time");

const ampm = document.getElementById("ampm");
const monthel = document.getElementById('monthel');
const yearel = document.getElementById('year')
function calculateDateTime(){
    const date = new Date();
    let minute = date.getMinutes();
    let secound = date.getSeconds();
    let hours = date.getHours();
    let month = date.getMonth();
    let year = date.getFullYear();
    let monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    minute = minute.toString().padStart(2, "0");
    secound = secound.toString().padStart(2,"0");
    hours =hours.toString().padStart(2, "0");
    let ampmvalue =(hours>=12) ? "PM" : "AM"
    if(hours >=12){
        hours -= 12
    }else if(hours === 0){
        hours = 12
    }
    monthel.innerHTML =`${ monthlist[month]} ${month+1}`;
    yearel.innerHTML = year;
    
    timeelement.innerHTML = `${hours}:${minute}:${secound}`
    ampm.innerHTML = ampmvalue;

}
setInterval(()=>calculateDateTime(),1000)





