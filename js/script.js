
//Montando um objeto para comparar os dados do formulário
const usuario = {
  nome: "Zezinho",
  email: "zezinho@gmai.com",
  senha: "LALALA"

}



//Recuperando botão entrar
const botaoEntrar = document.getElementById("btnEntrar");

//Atrelar ao botão um evento
//Vamos utilizar uma função que escuta eventos
//Essa funçao se chama addEventListener(param1, param2) e recebe dois parâmetros:
//O primeiro é o evento em si (click ou outro qualquer).
//O segundo é a função que será executada quando esse evento acontecer.

//Ex: botaoEntrar.addEventListener("click", function(){ Coisas aqui dentro da função para serem executadas quando o botão for clicado. });

botaoEntrar.addEventListener("click", function(evento){
  evento.preventDefault();

try{
  const email = document.getElementById("idEmail");
  const senha = document.getElementById("idSenha");

  console.log(email.value);
  console.log(senha.value);


//Vamos comoparar os dados digitados no formulario com os dados do objeto "usuario" e caso seja valido, redirecionar para a pagina index.html.

if(!(emai === null && senha === null)){

  if(email.value === usuario.email && senha.value === usuario.senha){
    window.location.href = "index.html"
  }else {
    throw new Error("Nome de usuário ou senha incorretos!");
  }
} else {
  throw new Error("Preencha todos os campos!")

}

}catch (error){
  alert(error.message);
}
});


