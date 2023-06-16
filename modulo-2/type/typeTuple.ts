
// Uso simples de Tuplas em TypeScript

let pessoa: [string, string, number];
pessoa = ['Iagatha', 'Developer', 23];
console.log(pessoa);

//Acessando o valor da Tupla

let pessoa1: [string, string, number];
pessoa1 = ['Iagatha', 'Developer', 23];
console.log(pessoa1[0]);


//Outra forma de usar Tuplas em TypeScript com labels

let pessoa2: [nome: string, posicao: string, idade: number] = ['Iagatha', 'Developer', 23];
console.log(pessoa2);


// Usando Tuplas com Spread Operator

let listaFrutas : [string, ...string[]] = ['abacaxi', 'laranja', 'manga'];
console.log(...listaFrutas);

// Lista Heterogenea de Tupla

let listaFrutas2 : [number, boolean, ...string[]] = [2, true, ...listaFrutas];
console.log(listaFrutas2);


// Uso de função com Tuplas

function listarPessoas(nomes : string[], idades : number[]){
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['iaga', 'Lisa'], [23, 25]);
console.log(resultado);

//labeled Tuples com Spread Operator numa função

type Nome = | [primeiroNome : string, sobreNome : string]
            | [primeiroNome :string, nomeMeio : string, sobrenome: string]

function criarPessoa(...nome : Nome){
    return [...nome];
}
console.log(criarPessoa('iagatha', 'Souza'));
console.log(criarPessoa('iagatha', 'souza', 'vidal'));



