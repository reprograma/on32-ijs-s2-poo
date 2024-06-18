import { ProdutoInterface } from "../produtos/interfaces/produtos.interface";
import { CarrinhoProdutoInterface } from "./interfaces/carrinho-produto.interface";

export class Carrinho {
  // quantidade de um produto
  private carrinhoProdutos: CarrinhoProdutoInterface[] 
  display(...produtos: ProdutoInterface[]): void {

  }
  // adicionarItem()
  // removerItem()
  // pegarValorTotal
}