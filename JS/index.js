const elemento = document.getElementById('elemento');
const painelExibicao = document.querySelector('.title-item'); // Fica lá em cima
var libera1 = true, libera3 = true; // Corrije alguns bugs
var rotina3Cont = 0;

const infoElemento = document.querySelector('.info-elemento'); // Será removido logo no inicio
infoElemento.addEventListener('animationend', (anima) => {
    if(anima.animationName == 'entrada-info-elemento-exit'){
        infoElemento.remove();
    }
})

elemento.addEventListener('click', rotinaElemento1);

// Uma classe adicionada deve rosolver o problema 1
function rotinaElemento1(){
    if(libera1){
        libera1 = false;

        /* Porque essa variavel libera existe? 
        Para evitar a execução do mesmo codigo
        varias vezes */

        elemento.classList.add('transformed');
        elemento.innerHTML = 'Kevin Willyan'
        painelExibicao.innerHTML = '2 - Após realizar a ação do elemento anterior, deve ser criado um elemento que ao ser clicado apague o quadrado criado anteriormente';

        rotinaElemento2();
    }
}

function rotinaElemento2(){
    // Cria o elemento que remove o quadrado
    var apagaQuadrado = document.createElement('div');
    var body = document.querySelector('body');
    apagaQuadrado.setAttribute('class', 'removerQuadrado');
    apagaQuadrado.innerHTML = '<ion-icon name="close-outline"></ion-icon>'
    body.appendChild(apagaQuadrado);

    // Após ele existir será execultado isso
    var apagaQuadradoPronto = document.querySelector('.removerQuadrado');
    apagaQuadradoPronto.addEventListener('click', () => {
        elemento.remove();
        apagaQuadradoPronto.remove();
        rotinaElemento3();
    });

}

function rotinaElemento3(){
    painelExibicao.innerHTML = '3 - Após realizar a ação do elemento anterior, deverá ser criado um novo elemento que ao passar o mouse por cima crie um novo quadrado de diferentes cores, no máximo 10 vezes.';

    var elementoCores = document.createElement('div');
    var section = document.querySelector('.section1');
    elementoCores.setAttribute('class', 'criadorCores');

    // Aparece o lugar onde fica as cores
    var section2 = document.querySelector('.section2');
    section2.classList.remove('section2-esconder');

    section.appendChild(elementoCores);

    var elementoCoresPronto = document.querySelector('.criadorCores');
    var localDeCriacaoQuadrados = document.querySelector('.section2 .grupo');

    elementoCoresPronto.addEventListener('mouseover', () => {
        if(rotina3Cont < 10){
            rotina3Cont++;
            var quadrado = document.createElement('div');
            
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
                quadrado.style.backgroundColor = color;
            }

            localDeCriacaoQuadrados.appendChild(quadrado);
        }
        if(rotina3Cont >= 10){
            if(libera3){
                libera3 = false;
                rotinaElemento4();

                /* Porque essa variavel libera existe? 
                Para evitar a execução do mesmo codigo
                varias vezes */
            }
        }
    });
}

function rotinaElemento4(){
    painelExibicao.innerHTML = '4 - Após realizar a ação do elemento anterior, os quadrados criados deverão ser removidos.';
    var quadrados = document.querySelectorAll('.section2 .grupo div');
    // Rotina para apagar todos os quadrados
    for(var i = 0; i < quadrados.length; i++){
        quadrados[i].remove();
    }
    setTimeout(rotinaElemento5, 4000);
}

// Melhor parte
function rotinaElemento5(){
    var body = document.querySelector('body');
    var conteiner = document.createElement('section');
    var nome = document.createElement('div');
    var turma = document.createElement('div');

    // Música adicionada via JavaScript
    var musica = new Audio('resources/Melanie-Martinez-Soap-Solstis-Remix.mp3');
    musica.loop = true;
    musica.volume = 1;
    musica.play();

    conteiner.setAttribute('class', 'conteiner-final');
    body.appendChild(conteiner);

    // Quando o elemento existir
    var conteinerPronto = document.querySelector('.conteiner-final');
    nome.innerHTML = 'Kevin Willyan';
    turma.innerHTML = 'Turma: 1021-A';
    nome.setAttribute('class', 'conteiner-final-nome');
    turma.setAttribute('class', 'conteiner-final-turma');
    conteinerPronto.appendChild(nome);
    conteinerPronto.appendChild(turma);
}