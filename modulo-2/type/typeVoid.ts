// Funções
function logError(errorMessage: string): void {
    console.error(errorMessage);
}
logError('Error');

// Função com arrow functions

const logErrorEx = (errorMessage : string) => {
    console.log(errorMessage);
};

logErrorEx('Error');

// variaveis

let variavelExemploVoid : void;
//variavelExemploVoid = null;
variavelExemploVoid = undefined;
console.log(variavelExemploVoid);