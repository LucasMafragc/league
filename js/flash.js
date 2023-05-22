const menuoculto = document.querySelector('.hamburguer')
const menuinicial = document.querySelector('.submenu')

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