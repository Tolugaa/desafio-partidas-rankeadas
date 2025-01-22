function calculator(vitorias, derrotas){
    return vitorias - derrotas
}
calculator(100,30)
let saldo = calculator(100,30)
let rank = ""
if(saldo < 10){
    rank = "Ferro"
}
else if(saldo < 20){
    rank = "Bronze"
}
else if(saldo < 50){
    rank = "Prata"
}
else if(saldo < 80){
    rank = "Ouro"
}
else if(saldo < 90){
    rank = "Diamante"
}
else if(saldo < 100){
    rank = "Lendário"
}
else {
    rank = "Imortal"
}
console.log(`O Herói tem saldo de ${saldo} está no Rank ${rank}`)