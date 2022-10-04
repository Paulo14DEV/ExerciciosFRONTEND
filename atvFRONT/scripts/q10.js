function verificar() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    var resultado = document.getElementById("result");

    if(idade < 16) {
        resultado.innerHTML = `${nome}, está proibido a sua entrada!`

        } else if (idade >= 16 && idade < 18) {
            resultado.innerHTML = `${nome}, está proibido sua entrada sem acompanhante!`
        } else {
            resultado.innerHTML = `${nome}, sua entrada está liberada!`
        }
}