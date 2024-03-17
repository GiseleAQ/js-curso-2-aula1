//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
//let numeroSecreto = 7;
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    //(texto,'Brazilian Portuguese Female'), {rate:1.2};
}

function exibirMnesagemInicial(){
    exibirTextoNaTela ('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}
exibirMnesagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela( 'h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        //exibirTextoNaTela('p', 'Você acertou o número secereto!!!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p','O número secreto é menor!!');
        } else {
            exibirTextoNaTela('p','O número secreto é maior!!');
        }
        //tentativas = tentativas + 1;
        tentativas ++;
        limparCampo();
    }
    //console.log(chute == numeroSecreto);
    //console.log('O botão foi clicado');
    //console.log(numeroSecreto);
}

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados = [];
    }
   //return parseInt(Math.random()* 10 + 1);
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
}
}

function limparCampo(){
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMnesagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    //exibirTextoNaTela ('h1', 'Jogo do Número Secreto');
    //exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}



