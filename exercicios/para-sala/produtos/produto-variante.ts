import { Produto } from "./produto";

export class ProdutoVariante extends Produto {
    public imagens: string[] = [];
    dimensoes: any = {};
    estoque: number = 0;
    constructor(
      public nome: string,
      public preco: number,
      protected _descricao: string,
      public cor: string
    ) {
      super(nome, preco, _descricao);
    }
    
    //geter
    //override
    get descricao(): string{
        return "morango"
    }
  }

 
