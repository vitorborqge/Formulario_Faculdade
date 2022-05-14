const cadastrar = async function () {
    const email = document.getElementById("txtemail").value
    const primeironome = document.getElementById("txtprimeironome").value
    const sobrenome = document.getElementById("txtsobrenome").value
    const usuario = document.getElementById("txtusuario").value
    const telefone = document.getElementById("txttelefone").value
    const sexomasculino = document.getElementById("txtsexom").checked
    const sexofeminino = document.getElementById("txtsexof").checked
    const fotodeperfil = document.getElementById("txtfotodeperfil").value
    const endereco = document.getElementById("txtendereco").value
    const cidade = document.getElementById("txtcidade").value
    const estadoObj = document.getElementById("txtestado");
    const estado = estadoObj.options[estadoObj.selectedIndex].text;
    const datadenascimento = document.getElementById("txtdatadenascimento").value
    const area = document.getElementById("txtarea").value
    const oferta = document.getElementById("txtoferta").checked

    const dados = {
        "email": email,
        "primeironome": primeironome,
        "sobrenome": sobrenome,
        "usuario": usuario,
        "telefone": telefone,
        "sexomasculino": sexomasculino,
        "sexofeminino": sexofeminino,
        "fotodeperfil": fotodeperfil,
        "endereco": endereco,
        "cidade": cidade,
        "estado": estado,
        "datadenascimento": datadenascimento,
        "oferta": oferta,
        "area": area
        
    };


    console.log(dados);
    const response = await fetch("http://localhost:3000/usuario/create", 
                { method: "POST", body: JSON.stringify(dados), headers: new Headers({ 'content-type': 'application/json' }) });
    const content = await response.json();
    console.log(content);
    if (content._id != undefined && content._id != "")
        alert("Cadastrado com sucesso!");

}