const prompt = require('prompt-sync')()
const area = require('./modulo.js')
console.log("Digite\n1:Para circulos\n2:Para triangulo\n3:Para retangulos");
let ent = prompt()
if(ent==1){
    ent=prompt('Qual é o raio')
    console.log('A area é '+area.circulo(ent));
}
if(ent==2){
    ent=prompt('Qual é a altura ')
    let ent1=prompt('Qual é a base ')
    console.log('A area é '+area.triangulo(ent, ent1));
}
if(ent==3){
    ent=prompt('Qual é o altura')
    let ent1 = prompt('Qual é a base ')
    console.log('A area é '+area.retangulo(ent, ent1));
}