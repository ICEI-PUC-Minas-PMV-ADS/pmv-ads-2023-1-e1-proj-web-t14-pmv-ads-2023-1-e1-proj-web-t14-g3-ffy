const formularioPerfil = document.querySelector('#formPerfilInv');

formularioPerfil.addEventListener('submit' , (evento) => {
    evento.preventDefault();
    perfilInvestidor()
})

function perfilInvestidor () {
    var marcadas = [];
    var numResInv = 0;
    marcadas = (document.querySelectorAll('.multiplaEsc:checked'));
    
    for (var i = 0 ; i < marcadas.length ; i++){
        numResInv += parseInt(marcadas[i].value);
    }

    alert(classificaInvestidor(numResInv));
}

function classificaInvestidor(total) {
    var perfil = ""
   
        if (total <= 7){ 
            perfil = "Conservador";
        }
        else if (total > 7 && total <= 11){
            perfil = "Moderado"
        }
        else if ( total > 11 && total <= 15) {
            perfil = "Arrojado";
        }
        else if ( total > 15  ) {
            perfil = "Agressivo";
        }
    
    return(perfil);
}