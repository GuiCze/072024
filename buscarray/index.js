const prompt = require('prompt-sync')()
const array = [5,7,52,41,95,36,48,25,84,24]
let cont = 0;
console.log('Digite um numero de 0 a 100 e descubra se ele esta salvo em um array oculto');
let ent=+prompt()
if(!isNaN(ent)){
    for(let i=0;i<100;i++){
        if(array[i]==ent){
            cont=i
            console.log('Acertou, ele é o '+i+'º número do array');
            break;
        }
    }
    if(cont=='0'){
        console.log("Esse numero não esta no array");
    }
}