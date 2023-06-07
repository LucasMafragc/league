const menuoculto = document.querySelector('.hamburguer')
const menuinicial = document.querySelector('.submenu')

const iconeBackground = document.querySelector('.iconeBackground')
const textoBackground = document.querySelector('.textoBackground')

function clicar(){
    if(innerWidth <600){
        if(window.getComputedStyle(menuinicial).display ==='none'){
        menuinicial.style.display = 'block'
    }else{
        menuinicial.style.display = 'none'
    }
    }
}

function fecharmenu(){
    if (innerWidth<600){
        if( window.getComputedStyle(menuinicial).display =='block'){
            menuinicial.style.display = 'none'
         }
    }
    
    
}

function ativarBackground(){
    if(innerWidth <600){
        if( iconeBackground.innerHTML == 'toggle_off'){
            iconeBackground.innerHTML = 'toggle_on'
            textoBackground.innerHTML = 'Para desligar a imagem de fundo click no botão abaixo'
            document.body.style.backgroundImage = "url('../imagens/caçador-resistencia.jpg')"
    
        } else {
            iconeBackground.innerHTML = 'toggle_off'
            textoBackground.innerHTML = 'Para ligar a imagem de fundo click no botão abaixo'
            document.body.style.background = ""
        }
    }else{
        if( iconeBackground.innerHTML == 'toggle_off'){
            iconeBackground.innerHTML = 'toggle_on'
            textoBackground.innerHTML = 'Para desligar a imagem de fundo click no botão abaixo'
            document.body.style.backgroundImage = "url('../imagens/caçador-resistencia.jpg')"
    
        } else {
            iconeBackground.innerHTML = 'toggle_off'
            textoBackground.innerHTML = 'Para ligar a imagem de fundo click no botão abaixo'
            document.body.style.background = ""
        }
    }
}

function monitorar(){
    if(innerWidth > 600){
        menuinicial.style.display = 'block';
    } else{
        menuinicial.style.display = 'none';
        
    }
}
