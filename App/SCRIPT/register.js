const url = "http://localhost:3000/register-user";

var form = document.getElementById("myform");
var password = document.getElementById("password").value;
var confirmPassword = document.getElementById("password2").value;

if (password === confirmPassword) {

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    var namee = document.getElementById("complete-name").value;
    var email = document.getElementById("email").value;
    var tellphone = document.getElementById("tellphone").value;
    var cpf = document.getElementById("CPF").value;
    var password = document.getElementById("password").value;
    
    const hashedPassword = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));

    if (namee === '' || email === '' || tellphone === '' || cpf === '' || password === '') {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Preencha todos os campos corretamente!",
      });
      return;
    }

    if (namee.indexOf(' ' === -1)) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Preencha o nome completo!",
      });
    }

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Nome_completo: namee,
        Email: email,
        Telefone: tellphone,
        CPF: cpf,
        Senha: hashedPassword 
      })
    })
    .then(response => {
      if (response.ok) {
        Swal.fire({
            title: "Sucesso!",
            text: "Cadastro realizado com sucesso!",
            icon: "success"
          });
    } else {
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: "informações preenchidas de forma incorretas",
        });
      }
    })
    .catch(error => console.error("Erro:", error));
  });
}

var menuIcon = document.getElementById("menu-icon").addEventListener('click', () => {
  var submenu = document.getElementById("submenu")
    
  if(submenu.style.display === 'flex') {
    submenu.style.display = 'none'
  }else {
    submenu.style.display = 'flex';
  }
})

