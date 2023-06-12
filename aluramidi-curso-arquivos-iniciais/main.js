/*function tocaSomPom(){
    document.querySelector("#som_tecla_pom").play() 
    
}
document.querySelector(".tecla_pom").onclick = tocaSomPom

function tocaSomClep(){
    document.querySelector("#som_tecla_clap").play() 
    
}
document.querySelector(".tecla_clap").onclick = tocaSomClep*/

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();

}
const listaDeTeclas = document.querySelectorAll('.tecla')


for(let contador = 0; contador<listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    tecla.onclick = function (){
        tocaSom(idAudio)
    }
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space'){
            tecla.classList.add("ativa")
        }
       if(evento.code === 'Enter'){
        tecla.classList.add("ativa")
       } 
    }
    tecla.onkeyup = function(){
        tecla.classList.remove("ativa")
    }
}

