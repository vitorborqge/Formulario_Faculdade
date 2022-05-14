module.exports = mongoose => {
    const Livro = mongoose.model(
      "livros",
      mongoose.Schema(
        {
          titulo: String,
          descricao: String,
          publicado: Boolean
        },
        { timestamps: true }
      )
    );
    return Livro;
  };