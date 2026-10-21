let produtos = [
  { nome: "Torta", preco: 20.0, categoria: "Doce" },
  { nome: "Refrigerante", preco: 10.0, categoria: "Bebida" },
  { nome: "Bolo", preco: 15.0, categoria: "Doce" },
  { nome: "Sorvete", preco: 10.0, categoria: "Doce" },
  { nome: "Suco", preco: 17.0, categoria: "Bebida" },
];

let pedidos = [];

function listarMenu(callback) {
  for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome + " - R$ " + produtos[i].preco);
  }
  callback();
}

function cadastrarPedido(nome, quantidade, callback) {
    let produto = produtos.find(p => p.nome === nome);

  if (produto) {
    pedidos.push({
      produto: produto.nome,
      quantidade: quantidade,
      precoUnitario: produto.preco,
      valorTotal: produto.preco * quantidade,
    });

    console.log("Pedido cadastrado!");
    callback();
  } else {
    console.log("Produto não encontrado!");
  }
}

function listarPedidos() {
  for (let i = 0; i < pedidos.length; i++) {
    console.log(pedidos[i]);
  }
}

listarMenu(function () {
  let nome = prompt("Digite o nome do produto:");
  let quantidade = Number(prompt("Digite a quantidade:"));

  cadastrarPedido(nome, quantidade, listarPedidos);
});
