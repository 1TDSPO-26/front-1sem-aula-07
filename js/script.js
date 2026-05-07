

//Recuperando botão entrar
const botaoEntrar = document.getElementById("btnEntrar");

//Atrelar ao botão um evento
//Vamos utilizar uma função que escuta eventos
//Essa funçao se chama addEventListener(param1, param2) e recebe dois parâmetros:
//O primeiro é o evento em si (click ou outro qualquer).
//O segundo é a função que será executada quando esse evento acontecer.

//Ex: botaoEntrar.addEventListener("click", function(){ Coisas aqui dentro da função para serem executadas quando o botão for clicado. });

botaoEntrar.addEventListener("click", function(){
  console.log("O botão foi clicado")
})

botaoEntrar();