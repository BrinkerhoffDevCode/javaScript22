function VerificarPar(numero) {
    if (numero % 2 === 0) {
        console.log('par');
    } else {
        console.log('impar');
    }
}

VerificarPar(4);
VerificarPar(10);


function Calcular(n1, n2) {
    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const divisao = n2 !== 0 ? n1 / n2 : 'Não pode dividir por zero';
    const multiplicacao = n1 * n2;

    console.log(soma);
    console.log(subtracao);
    console.log(divisao);
    console.log(multiplicacao);
}



Calcular(2, 4);

function contagemRegressiva() {
    let numero = 10;
    while (numero >= 1) {
        console.log(numero);
        numero--;
    }
}

contagemRegressiva();

function inverterTexto() {
    texto = prompt("digite uma palavra");
    return texto.split('').reverse().join('');
}

inverterTexto();

function contarCaracteres(texto) {
    console.log(texto.length);
    return 0;
}

contarCaracteres('arma');

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

console.log(carro.modelo);

function mensagemPersonalizada(nome, mensagem = "Olá!") {
    console.log(`${mensagem} ${nome}`);
}

mensagemPersonalizada("Ana");
mensagemPersonalizada("Lucas", "Oi");

function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

console.log(media(8, 9, 10));

function multiplosTres() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) {
            console.log(`${i}: Múltiplo de 3`);
        } else {
            console.log(`${i}: Não múltiplo de 3`);
        }
    }
}

multiplosTres();

function verificarPalindromo(palavra) {
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}

console.log(verificarPalindromo("arara"));
console.log(verificarPalindromo("carro"));

function verificarSinal(numero) {
    if (numero > 0) {
        console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}

function converterTemperatura(celsius) {
    return (celsius * 9 / 5) + 32;
}

function somaSomatorio() {
    let soma = 0;
    let i = 1;

    console.log("Somatório de 1 a 100:");

    while (i <= 100) {
        soma += i;
        i++;
    }
}

function substituirPalavra(texto) {
    return texto.replace(/azul/g, "vermelho");
}


function verificarTamanho(str) {
    if (str.length > 10) {
        console.log("A string tem mais de 10 caracteres.");
    } else {
        console.log("A string tem 10 ou menos caracteres.");
    }
}


let frutas = ["maçã", "banana", "laranja", "uva", "manga"];
console.log("Terceira fruta:", frutas[2]);

function saudacao(nome, saudacao = "Bem-vindo(a)") {
    return `${saudacao}, ${nome}!`;
}


function verificarAprovacao(nota) {
    return nota >= 6 ? "Aprovado" : "Reprovado";
}

function contagemPares() {
    for (let i = 0; i <= 30; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}


function contarVogais(palavra) {
    let vogais = palavra.match(/[aeiouáéíóúâêîôûãõ]/gi);
    return vogais ? vogais.length : 0;
}


function somarArray(numeros) {
    return numeros.reduce((soma, num) => soma + num, 0);
}


function dobrarNumero(numero) {
    return numero * 2;
}


function contarPares() {
    let j = 2;
    while (j <= 20) {
        console.log(j);
        j += 2;
    }
}


function capitalizar(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function anoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

