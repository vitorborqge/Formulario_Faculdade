const cadastrarLivros = async function(){
    const titulo = document.getElementById("txtTitulo").value;
    const descricao = document.getElementById("txtDescricao").value;
    const publicado = document.getElementById("chkPublicado").checked;
    
    const dados = {
                    "titulo":titulo, 
                    "descricao":descricao, 
                    "publicado":publicado
                  };
                  console.log(dados);
    const response = await fetch("http://localhost:3000/livros/create", 
                { method: "POST", body: JSON.stringify(dados), headers: {
                  'Content-Type': 'application/json' }});
    const content = await response.json();
    if (response.status == 200)
      location.reload();
                
}

const listarLivros = async function(){
  const response = await fetch("http://localhost:3000/livros/getAll");
  const livros = await response.json();
  livros.forEach((livro) => {
    //PREENCHE LISTA
    var tbody = document.getElementById('tabelaLivros').getElementsByTagName('tbody')[0];
    //CRIA UMA NOVA LINHA NA TABELA
    var row = tbody.insertRow();
    //CRIA NOVAS COLUNAS PARA A LINHA
    var titulo = row.insertCell(0);
    var descricao = row.insertCell(1);
    var publicado = row.insertCell(2);
    var excluir = row.insertCell(3);
    //PREENCHE DADOS VINDOS DA BUSCA
    titulo.innerHTML = livro.titulo;
    descricao.innerHTML = livro.descricao;
    publicado.innerHTML = (livro.published == 'True') ? 'Sim' : 'Não';
    excluir.innerHTML = `<button class="btn btn-danger" onclick="deletarLivro('${livro._id}')">Excluir</button>`;
  });
}

const deletarLivro = async function(id){
  const response = await fetch(`http://localhost:3000/livros/delete/${id}`,  
                        { method: "DELETE" });
  const removeResponse = await response.json();
  if (response.status == 200)
    location.reload();
}

