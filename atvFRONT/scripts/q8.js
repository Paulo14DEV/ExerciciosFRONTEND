function verificar() {
    var age = document.getElementById("idade").value
    var result = document.getElementById("resultado");

    if(age < 18) {
        result.innerHTML = `Você tem ${age} anos e é MENOR de idade!`
    } else if ( age >= 18){
        result.innerHTML = `Você tem ${age} anos e é MAIOR de idade!`
    }  
}