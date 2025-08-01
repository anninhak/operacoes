// while loop
console.log("*** jogo de adivinhação ***");
const numeroSecreto = 42;
let tentativa = 0;
let palpite = 0;
let acertou = false;

// simulando palpites aleatorios 
const palpitesPossiveis = [25, 50, 30, 40, 35,49, 48];
let indicePalpite = 0

while (!acertou && tentativa < 6){
    tentativa++
    palpite = palpitesPossiveis[indicePalpite];
    indicePalpite++;

    console.log(`Tentativa ${tentativa}: Palpite = ${palpite}`);

    if (palpite === numeroSecreto) {
        acertou = true ;
        console.log(`🤩 Parabens! você acerto em ${tentativa} tentativas!`)
    }   else if  (palpite < numeroSecreto) {
        console.log("Muito baixo! Tente um numero maior!🔼");
    } else {
        console.log("Muito alto! Tente um numero menor!🔽");
    }
}
    if(!acertou) {
        console.log(`Game Over! *** O numero era ${numeroSecreto}`);
    }