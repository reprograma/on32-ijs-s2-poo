import { Carrinho } from "./carrinho/carrinho"
import { ProdutoTipoEnum } from "./produtos/enums/produto-tipo.enum"
import { ProdutoInterface } from "./produtos/interfaces/produtos.interface"
import { Produto } from "./produtos/produto"
import { ProdutoDigtal } from "./produtos/produto-digital"
import { ProdutoVariante } from "./produtos/produto-variante"

//exercicios feitos pela profa aqui
console.log("rodando"); 


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

const carrinho = new Carrinho ();

// simula no carrinho
display(produto, produtoDigital, subRegataRosa, subRegataPreta)