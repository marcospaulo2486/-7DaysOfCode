//adicionar uma função que remova itens da lista!
const congelados = [];
const conservados = [];
const limpeza = [];
const materiais = [];

function exibirCarrinho() {
  console.log("\n===== Carrinho de Compras =====");
  console.log("Congelados:", congelados.length ? congelados : "Nenhum item");
  console.log("conservados:", conservados.length ? conservados : "Nenhum item");
  console.log("Limpeza:", limpeza.length ? limpeza : "Nenhum item");
  console.log("Materiais:", materiais.length ? materiais : "Nenhum item");
  console.log("================================\n");
}

while (true) {
  console.log("1 - Adicionar item");
  console.log("2 - Remover item");
  console.log("3 - Exibir carrinho");
  console.log("4 - Sair");
  const opcao = prompt(
    "Escolha uma opção: \n1-Adicionar \n2-Remover \n3-Visualizar carrinho \n4-Sair"
  );

  if (opcao === "1") {
    const categoria = prompt(
      "Escolha a categoria: \n1-Congelados \n2-conservados \n3-Limpeza \n4-Materiais"
    );
    const item = prompt("Digite o nome do produto: ");

    if (categoria === "1") {
      congelados.push(item);
      console.log(`${item} adicionado aos congelados!\n`);
    } else if (categoria === "2") {
      conservados.push(item);
      console.log(`${item} adicionado aos conservados!\n`);
    } else if (categoria === "3") {
      limpeza.push(item);
      console.log(`${item} adicionado aos produtos de limpeza!\n`);
    } else if (categoria === "4") {
      materiais.push(item);
      console.log(`${item} adicionado aos materiais!\n`);
    } else {
      console.log("Categoria inválida!\n");
    }
  } else if (opcao === "2") {
    const categoria = prompt(
      "Escolha a categoria: \n1-Congelados \n2-conservados \n3-Limpeza \n4-Materiais"
    );
    const item = prompt("Digite o nome do produto para remover: ");

    if (categoria === "1") {
      const index = congelados.indexOf(item);
      if (index !== -1) {
        congelados.splice(index, 1);
        console.log(`${item} removido dos congelados!\n`);
      } else {
        console.log(`${item} não encontrado nos congelados!\n`);
      }
    } else if (categoria === "2") {
      const index = conservados.indexOf(item);
      if (index !== -1) {
        conservados.splice(index, 1);
        console.log(`${item} removido dos conservados!\n`);
      } else {
        console.log(`${item} não encontrado nos conservados!\n`);
      }
    } else if (categoria === "3") {
      const index = limpeza.indexOf(item);
      if (index !== -1) {
        limpeza.splice(index, 1);
        console.log(`${item} removido dos produtos de limpeza!\n`);
      } else {
        console.log(`${item} não encontrado nos produtos de limpeza!\n`);
      }
    } else if (categoria === "4") {
      const index = materiais.indexOf(item);
      if (index !== -1) {
        materiais.splice(index, 1);
        console.log(`${item} removido dos materiais!\n`);
      } else {
        console.log(`${item} não encontrado nos materiais!\n`);
      }
    } else {
      console.log("Categoria inválida!\n");
    }
  } else if (opcao === "3") {
    exibirCarrinho();
  } else if (opcao === "4") {
    console.log("Saindo do programa...");
    break;
  } else {
    console.log("Opção inválida! Tente novamente.\n");
  }
}
