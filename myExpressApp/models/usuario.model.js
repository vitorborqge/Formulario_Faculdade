module.exports = mongoose => {
    const usuario = mongoose.model(
      "usuario",
      mongoose.Schema(
        {
          email: String,
          primeironome: String,
          sobrenome: String,
          usuario: String ,
          telefone: Number ,
          sexomasculino: String,
          sexofeminino: String,
          fotodeperfil: String,
          endereco: String,
          cidade: String,
          estado: String,
          datadenascimento: String ,
          oferta: String,
          area: String
        },
        { timestamps: true }
      )
    );
    return usuario;
  };