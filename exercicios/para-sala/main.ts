import { Produto } from "./produtos/produto";
import { ProdutoInterface } from "./produtos/interface/produto-interface";
import { ProdutoTipoEnum } from "./produtos/enums/produto-tipo-enum";
import { ProdutoDigital } from "./produtos/produto-digital";
import { ProdutoVariante } from "./produtos/produto-variante";

//exercicios feitos pela profa aqui
console.log("rodando");

// const produtoObj: ProdutoInterface = {
//   nome: "produto obj",
//   descricao: "",
//   preco: 0,
//   tipo: ProdutoTipoEnum.DIGITAL,
// };

const produto = new Produto("regata", 100, "descricao regata M");

const produtoDigital = new ProdutoDigital(
  "codigo limpo",
  90.88,
  "Abordando as complexidades de um software"
);

const regataRosa = new ProdutoVariante(
  "Regata",
  110,
  "modelo primavera-verao",
  "rosa"
);

// o spread operator (...) é usado para "pegar tudo" de um array
//ou objeto existente e adicionar novos elementos ou propriedades.
//console.table transforma um array em tabela
const display = (...produtos: ProdutoInterface[]): void => {
  const carrinhoProdutos = produtos.map((produto) => {
    return {
      nome: produto.nome,
      preco: produto.preco,
      descricao: produto.descricao,
      estaDisponivel: produto.estaDisponivel()
    };
  });
  console.table(carrinhoProdutos);
};
display(produto, produtoDigital, regataRosa);
