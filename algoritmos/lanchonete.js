// var codigo = Number(prompt("Digite o código do item"));
// var quantidade = Number(prompt("Digite a quantidade desejada"));

var codigo = document.querySelector('.codigo')
var quantidade = document.querySelector('.quantidade')
var botao = document.querySelector('.fazerPedido')

botao.addEventListener('click', calcularPreco)

function calcularPreco() {
  if(codigo.value == 1123){
    console.log(quantidade.value * 12.00)
  } else if(codigo.value == 3423){
    console.log(quantidade.value * 1.20)
  } else if(codigo.value == 4521){

  } else if(codigo.value == 5322){

  } else {
    console.log("Codigo Invalido")
  }

}



// function calcularPreco(preco, quantidade) {
//   var valorTotal = preco * quantidade;
//   console.log("Valor a ser pago: R$ " + valorTotal.toFixed));(2
// }