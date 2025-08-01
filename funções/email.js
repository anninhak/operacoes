// valida email

function validarEmail(email) {
    if (!email.includes('@') || !email.includes('.')) {
        return {
            valido:false,
            mensagem: "Email deve contar @ e pelo menos um ponto."
        };
    }

    // verificar se @ vem antes do ponto
    let posicaoArroba = email.indexOf('@');
    let posicaoPonto = email.lastIndexOf('.');

    if(posicaoArroba >= posicaoPonto) {
        return {
            valido:false,
            mensagem:"Formato de email invalido."
        };
    }

    return {
        valido:true,
        mensagem:"Email valido"
    };
    
}

console.log(validarEmail("annaketlyn@guaira.com.br"));
console.log(validarEmail("usuario"));
console.log(validarEmail("usuario_usuariocom"));