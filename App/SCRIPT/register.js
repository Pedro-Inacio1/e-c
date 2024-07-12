const url = "http://localhost:3000/register-user"

var form = document.getElementById("myform")
var button = document.getElementById("submit")

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    var namee = document.getElementById("complete-name").value
    var email = document.getElementById("email").value
    var tellphone = document.getElementById("tellphone").value
    var cpf = document.getElementById("CPF").value
    var password = document.getElementById("password").value

    postProducts(namee, email, tellphone, cpf, password);
});

function getProducts() {
    axios.get(url)
        .then(response => {
            const data = response.data
            teste.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}

function postProducts(namee, email, tellphone, cpf, password) {
    axios.post(url, {
        Nome_completo: namee,
        CPF: cpf,
        Email: email,
        Telefone: tellphone,
        Senha: password
    })
        .then(function (response) {
            alert("Usuário cadastrado com sucesso!")
        })
        .catch(function (error) {
            alert("Houve um erro ao cadastrar.   " + error)
        })
}