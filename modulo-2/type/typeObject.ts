export {}
// basico do uso do type Object

const pessoa = {
    nome: 'Iagatha',
    sobrenome : 'Souza', 
    idade : 23,
    funhcao : 'Desenvolvedora'
};

console.log(pessoa);

// object como parâmetros de função (eles podem ser anonimos)

function onboarding01(funcionario : {nome : string}){
    return 'Bem vindo' + funcionario.nome;
}

console.log(onboarding01({nome : 'Iagatha'}));

// object nomeados

interface Pessoa {
    nome : string;
    funcao : string;
}

function onboarding02(pessoa : Pessoa){
    return (
        'Bem vinda ' + 
        pessoa.nome +
        '! ' +
        'Sua funcao aqui será ' +
        pessoa.funcao +
        ' . '
    );
}

console.log(onboarding02({nome : 'Iagatha', funcao: 'Desenvolvedora'}));

// object como type alias 

type Pessoa03 = {
    nome : string;
    funcao : string;
    linguagem : string;
}

function onboarding03(pessoa : Pessoa03){
    return (
        'Bem vinda ' + 
        pessoa.nome +
        '! ' +
        'Sua funcao aqui será ' +
        pessoa.funcao +
        ' . ' +
        'Você trabalhará com a linguagem : ' +
        pessoa.linguagem + ' . '
    );
}

console.log(onboarding03({nome : 'Iagatha', funcao: 'Desenvolvedora', linguagem : 'Java'}));

// usando optional no object

interface Pessoa04{
    nome : string;
    funcao : string;
    linguagem : string;
    email ?: string; // ? => opcional
}

function onboarding04(pessoa : Pessoa04){
    return (
        'Bem vinda ' + 
        pessoa.nome +
        '! ' +
        'Sua funcao aqui será ' +
        pessoa.funcao +
        ' . ' +
        'Você trabalhará com a linguagem : ' +
        pessoa.linguagem + ' . '
    );
}

console.log(onboarding04({nome : 'Iagatha', funcao: 'Desenvolvedora', linguagem : 'Java'}));