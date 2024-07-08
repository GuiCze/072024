function parOuImpar(numero){
    let array = numero.split('');
    let soma = 0;
    array.forEach(element => {
        soma+=+element;
    });
    if(soma%2==0){
        console.log(numero+" é impar");
    }else{
        console.log(numero+" é par");
    }
}
const prompt=require('prompt-sync')
console.log("digite um numero para saber se ele é par ou impar");
let entrada=prompt()()
if(!isNaN(entrada)){
    parOuImpar(entrada);
}else{
    console.log('Numero invalido');
}