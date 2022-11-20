// CONTROL SCREEN

let seuVotoPara = document.querySelector('.d1-l-1 span');
let descricao = document.querySelector('.d1-l-4');
let aviso = document.querySelector('.d2');
let lateral = document.querySelector('.d1-r');
let numeros = document.querySelector('.d1-l-3');

// ENVIRONMENT CONTROL

let etapaAtual = 0;

function comecarEtapa() {
    let etapa = etapa[etapaAtual];

    let numeroHtml = '';

    seuVotoPara.style.display ='none';
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

// CONTROL KEYBOARD

function clicou(n){
    alert("Clicou em: " +n);
}

function white(){
    alert("Clicou em BRANCO!");
}

function correct(){
    alert("Clicou em CORRIGE!");
}

function confirm(){
    alert("Clicou em CONFIRMA!");
}

// START STEP

comecarEtapa();