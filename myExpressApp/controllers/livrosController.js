const db = require('../models/index.js');
const Livro = db.livros;

exports.create = (request, response) => {
    // Valida requestuisição
    if (!request.body.titulo) {
      response.status(400).send({ message: "Titulo do Livro não pode ser vazio!" });
      return;
    }
    // Cria instância Modelo para o Livro
    const livroInstance = new Livro({
      titulo: request.body.titulo,
      descricao: request.body.description,
      publicado: request.body.publicado ? request.body.publicado : false
    });
    // Insere o Livro no Banco de Dados
    livroInstance
      .save(livroInstance)
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