function verificarPar(numero) {
    if (numero % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
}

verificarPar(10);


function calcular(num1, num2) {
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num1 / num2;
    return { soma, subtracao, multiplicacao, divisao };
}
calcular(10, 5);

let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}

function inverterTexto(texto) {
    return texto.split("").reverse().join("");
 }

 function contarCaracteres(texto) {
    return texto.length;
 }

 const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
 };
 
 console.log(carro.modelo);

 function mensagemPersonalizada(nome, mensagem = "Olá!") {
    console.log(`${mensagem} ${nome}!`);
 }
 
 function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
 }

 for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
       console.log("Múltiplo de 3");
    } else {
       console.log("Não múltiplo de 3");
    }
}

function verificarPalindromo(palavra) {
    const reversed = palavra.split("").reverse().join("");
    return palavra === reversed;
 }
 
 







