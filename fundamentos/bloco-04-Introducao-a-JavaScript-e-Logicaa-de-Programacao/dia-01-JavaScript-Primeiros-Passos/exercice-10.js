const custoProduto = 100;
const valorVenda = 160;

const quantidadeProdutos = 1000;
const impostoSobreOCusto = 1.2;

if (custoProduto >= 0 && valorVenda >= 0) {
  const valorCustoTotal = custoProduto * impostoSobreOCusto;
  const lucro = (valorVenda - valorCustoTotal) * quantidadeProdutos;
  console.log(lucro);
}
