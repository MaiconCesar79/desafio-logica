const prompt = require('prompt-sync')();

console.log("Bem vindo heroi!\nAntes de começamos sua aventura precisamos saber seu nome!");
let nome = prompt("insira o nome do heroi:");
let experiencia = 0;
let xpDropado = 200;
let nivel = "Ferro";
let laco = 0;
let opcao;
let opcao2 = "";
console.log("Pronto, com isso feito finalmente poderemos iniciar nova aventura!");
while (laco != 1){
    console.log("Voce encontrou um inimigo!");
    opcao = prompt("Deseja lutar?\ns para lutar ou n para fugir: ");
    while (opcao != "end") {
        switch (opcao) {
            case "s":
                console.log("Voce derrotou um inimigo e ganhou " + xpDropado + "experiencia.");
                experiencia += xpDropado;
                opcao = "end";
                break;
            case "n":
                console.log("Voce conseguiu fugir do inimigo!");
                opcao = "end";
                break;
            default:
                console.log("Selecione uma opção valida!");
                opcao = prompt("Deseja lutar?\ns para lutar ou n para fugir: ");
                break;
        }
    }
    console.log("Deseja continuar a aventura?");
    opcao2 = prompt("s para continuar a aventura ou n para encerrar a aventura: ");
    while (opcao2 != "end") {
        switch (opcao2) {
            case "s":
                console.log("Voce decidiu continuar sua aventura!");
                opcao2 = "end";
                break;
            case "n":
                console.log("Voce encerrou sua aventura!");
                opcao2 = "end";
                laco = 1;
                break;
            default:
                console.log("Selecione uma opção valida!");
                opcao2 = prompt("s para continuar a aventura ou n para encerrar a aventura: ");
                break;
        }
    }
    if (experiencia <= 1000) {
        nivel = "Ferro";
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        nivel = "Bronze";
        xpDropado = 400;
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        nivel = "Prata";
        xpDropado = 600;
    } else if (experiencia >= 5001 && experiencia <= 7000) {
        nivel = "Ouro";
        xpDropado = 800;
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        nivel = "Platina";
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        nivel = "Ascendente";
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        nivel = "Imortal";
    } else if (experiencia >= 10001) {
        nivel = "Radiante";
    }
    console.log("O Herói de nome " + nome + " está no nível de " + nivel + "!");
}
console.log("O Herói de nome " + nome + " encerrou sua jornada no nível de " + nivel + "!\nXp total do Herói: " + experiencia);