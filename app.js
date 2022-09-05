/* Cuando hago CLICK .button .nav TOGGGLE 'activo' */  
const button = document.querySelector('.button')
const nav = document.querySelector('.nav')

button.addEventListener(`click`, ()=>{
    nav.classList.toggle('activo')
})