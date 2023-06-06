//método map

var estudantes = [
    {nome: 'Vitor', nota: 8.3},
    {nome: 'Pedro', nota: 5.5},
    {nome: 'Milena', nota: 4.3},
    {nome: 'Rafaela', nota: 7.8}
];

//normalizar: maior nota passa a ser 10

let notas = [];

for(i of estudantes){
    notas.push(i.nota);
}; //percorreu dentro do vetor estudantes e pegou a nota de cada um e jogou dentro a array notas

let maiorNota = Math.max(...notas); // ... permite que expressões expandam o conteúdo de arrays em locais onde múltiplos elementos são esperados.

let notasNormalizadas = estudantes.map(estudantes => (estudantes.nota*10/maiorNota).toFixed(2)); //pegou os valores do vetor estudantes e fez o calculo *10/maiorNota

console.log('notas antigas: ' + notas);
console.log('*****************************');
console.log('notas atualizadas: ' + notasNormalizadas);


//o método map() não modifica o array original, ele retorna um novo array com os itens resultantes do mapeamento.


//método map

var pessoas = [
    {nome: 'Vitor', nota: 8.3},
    {nome: 'Pedro', nota: 5.5},
    {nome: 'Milena', nota: 4.3},
    {nome: 'Rafaela', nota: 7.8}
];


let povoado = [];

for(i of pessoas){
    povoado.push(i.nome);
};

var vitorizacao = 'vitor';

let nomesAtualizados = pessoas.map(pessoas => (pessoas.nome = vitorizacao)); 

console.log('************************');
console.log('nomes antigos: ' + povoado);
console.log('*****************************');
console.log('nomes atualizados: ' + nomesAtualizados);

