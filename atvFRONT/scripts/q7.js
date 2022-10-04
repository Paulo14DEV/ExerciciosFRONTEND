const nome = []
const idade = []
const salario = []
const profissao = []

    nome[0] = prompt("Qual o seu nome?")
    idade[0] = Number(prompt("Qual a sua idade?"));
    salario[0] = parseFloat(prompt("Qual o seu salário?"))
    profissao[0] = prompt("Qual a sua profissão?")

    nome[1] = prompt("Qual o seu nome?")
    idade[1] = Number(prompt("Qual a sua idade?"));
    salario[1] = parseFloat(prompt("Qual o seu salário?"))
    profissao[1] = prompt("Qual a sua profissão?")

    document.write(
        `<table>
            <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Salário</th>
                <th>Profissão</th>
            </tr>
            <tr>
                <td>${nome[0]}</td>
                <td>${idade[0]}</td>
                <td>${salario[0]}</td>
                <td>${profissao[0]}</td>
            </tr>
            <tr>
                <td>${nome[1]}</td>
                <td>${idade[1]}</td>
                <td>${salario[1]}</td>
                <td>${profissao[1]}</td>
            </tr>
        </table>`
    )

