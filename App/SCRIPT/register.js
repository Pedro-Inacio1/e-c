function send(nome, tellphone, email, cpf, password) {

}

function salvar() {
    let nome = document.getElementById("complete-name").value
    let tellphone = document.getElementById("tellphone").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("CPF").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    let erros = []
    if(nome.indexOf(" ") === -1 ) {
        erros.push("Preencha o nome completo! ")
    }
    
    if(tellphone.length != 11)
    {
        erros.push("Telefone preenchido de forma incorreta!");
    }

    if(password != password2)
    {
        erros.push("As senhas não coincidem.")
    }

    if (cpf.length != 11) {
        erros.push("CPF inválido!!!")
    }

    console.log(erros)
    return false
}
