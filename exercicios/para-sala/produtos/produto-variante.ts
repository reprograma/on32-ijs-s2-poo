import { Produto } from "./produto";

export class ProdutoVariante extends Produto {
  public imagens: string[] = [];
  public categorias: string[] =['regata'];
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
  //isso é um override = sobreescrita
  get descricao(): string {
    return `
    O produto: ${this.nome}, com a cor ${this.cor} 
    com os tamanhos x, y, z 
    categorias ${this.categorias.join(', ')}
    ${this._descricao}`
  }
}

