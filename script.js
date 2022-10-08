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
    if(nav.style.display == 'bloco'){
        nav.style.display = 'none'
    } else{
        nav.style.display = 'block'
    }
}