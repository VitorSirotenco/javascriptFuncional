var numeros = [1,2,3,4,5,6,7,8,9];

const par = (i) => i % 2 ==0;
const impar = (i) => i % 2 ==1;

//O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

console.log('pares: ' + numeros.filter(par));
console.log('impares: ' + numeros.filter(impar));



