const real = 0.037
var pesoAr = parseFloat(prompt("Digite o valor em PESO ARGENTINO:"))

document.write(`Valor em peso ARGENTINO: $ ${pesoAr}<br>`)
document.write("Valor em REAIS: R$ " + (pesoAr*real.toFixed(3)))