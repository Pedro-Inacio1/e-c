function save() {
    let name = document.getElementById("complete-name").value;
    let email = document.getElementById("email").value;
    
    console.log(errors);
    
    let errors = [];
    if (name.indexOf(" ") === -1 ) {
        errors.push("Preencha o nome completo! ");
    }
    
    return false;
}
let tellphone = document.getElementById("tellphone").value;
let cpf = document.getElementById("CPF").value;
let password = document.getElementById("password").value;
let password2 = document.getElementById("password2").value;