function verificar() {
    var produto = document.getElementById("qtdProduto").value
    var valorTotal = document.getElementById("valorProduto").value
    var resultado = document.getElementById("result")

    if(valorTotal >= 100 && valorTotal < 1000) {
        resultado.innerHTML = `Valor total da compra: R$${valorTotal} <br> Você ganhou <strong>5%</strong> de desconto! <br> Valor total com desconto: R$` + valorTotal*0.95.toFixed(2)

    
    } else if(valorTotal >= 1000) {
        resultado.innerHTML = `Valor total da compra: R$${valorTotal} Você ganhou <strong>10%</strong> de desconto! <br> Valor total com desconto: R$` + valorTotal*0.90.toFixed(2)

    } else {
        resultado.innerHTML = `Sem desconto, mano!`
    }
}