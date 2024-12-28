let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
const btnSend = document.getElementById("btnsend");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
btnSend.addEventListener("click", (e)=>{
    e.preventDefault();
})
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

