alert("Seja bem-vindo ao sistema");

var saldo = 1000;
var cpf = "";
var operacao = prompt("O que você deseja fazer? \n1- Ver Saldo bancário \n2- Cadastrar CPF \n3- Transferência");
if (operacao === "1") {
  alert("Seu saldo bancário é: R$ " + saldo);
} else if (operacao === "2") {
  cpf = prompt("Digite seu CPF:");
  alert("CPF cadastrado com sucesso: " + cpf);
} else if (operacao === "3") {
  var valorTransferencia = parseFloat(prompt("Digite o valor a ser transferido:"));
  if (valorTransferencia > 0 && valorTransferencia <= saldo) {
    saldo -= valorTransferencia;
    alert("Transferência de R$ " + valorTransferencia + " realizada com sucesso!");
    alert("Seu novo saldo é: R$ " + saldo);
  } else {
    alert("Valor inválido ou saldo insuficiente!");
  }
} else {
  alert("Opção inválida. Tente novamente.");
}

