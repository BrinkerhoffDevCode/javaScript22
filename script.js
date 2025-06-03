
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

