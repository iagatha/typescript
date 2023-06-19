// Tipo unknown 
let valorVariavel : unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi';

console.log(valorVariavel);

// Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos;

/*let valor : unknown;

let valor1 : boolean = valor;
let valor2 : string = valor;
let valor3 : any = valor;
let valor4 : any[] = valor;

*/

// Diferença entre 'any' vs 'unknown'

/*let coisaAny : any;
let coisaUnknown : unknown;

console.log(coisaAny.toFixed(2));

console.log(coisaUnknown.toFixed(2));*/