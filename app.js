let listaDeNumeroSorteado = [];
let numeroMaximo = 5;
let numeroMinimo = 1;
let tentativas = 0;
mensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + numeroMinimo);

    if (listaDeNumeroSorteado.length == numeroMaximo) {
        listaDeNumeroSorteado = [];
    }
    if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); 
    } else {
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado);
        return numeroEscolhido;
    }
}
function limparCampo() {
    let campinho = document.querySelector("input");
    campinho.value = "";
}
 
function alterarTexto(texto,tag) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
} 
function mensagemInicial() {
numeroSecreto = gerarNumeroAleatorio ();    
alterarTexto("Bem vindo ao jogo do número secreto!" , "h1"); 
alterarTexto (`Escolha um número entre ${numeroMinimo} e ${numeroMaximo}!` , "p");
}
function verificarChute() {
    let chute = document.querySelector("input").value;
    tentativas = tentativas + 1;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    
    if (chute == numeroSecreto) {
        alterarTexto ("Parabéns! Você conseguiu!" , "h1");
        alterarTexto (`Você conseguiu com um total de ${tentativas} ${palavraTentativa}!` , "p");
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    if (chute != numeroSecreto) {
        alterarTexto ("ERROU!!!" , "h1");
        if (chute > numeroMaximo || chute < numeroMinimo) {
            alterarTexto("O número deve estar entre 1 e 10!" , "p");
        } 
        else if (chute > numeroSecreto) {
            alterarTexto ("O número secreto é menor!" , "p");
        }
        else if (chute < numeroSecreto) {
            alterarTexto ("O número secreto é maior!" , "p");
        }
    }
    limparCampo();
}

function verificarNJ() {
    tentativas = 0;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}