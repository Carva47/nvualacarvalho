let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let btnFechar = document.getElementById('btn-fechar')
btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
   
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
btnFechar.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
