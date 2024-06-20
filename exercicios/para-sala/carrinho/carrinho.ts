import { ProdutoInterface } from "../produtos/interfaces/produtos.interface";
import { CarrinhoProdutoInterface } from "./interface/carrinho-produto.interface";

export class Carrinho {
    private carrinhoProdutos: CarrinhoProdutoInterface
    display (...produtos: ProdutoInterface[]): void {
    }

    //adicionarItem()
    //removerItem()
    //pegarValorTotal()
}