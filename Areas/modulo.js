function circulo(r){
    let a = r*r*3.14159265359;
    return a;
}
function triangulo(a, b){
    let c = a*b/2;
    return c; 
}
function retangulo(a, b){
    let c = a*b;
    return c; 
}

module.exports.circulo = circulo;
module.exports.triangulo = triangulo;
module.exports.retangulo = retangulo;