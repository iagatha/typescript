// While

let contador01 = 0;

while(contador01 < 5){
    console.log(contador01);
    contador01++;

}

let numero = 1;

while(numero <= 20){
    if(numero % 5 == 0){
        console.log('O primeiro número múltiplo de 5 entre 1 a 20 é :', numero);
        break;
    }
    numero++;
}

let contadorUsuario = 0;

const usuario : string[] = ['Glaucia', 'Jurema', 'Lucia'];

while(usuario[contadorUsuario]) {
    console.log('Usuarios : ', usuario[contadorUsuario]);
    contadorUsuario;
}

// do...while

let contador02 = 0;

do{
    console.log(contador02);
    contador02++;
}while(contador02 < 5);


