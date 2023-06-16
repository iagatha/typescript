// Enum numérico

enum Idioma{
    Português,
    Francês,
    Inglês,
    Espanhol,
}
console.log(Idioma);

// String Enum ("Não Tão recomendável")

enum Dia{
    Domingo = 'Dom',
    Segunda = 'Seg',
    Terça = 'Ter',
    Quarta = 'Qua',
    Quinta = 'Qui',
    Sexta = 'Sex',
    Sabado = 'Sab',
}

console.log(Dia.Segunda);

//Com acessar um valor de um enum com uma chave: (usando o const)

const enum Comida{
    Churraco = 'Churrasco',
    Hamburguer = 'Hamburger',
    Pizza = 'Pizza',
    Mamão = 'Mamão',
    Torta = 'Torta',
}

function comida(c: Comida){
    return 'Comidas bem apetitosas';
}

console.log(comida(Comida.Churraco));
console.log(comida(Comida.Hamburguer));
console.log(comida(Comida.Torta));


//Quando usar enum?

enum Tarefa{
    Todo,
    Progress,
    Done,
}

const concluidaTarefa = {
    id: 1,
    status : Tarefa.Done,
    descricao : 'Parabens! Tarefa foi concluida com sucesso',
};

if(concluidaTarefa.status == Tarefa.Done){
    console.log('Enviar email : Tarefa Concluida');
}