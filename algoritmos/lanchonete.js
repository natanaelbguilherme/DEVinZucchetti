var codigo = document.querySelector('.codigo')
var quantidade = document.querySelector('.quantidade')
var botao = document.querySelector('.fazerPedido')
var botao2 = document.querySelector('.novoPedido')

var input = document.querySelector('.codigo')
var input2 = document.querySelector('.quantidade')

botao.addEventListener('click', calcularPreco)

function calcularPreco() {

  botao2.addEventListener('click', novoPedido)

  function formataPreco() {

    const precoFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
    var newH2 = document.createElement('h2')
    newH2.innerHTML = `O Valor do pedido é de ${precoFormat} Reais` 
    botao.after(newH2)
    var newH4 = document.createElement('h4')
    newH4.innerHTML = `obg pelo pedido` 
    newH2.after(newH4)
  }

  function ocultaForm() {
    input.style.display = 'none';
    input2.style.display = 'none';
    botao.style.display = 'none';
    botao2.setAttribute('style', '')
  }

  function novoPedido(){
    var h2 = document.querySelector('h2')
    var h4 = document.querySelector('h4')

    botao2.setAttribute('style', 'display: none')
    h2.style.display = 'none';
    h4.style.display = 'none';
    botao.style.display = ''; 
    codigo.style.display = '';
    quantidade.style.display = '';
    
    document.querySelector('.codigo').value = ""
    document.querySelector('.quantidade').value = ""
  }
    
  if(codigo.value == 1123){
    var preco = quantidade.value * 12.00
    formataPreco()
    ocultaForm()
  } else if(codigo.value == 3423){
    var preco = quantidade.value * 9.00
    formataPreco()
    ocultaForm()
  } else if(codigo.value == 4521){
    var preco = quantidade.value * 15.00
    formataPreco() 
    ocultaForm()
  } else if(codigo.value == 5322){
    var preco = quantidade.value * 34.99
    formataPreco() 
    ocultaForm()
  } else {
    alert("Codigo Invalido")
  }

}
