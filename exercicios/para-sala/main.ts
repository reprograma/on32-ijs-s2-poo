import { ProdutoInterface } from "./produtos/interfaces/produtos.interface"
import { Produto } from "./produtos/produto"
import { ProdutoDigital } from "./produtos/produto-digital"
import { ProdutoVariante } from "./produtos/produto-variante"
import { ProdutoDigtal } from "./produtos/produto-digital"
import { ProdutoVariante } from "./produtos/produto-variante"

//exercicios feitos pela profa aqui
console.log("rondando") 




const produtoDigital = new ProdutoDigital ("Codigo Limpo", 90.88, "Abordando as complexidades de um software")
const produto = new Produto("Regata", 100, "com encapsulamento") //  instancia de produto
const subRegataRosa = new ProdutoVariante ("Regata", 110, "modelo primavera-verao", "Rosa")
const subRegataPreta = new ProdutoVariante ("regata", 110, "modelo rock", "preta")

const produtoDigital = new ProdutoDigtal("Codigo Limpo", 90.88, "Abordando as complexides de um software")

const produto = new Produto("Regata", 100, "com encapsulamento") //  instancia de produto
const subRegataRosa = new ProdutoVariante('Regata', 110, 'modelo privavera-verao', 'rosa')
const subRegataPreta = new ProdutoVariante('Regata', 110, 'modelo rock', 'preta')

/**
 * musicas 1
 *  -> cantores[] N = varios
 *  -> compositores[]
  * cantores 1
 *  -> musicas[] N = varias
 *  -> compositores[]
 * livro
 */

const display = (...produtos: ProdutoInterface[]): void => {
  const carrinhoProdutos = produtos.map((produto) => {
    return {
      nome: produto.nome,
      preco: produto.preco,
      descricao: produto.descricao,
      estaDisponivel: produto.estaDisponivel()
    }
  })
  console.table(carrinhoProdutos)
  const carrinhoProdutos = produtos.map((produto) => {
    return {
      nome: produto.nome,
      preco: produto.preco,
      descricao: produto.descricao,
      estaDisponivel: produto.estaDisponivel()
    }
  })
  console.table(carrinhoProdutos)
}


// simula no carrinho
display(produto, produtoDigital, subRegataRosa, subRegataPreta)
// simula no carrinho
display(produto, produtoDigital, subRegataRosa, subRegataPreta)