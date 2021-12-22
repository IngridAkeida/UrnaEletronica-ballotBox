let seuVotoPara = document.querySelector('.div-1-1 span');
let cargo = document.querySelector('.div-1-2 span');
let descricao = document.querySelector('.div-1-4');
let aviso = document.querySelector('.div-2');
let lateral = document.querySelector('.div-1-right');
let numeros = document.querySelector('.div-1-3')


let etapaAtual = 0;
let numero = '';

function comecarEtapa(){

    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for( let i=0; i<etapa.numeros; i++){
        if(i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';

    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.Candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }else {
            return false;
        } 
    });
    if (candidato.legth > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome} <br> Partido: ${candidato.partido}`;
        let fotosHtml = '';
        for (let i in candidato.fotos){
            fotosHtml += `<div class="div-1-image"><img src="imagem/${candidato.fotos[i].url}" alt="">${candidatos.fotos[i].legenda}</div>`;    
        }  
        lateral.innerHTML = fotosHtml;
    }else{
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `<div class="aviso--grande">VOTO NULO</div>`;
    }


}  


function clicou(n){
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero =  `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterface();
        }
    }

}

function branco(){
    alert("Clicou em BRANC0");
}

function corrige(){
    alert("Clicou em CORRIGE");
}

function confirma(){
    alert("Clicou em CONFIRMA");
}

comecarEtapa();