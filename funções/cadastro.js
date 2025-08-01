const prompt = require('prompt-sync')();


let nome = prompt('Digite seu nome: ');
let idade = parseInt(prompt('Digite a sua idade:'));
let salario = parseFloat(prompt('Salario: '));

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Salario: R$ ${salario.toFixed(2)}`);

//Para confirmar
let continuar =prompt('Deseja continuar o cadastro? (s/n)');
if (continuar.toLowerCase() === 'n') {
    console.log('Cadastro realizado com sucesso.')
} else (continuar.toLocaleLowerCase() === 's'); {
    console.log('Vamoscontinuar...')
}


