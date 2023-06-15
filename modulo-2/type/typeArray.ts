// Uso de Colchetes

let frutas : string[] = ['abacaxi', 'laranja', 'manga'];
console.log(frutas[1]);

// Array Object (Objeto Array)

let frutas1 : Array<string> = ['abacaxi', 'laranja', 'manga'];
console.log(frutas[0]);

// Adicionando mais strings com método 'push'

let materias : Array<string> = ['português', 'matemática', 'história'];
console.log(materias);
materias.push('geografia');
console.log(materias);

//Identificando tamanho do array com metod length

let materias1 : Array<string> = ['português', 'matemática', 'história'];
console.log(materias1.length);


//Exemplo de array com Spread Operator

let listaNumero = [0,1,2,3,4,5];
listaNumero = [... listaNumero, 6,7,8,9,10];

console.log(listaNumero);

//Exemplo de array com laço de iteração

let linguagem : string[] = new Array('Java', 'JavaScript', 'C#');

function funcaolinguagens(linguagens: string[]){
    for(let i = 0; i < linguagens.length; i++){
        console.log(linguagem[i]);
    }
}
console.log(linguagem);