// Uso do if

const numerMax = 100;
let contador = 100;

if(contador < numerMax){
    contador++;
}
console.log(contador);

//Uso do if

const permissaoIdadeDirigir = 18;

if(permissaoIdadeDirigir >= 18){
    console.log('Você pode dirigir');
}

console.log(permissaoIdadeDirigir);

//Uso do if-else

const permissaoIdadeDirigir01 = 17;

if(permissaoIdadeDirigir01 >= 18){
    console.log('Você pode dirigir');
}else {
    console.log('Você não pode dirigir');
}

console.log(permissaoIdadeDirigir01);


// if...else if( calculo imc)

let desconto : number;
let itemContador = 14;

if(itemContador > 0 && itemContador  <= 5){
    desconto = 5;
   
}else if(itemContador > 5 && itemContador <= 10){
    desconto = 10;
}else {
    desconto = 15;
}

console.log('Voce teve um desconto de : ${desconto}% desconto');

// Ternário (? : ) - if...else

const idadeVotacao = 18;

const podeVotar = (idadeVotacao >= 18) ? 'Você é elegivel para votar.' : 'Você não é elegivel para votar.'