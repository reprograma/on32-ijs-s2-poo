import { ProdutoTipoEnum } from "../produtos/enums/produto-tipo.enum";
import { ProdutoInterface } from "../produtos/interfaces/produtos.interface";
import { CarrinhoProdutoInterface } from "./interfaces/carrinho-produto.interface";

export class Carrinho {
  // quantidade de um produto
 
  private carrinhoProdutos: Map<string, CarrinhoProdutoInterface> = new Map()
  display(): void {
    console.table(this.carrinhoProdutos)
  }

  // estaEstoque?
  // quantidade?
  // possui estoque?
  private validacao(produto: ProdutoInterface, quantidade: number): boolean {
    if (!produto.estaDisponivel()) {
      console.error(`O produto ${produto.nome} não está disponivel!`)
      return false;
   }

   if (quantidade <= 0) {
     console.error(`A quantidade precisa ser maior que 0`)
     return false;
   }

   if (produto.tipo === ProdutoTipoEnum.FISICO) {
     if (produto.estoque < quantidade) {
       console.error(`A quantidade ultrapassa a quantidade em estoque`)
       return false;
     }
     
   } 

   return true
  }

  adicionarItem(produto: ProdutoInterface, quantidade: number) {
      // if (!produto.estaDisponivel()) {
      //    console.error(`O produto ${produto.nome} não está disponivel!`)
      //    return;
      // }
   
      // if (quantidade <= 0) {
      //   console.error(`A quantidade precisa ser maior que 0`)
      //   return;
      // }

      // if (produto.tipo === ProdutoTipoEnum.FISICO) {
      //   if (produto.estoque < quantidade) {
      //     console.error(`A quantidade ultrapassa a quantidade em estoque`)
      //     return;
      //   }
        
      // } 

      if (!this.validacao(produto, quantidade)) {
        return;
      }

      produto.estoque = produto.estoque - quantidade
      // produto digital e produto fisico
      // produto digital não possui estoque
      // produto fisico, possui estoque



      const produtoCarrinho: CarrinhoProdutoInterface = {
        nome: produto.nome,
        tipo: produto.tipo,
        preco: produto.preco,
        quantidade,
        descricao: produto.descricao,
      }


      this.carrinhoProdutos.set(produto.nome, produtoCarrinho)
  }
  // removerItem()
  // pegarValorTotal
}