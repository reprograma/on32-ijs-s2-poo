import { ProdutoTipoEnum } from "./enums/produto-tipo.enum";
import { ProdutoInterface } from "./interfaces/produtos.interface";

export class ProdutoDigtal implements ProdutoInterface {
  public  estaDisponivel(): boolean {
    return true
  }
   public tipo: ProdutoTipoEnum = ProdutoTipoEnum.DIGITAL;
   constructor(public nome: string, public preco: number, public descricao: string) {}
}

/**
 *   produto
 *   produto.nome >> produto.nome()  
 */