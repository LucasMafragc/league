const menuoculto = document.querySelector('.hamburguer')
const menuinicial = document.querySelector('.submenu')

const iconeBackground = document.querySelector('.iconeBackground')
const textoBackground = document.querySelector('.textoBackground')

function clicar(){
    if(window.getComputedStyle(menuinicial).display ==='none'){
        menuinicial.style.display = 'block'
    }else{
        menuinicial.style.display = 'none'
    }

}

function fecharmenu(){
    if( window.getComputedStyle(menuinicial).display =='block'){
       menuinicial.style.display = 'none'
    }
}

function ativarBackground(){
    if( iconeBackground.innerHTML == 'toggle_off'){
        iconeBackground.innerHTML = 'toggle_on'
        textoBackground.innerHTML = 'Para desligar a imagem de fundo click no botão abaixo'
        document.body.style.backgroundImage = "url('https://e1.pxfuel.com/desktop-wallpaper/483/645/desktop-wallpaper-the-flash-by-an0rak18-iphone-flash-comic.jpg')"

    } else {
        iconeBackground.innerHTML = 'toggle_off'
        textoBackground.innerHTML = 'Para ligar a imagem de fundo click no botão abaixo'
        document.body.style.background = ""
    }
    
}