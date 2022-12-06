function updatedata() {
    let campoId = $("#inputId1").val();
    console.log(campoId)
    if (db.dados.id == "") {
      displayMessage("Selecione um contato para ser alterado.");
      return;
    }
    let nome = $('#inputNome1').val();
    let sobrenome = $('#inputSobrenome1').val();
    let email = $('#inputEmail1').val();
    let nomeprod = $('#inputNomeprod1').val();
    let precoprod = $('#inputPrecoprod1').val();
    let descricao = $('#inputDescricao1').val();
    let contato = {
      "id": campoId,
      "nome": nome,
      "sobrenome": sobrenome,
      "email": email,
      "nomeprod": nomeprod,
      "image": "http://lorempixel.com.br/200/120/food/1",
      "precoprod": precoprod,
      "descricao": descricao
    };

    updateContato(parseInt(campoId), contato);
    $("#Modalform1").modal('hide');
    exibeContatos();
  };
