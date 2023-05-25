const submenu = document.querySelector('.submenu')
const iconeFundo = document.querySelector('i.iconeBackground')


function ativarBackground(){
    if(iconeFundo.innerHTML == 'toggle_off'){
        iconeFundo.innerHTML = 'toggle_on';
       document.body.style.backgroundImage = "url('https://s2.glbimg.com/CJRxuzh0enLW5LGEy76didWveIU=/e.glbimg.com/og/ed/f/original/2017/11/16/liga-da-justica.jpg')"
        
    }else{
        iconeFundo.innerHTML = 'toggle_off'
        document.body.style.background = ""
    }
}

function abrirMenu(){
    if(innerWidth <600){
        if(submenu.style.display == 'block'){document.querySelector('.submenu').style.display = 'none' ;
    } else { document.querySelector('.submenu').style.display = 'block'}
    }else{ submenu.style.display='block'}
}

function fecharMenu(){
    if(innerWidth <600){submenu.style.display = 'none';
}else {submenu.style.display = 'block'}
    
}

function monitorar(){
    if(innerWidth <600){
        submenu.style.display = 'none'
    }else{
        submenu.style.display = 'block'
    }
}