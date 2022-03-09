function Converter(){
    var elementoInput = document.getElementById("valor")
    var valorInput = elementoInput.value
    var paraMoeda = parseFloat(valorInput)
    var conversao = (paraMoeda * 5.06).toFixed(2)

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var textoResultado = ""
     if(elementoInput.value >= 1){
        textoResultado = "A conversão em reais é de R$ " + conversao
    }
    else if(elementoInput.value <= 0 || NaN){
        textoResultado = "Insira um valor válido"
    }

    console.log(textoResultado)

    elementoValorConvertido.innerHTML = textoResultado


}