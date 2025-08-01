// calcular o imc (indice de massa corporal)
function calcularIMC(peso, altura, mostrarCategoria = true) {
const imc = peso / (altura * altura);
    if  (!mostrarCategoria) {
    return imc.toFixed(2);
}

// Determinar a categoria a imc 

let categoria;
    if (imc < 18.5) {
        categoria = "abaixo do peso";
    } else if (imc < 25) {
        categoria = "peso normal";
    } else if (imc < 30) {
        categoria = "sobrepeso";
    } else if (imc < 35) {
        categoria = "obesidade grau I";
    } else if (imc < 40) {
        categoria = "obesidade grau II";
    } else {
        categoria = "obesidade grau III";
    }

    return {
        imc:imc.toFixed(2),
        categoria: categoria
    };
}
    console.log(calcularIMC(57, 1.67));
console.log(calcularIMC(74, 1.73))
console.log(calcularIMC(84, 1.73))
console.log(calcularIMC(99, 1.73))
console.log(calcularIMC(110, 1.73))
console.log(calcularIMC(200, 1.73))
