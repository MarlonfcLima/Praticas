let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
//A função da linha 20 trará o retorno na variável abaixo.
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//Função com parâmetros, sem retorno.
function declararTextoEmTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

declararTextoEmTela('h1', 'Número Secreto!');
declararTextoEmTela('p', 'Escolha um número entre 1 e ' + numeroMaximo);

function exibirMensagemInicial() { 
    declararTextoEmTela('h1', 'Número Secreto!'); 
    declararTextoEmTela('p', 'Escolha um número entre 1 e ' + numeroMaximo);
}

exibirMensagemInicial()

//Função sem retorno e sem parâmetro.
function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        declararTextoEmTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas}${palavraTentativa}!`;
        declararTextoEmTela('p', mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            declararTextoEmTela('h1', 'Errrroouu!');
            declararTextoEmTela('p', 'O número secreto é menor!')
        } else {
            declararTextoEmTela('h1', 'Errrroouu!');
            declararTextoEmTela('p', 'O número secreto é maior!')
        }
        tentativas++
        limparCampo();
    }
}

reiniciarJogo();

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
}

//Função sem parâmetros, com retorno
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;

    if(quantidadeDeElementos == numeroMaximo){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


