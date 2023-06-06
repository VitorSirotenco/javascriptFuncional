//função comum

function soma (a,b){
    return a+b;
};

console.log(soma(3,4));

//função anonima

(function(x,y){
    console.log(x+y);
})(5,5);

//function expression

const adicao = function(x,y){
    return x + y;
};

let resultado = adicao(4,8);

console.log('O resultado é: ' + resultado);

//arrow function

const somav2 = (x,y) => {
    return x + y;
};

console.log('arrow function : ' +somav2(5,5));

//arrow function simplificada

const somav3 = (x,y) => x + y;
console.log('arrow function simplificada: ' + somav3(2,2));


//função invocada

(()=>{console.log('ola mundo, isso eh uma funcao invocada')})();


//SPREAD OU ESPALHAMENTO

const somav4 = (...numeros)=>{
    console.log(numeros);
    let aux = 0;
    for(i of numeros){ // para percorrer os numeros dentro da array
        aux += i;
    }
    
    return aux;
}

console.log('SPREAD: ' + somav4(5,6,3,5,6,2,4,));

//Operador condicional ternario

x = 8;

const resultado2 = x % 2 == 0 ? 'par' : 'impar'; //? seria o if e : o else

console.log(resultado2);
