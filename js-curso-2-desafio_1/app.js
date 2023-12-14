let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio!';


function verificarAlerta(){
    console.log ('O botão foi clicado!');
}

function exibirAlerta(){
    console.log ('eu amo js');
}

function nomeCidade(){
    let nomeCidade = prompt ('Em qual cidade do Brasil esteve?');
    alert ('Estive em ' + nomeCidade + ' e lembrei de você.');
}

function soma(){
    let primeiroNumero = parseInt(prompt('Digite o primeiro número para a soma.'));
    let segundoNumero = parseInt(prompt('Digite o segundo número para a soma.'));
    let soma = (primeiroNumero + segundoNumero);
    alert(`${primeiroNumero} + ${segundoNumero} = ${soma}`)
}



                                            //Atividade aula 1, curso 2

//Atividade 01
exibirConsoleUm();

function exibirConsoleUm(){
   console.log ('Ola mundo');
}

//Atividade 02

exibirConsole('Olá mundo');

function exibirConsole(nome){
    console.log (nome);
}

//Atividade 03

numDobro('150');

function numDobro(numero){
    return console.log (numero * 2);
}

//Atividade 04

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
let media = calcularMedia(4, 7, 10);
  console.log(media);

//Atividade 05

function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);


