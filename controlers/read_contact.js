function exibeContatos() {
    $("#table-contatos").html("");
    for (let i = 0; i < db.dados.length; i++) {
      let info = db.dados[i];
      $("#table-contatos").append(`<tr>
                                  <td scope="row">${info.id}</td>
                                  <td>${info.nome}</td>
                                  <td>${info.sobrenome}</td>
                                  <td>${info.email}</td>
                                  <td>${info.nomeprod}</td>
                                  <td>${info.precoprod}</td>
                                  <td>${info.descricao}</td>
                                </tr>`)
    }
  };