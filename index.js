const prompt = require('prompt-sync')();

console.log("Bem vindo heroi!\nAntes de começamos sua aventura precisamos saber seu nome!");
let nome = prompt("insira o nome do heroi:");
let xpUsuario = 0;
let xpDropado = 200;
let nivel = "Ferro";
let laco = 0;
console.log("Pronto, com isso feito finalmente poderemos iniciar nova aventura!");
do{
    console.log("Voce encontrou um inimigo!");
    let decisao1 = prompt("Deseja lutar?\ns para lutar ou n para fugir: ");
    while(dicisao1 != "end"){
            switch(decisao1){
            case "s": 
                console.log("Voce derrotou um inimigo e ganhou " + xpDropado + "experiencia.");
                xpUsuario += xpDropado;
                decisao1 ="end";
                break;
            case "n":
                console.log("Voce conseguiu fugir do inimigo!");
                decisao1 = "end";
                break;
            default:
                console.log("Selecione uma opção valida!");
                decisao1 = prompt("Deseja lutar?\ns para lutar ou n para fugir: ");
                break;
        }
    }
    console.log("Deseja continuar a aventura?");
    let decisao2 = prompt("s para continuar a aventura ou n para encerrar a aventura: ");
    while(decisao2 != end){
        switch(decisao2){
            case "s": 
                console.log("Voce decidiu continuar sua aventura!");
                decisao2 ="end";
                break;
            case "n":
                console.log("Voce encerrou sua aventura!");
                decisao2 = "end";
                laco = 1;
                break;
            default:
                console.log("Selecione uma opção valida!");
                decisao2 = prompt("s para continuar a aventura ou n para encerrar a aventura: ");
                break;
        }
    }
    if(xpUsuario<=1000){
        nivel = "Ferro";
    }else if(xpUsuario>= 1001 && xpUsuario<=2000){
        nivel = "Bronze";
        xpDropado =400;
    }else if(xpUsuario>= 2001 && xpUsuario<=5000){
        nivel = "Prata";
        xpDropado = 600;
    }else if(xpUsuario>= 5001 && xpUsuario<=7000){
        nivel = "Ouro";
        xpDropado = 800;
    }else if(xpUsuario>= 7001 && xpUsuario<=8000){
        nivel = "Platina";
    }else if(xpUsuario>= 8001 && xpUsuario<=9000){
        nivel = "Ascendete";
    }else if(xpUsuario>= 9001 && xpUsuario<=10000){
        nivel = "Imortal";
    }else if(xpUsuario>= 10001){
        nivel = "Radiante";
    }
    console.log("O Herói de nome " + nome + " está no nível de " + nivel + "!");
}while(laco != 1)
console.log("O Herói de nome " + nome + " encerrou sua jornada no nível de " + nivel + "!\nXp total do Herói: " + xpUsuario);