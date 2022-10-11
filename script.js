function mudafoto(foto){
    document.getElementById("icone").src = foto;

}

function tela(){
    if(window.innerWidth >= 768) {
        menu.style.display = 'none'
    } else{
        menu.style.display = 'block'
    }
}

function clickMenu(){
    if(navi.style.display =='none'){
        navi.style.display = 'block'
    } else{
        navi.style.display = 'none'
    }
        
}