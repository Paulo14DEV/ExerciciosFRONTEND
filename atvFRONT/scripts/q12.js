function verificar() {
    let resposta = document.getElementById("resposta").value.toUpperCase()
    let resultado = document.getElementById("result")

    switch(resposta) {
        case 'MANHÃ' :
            resultado.innerHTML = `Então tenha um bom dia!`
        break;

        case 'MANHA' :
            resultado.innerHTML = `Então tenha um bom dia!`
        break;

        case 'TARDE':
            resultado.innerHTML = `Então tenha uma boa tarde!`
        break;

        case 'NOITE':
            resultado.innerHTML = `Então tenha uma boa noite!`
        break;


    }
}
