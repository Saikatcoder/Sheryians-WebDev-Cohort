let button = document.querySelector('.btn')
let request = document.querySelector('.request')
button.addEventListener('click',()=>{
    request.innerHTML = "Request send..."
    button.innerHTML = "wait....";
    setTimeout(()=>{
         request.innerHTML = "see profile"
        button.innerHTML = "friend";
    },4000)
})