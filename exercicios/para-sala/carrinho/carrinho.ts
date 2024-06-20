import { ProdutoInterface } from "../produtos/interfaces/produtos.interface";
import { CarrinhoProdutoInterface } from "./interfaces/carrinho-produto.interface";

export class Carrinho {
  // quantidade de um produto
  private carrinhoProdutos: CarrinhoProdutoInterface[] 
  display(...produtos: ProdutoInterface[]): void {
    console.log(produtos)

  }
  
  adicionarItem(produto: ProdutoInterface) {
    if (produto.estaDisponivel()) {
      
    }
  }


  // removerItem()
  // pegarValorTotal
}