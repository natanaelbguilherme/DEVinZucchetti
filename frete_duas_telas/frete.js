
function mostrarFrete() {
    var custoPeso = localStorage.peso.value *= 0.50
    var custoDistancia = localStorage.distancia.value *= 0.10
    custoFrete = custoPeso += custoDistancia

    var custoFreteFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(custoFrete)
    document.querySelector('h2').innerHTML = `O valor do frete é ${custoFreteFormat} reais.`
}

mostrarFrete()


function reset() {
    window.location.href = "http://127.0.0.1:5500/frete_duas_telas/Index.html"

    document.querySelector('.pesoProduto').value = ""
    document.querySelector('.distancia').value = ""
}