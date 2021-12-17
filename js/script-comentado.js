// Pegar o quadrado, 
// inserir o jogador no quadrado, 
// mudar a cor do texto, 
// mudar o jogador




var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById("jogador-selecionado");
var vencedorSelecionado = document.getElementById("vencedor-selecionado");

mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor !== null) {
        return;
    }

    let quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {     //verifica se o quadrado já foi clicado/alterado e bloqueia outra ação
        return;
    }    

    quadrado.innerHTML = jogador;   //altera o valor no quadrado pelo jogador
    quadrado.style.color = '#000';  //altera a cor da fonte no quadrado jogado

    if (jogador === 'X') {    //verifica qual jogador está jogando
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);   //altera o jogador da vez
    checarVencedor();

}

function mudarJogador(valor) {
    jogador = valor;      //atribui o jogador
    jogadorSelecionado.innerHTML = jogador;     //apresenta o X ou O em Jogador:
}

function checarVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);
;
    // let quadrados = [];
    // for (let i = 1; i <= 9; i++) {
    //     quadrados[i] = document.getElementById(i);
    // }

    //DECLARANDO COMBINAÇÕES/SEQUENCIAS DE VITORIA

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCorQuadrado(quadrado9, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }

}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    // for (let i = 1; i <= 3; i++) {
    //     quadrado[i].style.color = '#0f0';
    // }

    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function mudarVencedor(quadrado) {       //muda o valor de vencedor no placar de acordo o quadrado
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    let eIgual = false;

    if ((quadrado1.innerHTML !== '-') && (quadrado1.innerHTML === quadrado2.innerHTML) && (quadrado2.innerHTML === quadrado3.innerHTML)) { 
        eIgual = true;
    }   //checa se os valores dos quadrados são iguais; a apartir do primeiro quadrado sendo diferente de '-'

    return eIgual;
}


function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (let i = 1; i <=9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');

}