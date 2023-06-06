//reduce

var numeros = [1,2,3,4,5];

const somaNum = (total, i) => total + i;

//O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

var somatorio = numeros.reduce(somaNum);

console.log(somatorio);
console.log('***********');


var notas = [5.5,6.7,8.3,9.2,3.6,4.2];

const somaMedia = (total, i) => total + i;

var n = notas.length;

var media = notas.reduce(somaMedia)/n;

console.log(`A média das notas é: ${media}`);

