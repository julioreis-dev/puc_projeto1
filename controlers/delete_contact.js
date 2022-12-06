function deleteContato(id) {
    // Filtra o array removendo o elemento com o id passado
    db.dados = db.dados.filter(function (element) { return element.id != id });

    alert("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
  }