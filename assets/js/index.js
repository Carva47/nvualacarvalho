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


/* Botao de voltar para o topo*/ 

// Quando o usuário rolar 20px da parte superior da página, exibir o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Quando o usuário clicar no botão, rolar de volta ao topo da página
function topFunction() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
