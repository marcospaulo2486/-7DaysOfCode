const area_end = prompt(
  "Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:"
);
let lang = "";
if (area_end === "Front-End") {
  lang = prompt("Você quer aprender React ou Vue?");
} else if (area_end === "Back-End") {
  lang = prompt("Você quer aprender C# ou Java?");
} else {
  alert("Você não inseriu uma área válida!");
}

const especialidadeOuFullstack = prompt(
  "Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack"
);
if (especialidadeOuFullstack == 1) {
  alert(
    `Continue se especializando em ${lang} para dominar a área de ${area_end}!`
  );
} else if (especialidadeOuFullstack == 2) {
  alert(
    `Chegou a hora de começar a aprender outras linguagens além de ${lang} se você quer se tornar Fullstack!`
  );
} else {
  alert("Você não inseriu um valor válido!");
}

let msg = prompt(
  "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo."
);
while (msg === "ok") {
  let novaTecnologia = prompt("Qual?");
  alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
  msg = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo."
  );
}
