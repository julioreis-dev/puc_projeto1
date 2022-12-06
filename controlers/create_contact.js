function insertdata() {
    let novoid = Math.floor(Math.random() * 9999);
    // console.log(novoid)          
    if ($("#form-contato")[0].checkValidity()) {
      let nome = $('#inputNome').val();
      let sobrenome = $('#inputSobrenome').val();
      let email = $('#inputEmail').val();
      let nomeprod = $('#inputNomeprod').val();
      let precoprod = $('#inputPrecoprod').val();
      let descricao = $('#inputDescricao').val();
      console.log(nome);

      let filedata = {
        "id": novoid,
        "nome": nome,
        "sobrenome": sobrenome,
        "email": email,
        "nomeprod": nomeprod,
        "image": "http://lorempixel.com.br/200/120/food/1",
        "precoprod": precoprod,
        "descricao": descricao
      }
      db.dados.push(filedata);
      localStorage.setItem('db_contato', JSON.stringify(db));
      console.log(db.dados);
      $("#form-contato")[0].reset();
      abreModal(2);

    }
    else {
      console.log(novoid)
      abreModal(1);
    }
    $("#Modalform").modal('hide');
    exibeContatos();
    return;
  };