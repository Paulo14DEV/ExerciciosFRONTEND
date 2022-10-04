const user = "Paulo"
const pass = "p12345"

function verificar() {

    let usuario = document.getElementById("nome").value
    let senha = document.getElementById("senha").value

    if(usuario == user && senha == pass) {
        document.write("Usuário autorizado!")
    } else if(usuario != user || senha != pass){
        alert("Usuário não existente!")
    }
}