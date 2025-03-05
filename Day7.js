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
  operacao = prompt(
    `Qual operação você quer realizar? Responda '1 ou somar', '2 ou subtrair', '3 ou multiplicar', '4 ou dividir' ou 'sair'.`
  );

  // Verifica se a operação é válida
  while (
    operacao !== "somar" &&
    operacao !== "1" &&
    operacao !== "subtrair" &&
    operacao !== "2" &&
    operacao !== "multiplicar" &&
    operacao !== "3" &&
    operacao !== "dividir" &&
    operacao !== "4" &&
    operacao !== "sair"
  ) {
    alert(`Operação não reconhecida!`);
    operacao = prompt(
      `Qual operação você quer realizar? Responda '1 ou somar', '2 ou subtrair', '3 ou multiplicar', '4 ou dividir' ou 'sair'.`
    );
  }

  if (operacao === "sair") {
    break;
  }

  v1 = prompt(`Insira o primeiro valor:`);
  v2 = prompt(`Insira o segundo valor:`);

  // Verifica se os valores são números válidos
  if (isNaN(v1) || isNaN(v2)) {
    alert("Por favor, insira valores numéricos válidos.");
    continue;
  }

  switch (operacao) {
    case "somar":
    case "1":
      alert(`O resultado da soma é ${soma(v1, v2)}`);
      break;
    case "subtrair":
    case "2":
      alert(`O resultado da subtração é ${subtracao(v1, v2)}`);
      break;
    case "multiplicar":
    case "3":
      alert(`O resultado da multiplicação é ${produto(v1, v2)}`);
      break;
    case "dividir":
    case "4":
      if (v2 == 0) {
        alert("Não é possível dividir por zero.");
      } else {
        alert(`O resultado da divisão é ${divisao(v1, v2)}`);
      }
      break;
  }
} while (operacao !== "sair");

alert(`Foi Um Prazer!`);
