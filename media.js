// calculando a media de duas notas

function calcularmedia (nota1,nota2) {
    var media = (nota1 + nota2) / 2;
    if(media >=7) {
        console.log("aluno aprovado com a media" + media);
    } else {
        console.log("aluno reprovado com a media:" + media);
    }
}

calcularmedia(8,6); // resultado acima
calcularmedia(5,6); // rultado abaixo