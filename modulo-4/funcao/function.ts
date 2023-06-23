// Function (Named Function)

function somarNumeros(num1 : number, num2 : number) : number {
    return num1 + num2;
}

const  resultados = somarNumeros(3,4);

console.log(resultados);

// Função Anônima (Function Expression)

const saudar = function (mensagem : string) {
    return mensagem;
};

console.log(saudar('Olá developer'))


// Arrow Function Expression (Muito utilizada)

const saudar2 = (mensagem : string) => {
    return mensagem;
};

console.log(saudar2('Olá'))

// Function constructor

const saudar3 = new Function('mensagem', 'return " Fala " + mensagem');

console.log(saudar3('Pessoal'));

