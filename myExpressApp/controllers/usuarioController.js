const db = require('../models/index.js');
const usuario = db.usuario;

exports.create = (request, response) => {
    // Valida requestuisição
    if (!request.body.email) {
      response.status(400).send({ message: "Email do Usuário não pode ser vazio!" });
      return;
    }
    // Cria instância Modelo para o Livro
    const usuarioInstance = new usuario({
      email: request.body.email,
      primeironome: request.body.primeironome,
      sobrenome: request.body.sobrenome,
      usuario: request.body.usuario ,
      telefone: request.body.telefone ,
      sexomasculino: request.body.sexomasculino,
      sexofeminino: request.body.sexofeminino,
      fotodeperfil: request.body.fotodeperfil,
      endereco: request.body.endereco,
      cidade: request.body.cidade,
      estado: request.body.estado,
      datadenascimento: request.body.datadenascimento ,
      oferta: request.body.oferta,
      area: request.body.area
    });
    // Insere o Livro no Banco de Dados
   usuarioInstance
      .save(usuarioInstance)
      .then(data => {
        response.send(data);
      })
      .catch(err => {
        response.status(500).send({
          message:
            err.message || "Erro durante o processo de inclusão dos dados."
        });
      });
  };