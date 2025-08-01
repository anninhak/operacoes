console.group("===🎮 SISTEMAS DE PONTUAÇAO DO JOGO === 🎮");

let pontuacao = 0;
let nivel = 1;
let vidas = 3;

// Simulando as rodadas do jogo
for (let rodada = 1; rodada <= 8; rodada++ ); {
    let pontosRoada = (Math.random() * 101);
}

console.log(`\n--- RODADA ${rodada} ---`);
console.log(`Pontos obtidos: ${pontosRodada}`);

// adicional pontos a pontuaçao total
pontua += pontosRodada;

// bonus  baseado na performace 
if (pontosRodadan >= 80) {
    console.log("⭐️ EXCELENTE! Bônus de 20 pontos!");
    pontuação += 20;
} else if (pontuacao >=60) {
    console.log("⭐️ BOM! Bônu de 10 pontus!");
    console.log("😔RUIM! PERdeu 1 vida")
    vidas--;
    if (vidas <= 0) {
        console.log("☠️GAME OVER!☠️ Suas vidas acabaram!");
        break;
    }
}

// Sistema de   progressão de nivel
if (pontuacao >= nivel * 150) {
    nivel++;
    console.log(`🚀SUBIU DE NIVEL! Aora você esta no nivel ${nivel}`);
    console.log("❤️Vida extrema ganha!");
    vidas++;
}

// Exibindo status atual 
console.log(`Pontuação total: ${pontuacao}`);
console.log(`Nivel atual: ${nivel}`);
console.log(`Vidas restantes: ${viads}`);

// Pausa entre as roads 
console.log("⌛Preparando a proxima rodada...\n");

// começa aqui - 01 de agosto****
//relatorio final do jogo
console.log("\n" + "=".repeat(40));
console.log("RELATORIO FINAL DO JOGO");
console.log("=".repeat(40));
console.log(`🏆 Pontuação Final: ${pontuacao} pontos`);
console.log(`🚩 Nivel Alcançado: ${nivel}`);
console.log(`💓 Vidas Restantes: ${vidas}`);

// sistema de classificaçao
let classificacao;
if(pontuacao >= 600) {
    classificacao = "🥇 1º LUGAR!";
} else if (pontuacao >= 450)  {
    classificacao = "🥈 2º LUGAR!";
} else if (pontuacao >=300) {
    classificacao = "🥉 3º LUGAR";
} else if (pontuacao >= 150) {
    classificacao = "💩 INICIANTE";
}

console.log(`🏅 Classificação: ${classificacao}`);