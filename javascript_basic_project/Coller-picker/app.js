const colorInputbox = document.getElementById('colorinput')
const colorCode= document.getElementById("colorcode");
const copyButton = document.getElementById("copybutton");
const savebutton = document.getElementById('savecollorbutton');
const favoritecolor = document.getElementsByClassName('.favoritecontainer');
const  complementryContainer = document.getElementById('complementryContainer')
const bodycolor = document.querySelector('body')
const favoritecontainer =  document.querySelector('.favoritecontainer')

colorInputbox.addEventListener('input',()=>{
    const colorvalue = colorInputbox.value;
     updateColorDisplay(colorvalue);
     showcomplementrycolor(colorvalue);
})

function updateColorDisplay(color){
    colorCode.innerHTML = color;
    colorCode.style.color = color;   
    bodycolor.style.background =  color; 
    const currentBg = getComputedStyle(bodycolor).backgroundColor;

    if(currentBg === "rgb(30, 30, 47)"){
        bodycolor.style.background = "black";
    }
}

function showcomplementrycolor(color){
    const complementoryColor = getcomplementryContainer(color);
    complementryContainer.innerHTML = "";

    complementoryColor.forEach((compColor)=>{
        const colorBox = document.createElement('div')
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = compColor;
        complementryContainer.appendChild(colorBox);
    })
}

function getcomplementryContainer(color){
    const base = parseInt(color.slice(1),16)
    const compliment = (0xFFFFFF ^ base).toString(16).padStart(6, "0")
    return [`#${compliment}`]
}


copyButton.addEventListener('click',()=>{
    navigator.clipboard.writeText (colorCode.textContent).then(()=>{
        alert(`your color code is ${colorCode.textContent}`)
    }).catch(err => console.error("faild to copy color code copy", err))
})

savebutton.addEventListener('click',()=>{
   const color =  colorCode.textContent
   addfavoriteColor(color);
})

function addfavoriteColor(color){
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;
    colorBox.title = color 
    favoritecontainer.appendChild(colorBox);
}