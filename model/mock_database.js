var db_contatos_inicial = {
    dados: [
        // {   
        //     id: 0001,
        //     nome:'Juliana',
        //     sobrenome: 'costa',
        //     email: 'juli@gmail.com',
        //     nomeprod: 'Carrinho de bebe',
        //     image: 'http://lorempixel.com.br/200/120/food/1',
        //     precoprod: 350.54,
        //     descricao: 'Carrinho de bebe com capa de proteção de chuva'
        // },
        // {   
        //     id: 0002,
        //     nome:'Manuela',
        //     sobrenome: 'firmino',
        //     email: 'manu@gmail.com',
        //     nomeprod: 'bolsa de bebe',
        //     image: 'http://lorempixel.com.br/200/120/food/2',
        //     precoprod: 78.32,
        //     descricao: 'Bolsa de 20 litros'
        // },       
    ]
}

var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial;
};

function updateContato(id, contato){
    let index = db.dados.map(obj => obj.id).indexOf(id);

    db.dados[index].nome = contato.nome,
    db.dados[index].sobrenome = contato.sobrenome,
    db.dados[index].email = contato.email,
    db.dados[index].nomeprod = contato.nomeprod,
    db.dados[index].image = contato.image,
    db.dados[index].precoprod = contato.precoprod,
    db.dados[index].descricao = contato.descricao,

    alert('Dados alterados com sucesso!!!');
    localStorage.setItem('db_contato', JSON.stringify(db));
}
