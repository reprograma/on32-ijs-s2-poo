import { Produto } from "./produto";

export class ProdutoVariante extends Produto {
  public imagens: string[] = []; // s3
  public categorias: string[] = ['regata']
  dimensoes: any = {};
  
  constructor(
    public nome: string,
    public preco: number,
    protected _descricao: string,
    public cor: string
  ) {
    super(nome, preco, _descricao);
  }

  // mas sim, isso é um override = sobrecrita
  get descricao(): string {
    return `
      O produto : ${this.nome},  com a cor ${this.cor} 
      com os tamnhos x, y,z 
      categorias ${this.categorias.join(', ')}
      ${this._descricao}
    `
  }
}
