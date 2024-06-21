function salvar() {
    let nome = document.getElementById("complete-name").value
    let tellphone = document.getElementById("tellphone").value;
    let cpf = document.getElementById("CPF").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    let erros = []
    if(nome.indexOf(" ") === -1 ) {
        erros.push("Preencha o nome completo! ")
    }
    if (tellphone.lenght === 11) {
        return true
    }
    else {
        erros.push("Número de telefone preenchido de forma incorreta!")
    }
    if (cpf.lenght != 11) {
        erros.push("CPF inválido!!!")
    }
    console.log(erros)
    return false
}
