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

// Propriedade 'readonly' (se deseja proibir que não modifique um determinado objeto use o readonly)


interface Pessoa05{
    nome : string;
    funcao : string;
    linguagem : string;
    readonly email : string; // 
}

function onboarding05(pessoa : Pessoa04){
    return (
        'Bem vinda ' + 
        pessoa.nome +
        '! ' +
        'Sua funcao aqui será ' +
        pessoa.funcao +
        ' . ' +
        'Você trabalhará com a linguagem : ' +
        pessoa.linguagem + ' . ' +
        'Seu email será: ' + pessoa.email
    );
}

console.log(onboarding05(
    { nome : 'Iagatha',
 funcao: 'Desenvolvedora',
  linguagem : 'Java',
  email : 'hzdkv@example.com'
}));

// Tipos de extensões (herança)

interface Mae{
    nome : string;
}

interface Pai {
    sobrenome : string;
}

interface Filho extends Mae, Pai{
   idade : number;
}

const filho : Filho = {
    nome: 'josé',
    sobrenome : 'carlos',
    idade : 23
};

console.log(filho);

// Tipo de interseções

interface Cachorro {
    tipo : string;
}

interface Gato {
    tipo : string;
}

type Animal = Cachorro & Gato;filho

// Generic Objects

type Admin = {
    nome : string;
    email : string;
    admin : true;
}

type Usuario = {
    nome : string;
    email : string;
}

const usuario : Usuario = {
    nome : 'Iagatha',
    email : 'hzdkv@example.com'
};

const admin : Admin = {
    nome : 'Iagatha',
    email : 'hzdkv@example.com',
    admin : true
}

function acessarSistema<T>(usuario : T) : T{ // Generic T
    return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));


/*function acessarSistema(usuario : Usuario) : Usuario {
    return usuario;
} */

//console.log(acessarSistema(usuario));