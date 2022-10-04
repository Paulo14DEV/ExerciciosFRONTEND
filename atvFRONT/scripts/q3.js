var nomeFuncionario = prompt("Qual o seu nome ?");
var salario = parseFloat(prompt("Quanto você recebe? (R$)"));

document.write(`Salário de ${nomeFuncionario}: R$ ${salario}<br>`);
document.write( "Aumento de 5% no valor de: R$ " + salario*0.05 + "<br>");
document.write("Novo salário: R$ " + (salario + salario*0.05));
