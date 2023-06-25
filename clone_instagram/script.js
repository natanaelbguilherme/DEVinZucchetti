function clicarNoBotao(){
    var email = document.getElementById('campo-email').value
    var senha = document.getElementById('campo-senha').value
    
    document.getElementById('botao').disabled = true
    document.getElementById('botao').style.opacity = 0.5
    document.getElementById('botao').innerHTML = "logando"
}

