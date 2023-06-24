localStorage.peso = Number(document.querySelector('.pesoProduto').value)
localStorage.distancia = Number(document.querySelector('.distancia').value)
var botao = document.querySelector('.botao')
// var botao2 = document.querySelector('.resetaFormulario')

var input = document.querySelector('.pesoProduto')
var input2 = document.querySelector('.distancia')
var h1 = document.querySelector('h1')

// botao.addEventListener('click', calculaFrete)


function calculaFrete() {


    if (input.value == 0 || input2.value == 0) {
        alert("Preencha todos os campos")
    } else {

        window.location = "http://127.0.0.1:5500/frete_duas_telas/frete.html"

        //   document.querySelector('h1').innerHTML = "Valor do Frete"

        //   input.style.display = 'none';
        //   input2.style.display = 'none';
        //   botao.style.display = 'none';

        //   var newH2 = document.createElement('h2')
        //   newH2.innerHTML = `O Valor do Frete é de ${custoFreteFormat} Reais` 
        //   h1.after(newH2)

        //   botao2.setAttribute('style', '')

    }
}











