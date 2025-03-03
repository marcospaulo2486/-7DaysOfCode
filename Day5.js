const congelados = [];
const naturais = [];
const limpeza = [];
const materiais = [];
function exibirCarrinho() {
  console.log("\n===== Carrinho de Compras =====");
  console.log("Congelados:", congelados.length ? congelados : "Nenhum item");
  console.log("Naturais:", naturais.length ? naturais : "Nenhum item");
  console.log("Limpeza:", limpeza.length ? limpeza : "Nenhum item");
  console.log("Materiais:", materiais.length ? materiais : "Nenhum item");
  console.log("================================\n");
}

while (true) {
  console.log("1 - Adicionar item a Congelados");
  console.log("2 - Adicionar item a Naturais");
  console.log("3 - Adicionar item a Limpeza");
  console.log("4 - Adicionar item a Materiais");
  console.log("5 - Exibir carrinho");
  console.log("6- Sair");
  const opcao = prompt(
    "Escolha uma opção:  \n1-congelados \n2-naturais" +
      "\n3-limpeza" +
      "\n4- materiais" +
      "\n5- visualizar carrinho" +
      "\n6- ir embora"
  );

  if (opcao === "1") {
    const item = prompt("Digite o nome do produto congelado: ");
    congelados.push(item);
    console.log(`${item} adicionado aos congelados!\n`);
  } else if (opcao === "2") {
    const item = prompt("Digite o nome do produto natural: ");
    naturais.push(item);
    console.log(`${item} adicionado aos naturais!\n`);
  } else if (opcao === "3") {
    const item = prompt("Digite o nome do produto natural: ");
    limpeza.push(item);
    console.log(`${item} adicionado aos naturais!\n`);
  } else if (opcao === "4") {
    const item = prompt("Digite o nome do produto natural: ");
    materiais.push(item);
    console.log(`${item} adicionado aos naturais!\n`);
  } else if (opcao === "5") {
    exibirCarrinho();
  } else if (opcao === "6") {
    console.log("Saindo do programa...");
    break;
  } else {
    console.log("Opção inválida! Tente novamente.\n");
  }
} //fecha while
