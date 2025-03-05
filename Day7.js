//uma calculadores simples que calcule dois valores aravés de funções de operação.
let v1;
let v2;
let operacao = "";

function soma(v1, v2) {
  return Number(v1) + Number(v2);
}

function subtracao(v1, v2) {
  return Number(v1) - Number(v2);
}

function produto(v1, v2) {
  return Number(v1) * Number(v2);
}

function divisao(v1, v2) {
  return Number(v1) / Number(v2);
}
do {
  //usando o 'do...while', já que a primeira vez sempre vamos entrar

  operacao = prompt(
    `Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`
  );
  while (
    operacao != "soma" &&
    operacao != "subtração" &&
    operacao != "multiplicação" &&
    operacao != "divisão" &&
    operacao != "sair"
  ) {
    //enquanto o texto lido for diferente de "soma", "subtração", "multiplicação", "divisão" e "sair", exibir que não foi reconhecido e perguntar novamente
    alert(`Operação não reconhecida!`);
    operacao = prompt(
      `Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`
    );
  }

  if (operacao === "sair") {
    //se o texto lido for "sair", sair do loop e da calculadora
    break;
  }

  v1 = prompt(`Insira o primeiro v:`);
  v2 = prompt(`Insira o segundo v:`);
  switch (operacao) {
    case "soma":
      alert(`O resultado da ${operacao} é ${soma(v1, v2)}`);
      break;
    case "subtração":
      alert(`O resultado da ${operacao} é ${subtracao(v1, v2)}`);
      break;
    case "multiplicação":
      alert(`O resultado da ${operacao} é ${produto(v1, v2)}`);
      break;
    case "divisão":
      alert(`O resultado da ${operacao} é ${divisao(v1, v2)}`);
      break;
  }
} while (
  operacao === "soma" ||
  operacao === "subtração" ||
  operacao === "multiplicação" ||
  operacao === "divisão"
);
alert(`Até a próxima!`);
