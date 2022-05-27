class Pessoas {

    salvar(){
        let pessoas = this.FuncaoPrincipal();
       if(this.ValidaCampos(pessoas)) {
           this.adicionar(pessoas)
       }
        this.ListaTabela();

      }
       FuncaoPrincipal() { // função pra criar o json
        let pessoas = {}
        
        pessoas.id = this.id;
        pessoas.CPF = document.getElementById('CPF').value;
        pessoas.nome = document.getElementById('nome').value;
        pessoas.Sobrenome = document.getElementById('Sobrenome').value;
        pessoas.DataDeNascimento = document.getElementById('data').value;
        pessoas.Idade = document.getElementById('idade').value;
        pessoas.ÉMaiorDeIdade = document.getElementById('exampleRadios1').value;
        pessoas.EMaiorDeIdade = document.getElementById('exampleRadios2').value;
        pessoas.Vaga = document.getElementById('vaga').value;
    
        return pessoas;
        }
        constructor(){
            this.id = 1;
            this.arrayPessoas = [];
            }
    

        adicionar(pessoas) { //função que pega o array de pessoas
            this.arrayPessoas.push(pessoas);
            this.id++;
        }
    
    
        ValidaCampos(pessoas){   // função que da uma olhada se os campos estão corretos ai da um alerta
        
        let msg = '';
        
        if(pessoas.nome == '') {
                  msg += '- Informe seu nome \n';
        }
        if(pessoas.CPF == '') {
                  msg += '- Informe seu CPF \n';
        }
        if(pessoas.Sobrenome == '') {
                  msg += '- Informe seu Sobrenome \n';
        }
        if(pessoas.DataDeNascimento == '') {
                  msg += '- Informe sua Data de Nascimento \n';
        }
        if(pessoas.Idade == '') {
                  msg += '- Informe sua Idade \n';
        }
        if(pessoas.ÉMaiorDeIdade == '') {
                  msg += '- Informe se você é maior de Idade ou não \n';
        }
        if(pessoas.EMaiorDeIdade == '') {
                  msg += '- Informe se você é maior de Idade ou não \n';
        }
        if(pessoas.Vaga == '') {
                  msg += '- Informe sua Vaga desejada \n';
    }
    
    if(msg != '') {
        alert(msg);
        return false
    
        }
    
        return true;
    }
    ListaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
       for (let i = 0; i < this.arrayPessoas.length; i++) { // percorre o tbody e pega as informações
        let tr = tbody.insertRow(); // cria uma nova linha dentro da tabela
       
       let td_CPF = tr.insertCell(); // cria uma nova coluna ao tr
       let td_Nome = tr.insertCell();
       let td_Sobrenome = tr.insertCell();
       let td_DataDeNascimento = tr.insertCell();
       let td_Idade = tr.insertCell();
       let td_ÉMaiorDeIdade = tr.insertCell();
       let td_Vaga = tr.insertCell();

       td_CPF.innerText = this.arrayPessoas[i].CPF; // a tabela pega a informação através do id de cada dado
       td_Nome.innerText = this.arrayPessoas[i].nome;
       td_DataDeNascimento.innerText = this.arrayPessoas[i].data;
       td_Idade.innerText = this.arrayPessoas[i].idade;
       td_ÉMaiorDeIdade.innerText = this.arrayPessoas[i].exampleRadios2;
       td_Vaga.innerText = this.arrayPessoas[i].vaga;

       
      }
    }
}
    
    var pessoas = new Pessoas();

    
