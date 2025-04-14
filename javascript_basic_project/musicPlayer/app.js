let sidebarButton = document.querySelector(".sidebar-btn")
let sidebarIcon= document.querySelector('.sidelogo')
let sidebar = document.querySelector('aside')
let minilogo = document.querySelector('.small-logo')


let musicMenu = document.querySelectorAll('.music-menu h2') ///select all h2 in array from
let musicMenu_p = document.querySelectorAll('.music-menu ul li a p');
let musicMenu_li = document.querySelectorAll('.music-menu ul li ');
let logo = document.querySelector('.logo')

let userMenuBtn = document.querySelector(".user-login-wrapper")
let userDropDown = document.querySelector(".user-wrapper-dropdown")



let elementsToggle = [
    {
        elements : musicMenu ,
        className : "hide_element",
    },
    {
        elements : musicMenu_p ,
        className : "hide_element",
    },
    {
        elements : musicMenu_li ,
        className : "menu-gap",
    }

]

sidebarButton.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-hight");
    sidebarIcon.classList.toggle("toggle-sidebar-btn");
    logo.classList.toggle("hide_element");
    minilogo.classList.toggle("show_element");

    elementsToggle.forEach(({ elements, className }) => {
        elements.forEach(el => el.classList.toggle(className));
    });
});




userMenuBtn.addEventListener('click',()=>{
    userDropDown.classList.toggle('show-user-drapdown')
})

