function deleteContato(id, opt) {
    // Filtra o array removendo o elemento com o id passado
    db.dados = db.dados.filter(function (element) { return element.id != id });

    if (opt===1){
      alert("Dados removido com sucesso!!!");
    }
    else{
      alert("Compra realizada com sucesso, Obrigado!!!");
    }   

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
  }