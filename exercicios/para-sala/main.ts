import { ProdutoInterface } from "./produtos/interfaces/produtos.interface"
import { Produto } from "./produtos/produto"

//exercicios feitos pela profa aqui
console.log("rondando") 

const produto = new Produto("Regata", 100, "descricao regata M") //  instancia de produto
const produtoOBject: ProdutoInterface = { // objeto literal javascript
  nome: "produto obj",
  descricao: "",
  preco: 0,
}

const display = (...produtos: ProdutoInterface[]): void => {
  console.table(produtos)
}

display(produto, produtoOBject)