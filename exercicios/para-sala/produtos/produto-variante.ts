import { Produto } from "./produto";

export class ProdutoVariante extends Produto {
    public imagens: string[] = [];
    public categorias: string[] = ["Regata"];
    dimensoes: any = {};
    
    constructor(
      public nome: string,
      public preco: number,
      protected _descricao: string,
      public cor: string
    ) {
      super(nome, preco, _descricao, cor);
    }
    
    //geter
    //override
    get descricao(): string{
      console.log("Classe filhaaa")
        return `O produto: ${this.nome}, categoria(s): ${this.categorias.join(', ')} ${this._descricao}`
    }
  }

 
