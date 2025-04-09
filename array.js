// 1. lista de frutas

const frutas = ["maça", "banana", "uva", "morango", "manga"];
console.log("primeira fruta:",frutas[3]);
console.log("ultima fruta:",frutas[frutas.length -1]);
console.log("total de frutas:",frutas.length);

// a funçao lenght retorna o numeros de elementos do array

// 2. encontrando elementos 

const alunos = [
    { nome: "anna", nota: 7.5},
    { nome: "bruno", nota: 9.0},
    { nome: "carla", nota: 6.5},
    { nome: "diego", nota: 8.0},
    { nome: "mateus", nota: 10.0},
];

const alunoNotaAlta = alunos.find(aluno => aluno.nota > 8);
console.log("primeiro aluno com notam> 8:",alunoNotaAlta);

const  temNota10 = alunos.some(aluno => aluno.nota ===10);
console.log("Existe aluno com nota 10?", temNota10);
// variavel boolena, onde traz resultados true ou false 

const todosMaiorQue5 = alunos.every(aluno => aluno.nota > 5);
console.log("todos tem nota > 5?", todosMaiorQue5); // true

// 3. manipulando arrays 
 
const numeros = [];
numeros.push(10,20,30); // adicionar numeros ao final do array 
numeros.unshift(5); // adicionar o numero 5 no inicio 
console.log("Array apos adiçoes:", numeros); // [5, 10, 20, 30]
numeros.pop(); // remover o ultimo elemento 
numeros.shift(); // remover o primeiro elemento
console.log("Array final:", numeros); // [10, 20]

