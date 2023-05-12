
const btnMenu=document.getElementById('menu')
const menu=document.querySelector('.menu')

btnMenu.addEventListener('click',()=>{
    menu.style.margin='0px'
    menu.style.transition='1s'
})

const cerrarMenu=document.getElementById('cerrarMenu')
cerrarMenu.addEventListener('click',()=>{
    menu.style.transition='1s'
    menu.style.marginLeft='-100%'
})

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#front", {
      strings: ["FrontEnd Developer"],
    }).go();
  });