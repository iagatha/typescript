// Never - Throw Exception

function error(message : string) : never {
    throw Error(message);
}

console.log(error('Error de mensagem'));

// Never inferido automaticamente

function rejectMessage(){
    return error('Error de mensagem');
}

console.log(rejectMessage());

// Função que contém loop infinito retorna o tipo never




// Diferença entre os tipos : 'never' X 'void'

//const algumaCoisaVoid : void = null;
//const algumaCoisaNever : never = null; 


