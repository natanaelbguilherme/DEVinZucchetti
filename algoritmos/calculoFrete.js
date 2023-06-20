// var pesoProduto = Number(prompt("Digite o peso do produto"))
// var distancia = Number(prompt("Digite a distância do trajeto"))

var peso = document.querySelector('.pesoProduto')
var distancia = document.querySelector('.distancia')
var botao = document.querySelector('.botao')
var botao2 = document.querySelector('.resetaFormulario')

var input = document.querySelector('.pesoProduto')
var input2 = document.querySelector('.distancia')
var h1 = document.querySelector('h1')

botao.addEventListener('click', calculaFrete)


function calculaFrete(){

  if(input.value == 0 || input2.value == 0){
    alert("Preencha todos os campos")
  } else {
      var custoPeso =  peso.value * 0.50
      var custoDistancia = distancia.value * 0.10 
      var custoFrete = custoPeso + custoDistancia

      var custoFreteFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(custoFrete)

      document.querySelector('h1').innerHTML = "Valor do Frete"
      
      input.style.display = 'none';
      input2.style.display = 'none';
      botao.style.display = 'none';

      var newH2 = document.createElement('h2')
      newH2.innerHTML = `O Valor do Frete é de ${custoFreteFormat} Reais` 
      h1.after(newH2)

      botao2.setAttribute('style', '')

    }
  }
  
  

function reset(){
  var h2 = document.querySelector('h2')

  document.querySelector('h1').innerHTML = "Calcular Frete"

  botao2.setAttribute('style', 'display: none')
  h2.style.display = 'none';
  botao.style.display = ''; 
  peso.style.display = '';
  distancia.style.display = '';

  document.querySelector('.pesoProduto').value = ""
  document.querySelector('.distancia').value = ""
}




// console.log("O custo total é " + custoFrete + ' reais')
