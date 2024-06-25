import { Carrinho } from "./carrinho/carrinho"
import { ProdutoTipoEnum } from "./produtos/enums/produto-tipo.enum"
import { ProdutoInterface } from "./produtos/interfaces/produtos.interface"
import { Produto } from "./produtos/produto"
import { ProdutoDigtal } from "./produtos/produto-digital"
import { ProdutoVariante } from "./produtos/produto-variante"

//exercicios feitos pela profa aqui
console.log("rondando") 


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

const carrinho = new Carrinho()

carrinho.adicionarItem(produto, 1) // 100
carrinho.adicionarItem(subRegataRosa, 10) // 220
carrinho.adicionarItem(subRegataRosa, 10) // 220
carrinho.adicionarItem(subRegataPreta, -1) // 110
carrinho.adicionarItem(subRegataPreta, 20) // 110
carrinho.adicionarItem(produtoDigital, 1) // 90.88

// simula no carrinho
carrinho.display()
