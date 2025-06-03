
function VerificarPar(numero) {
    if (numero % 2 === 0) {
        console.log('par');
    } else {
        console.log('impar');
    }
}

VerificarPar(4);
VerificarPar(10);

//let numeroUsuario = parseInt(prompt("Digite um número:"));
//VerificarPar(numeroUsuario);



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

//let n1 = parseFloat(prompt("Digite seu primeiro número:"));
//let n2 = parseFloat(prompt("Digite seu primeiro número:"));

Calcular(n1, n2);

let numero = 10;
while (numero >= 1) {
    console.log(numero);
    numero--;
}

function inverterTexto() {
    texto = prompt("digite uma palavra");
    return texto.split('').reverse().join('');
}

inverterTexto();

function contarCaracteres(texto) {
    return texto.length;
}

contarCaracteres();

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

function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

console.log(media(8, 9, 10));

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(`${i}: Múltiplo de 3`);
    } else {
        console.log(`${i}: Não múltiplo de 3`);
    }
}

function verificarPalindromo(palavra) {
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}

console.log(verificarPalindromo("arara"));  // true
console.log(verificarPalindromo("carro"));  // false



