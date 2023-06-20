// var pesoProduto = Number(prompt("Digite o peso do produto"))
// var distancia = Number(prompt("Digite a distância do trajeto"))

var peso = document.querySelector('.pesoProduto')
var distancia = document.querySelector('.distancia')
var botao = document.querySelector('.botao')

botao.addEventListener('click', calculaFrete)

function calculaFrete(){
  var custoPeso =  peso.value * 0.50
  var custoDistancia = distancia.value * 0.10 
  var custoFrete = custoPeso + custoDistancia

  var custoFreteFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(custoFrete)

  document.querySelector('span').innerHTML = custoFreteFormat
}

function reset(){
  document.querySelector('.pesoProduto').value = ""
  document.querySelector('.distancia').value = ""
  document.querySelector('span').innerHTML = "R$ 0,00"
}




// console.log("O custo total é " + custoFrete + ' reais')
