import { ProdutoTipoEnum } from "./enums/produto-tipo.enum";
import { ProdutoInterface } from "./interfaces/produtos.interface";

// verbosa - insiria as informacoes de forma granular
// abreviada - insere as informcoes direto
/*
export class Produto implements ProdutoInterface {
  nome: string;
  preco: number;
  descricao: string;

  constructor(nome: string, preco: number, descricao: string) { // new 
    this.nome = nome
    this.preco = preco
    this.descricao = descricao
  }
}
*/

/*
 public => quanquer um pode acessar filho, ou a partir de uma variavel
 protected => somente a classe e suas classes derivadas (extends) pode acessar
 private => somente a classe pode acessar
 private | protected | public getStatus()
 private | protected | public status
 readonly 
*/
export class Produto implements ProdutoInterface {
  estoque: number = 10;
  public estaDisponivel(): boolean {
    return this.estoque > 0
  }
  tipo: ProdutoTipoEnum = ProdutoTipoEnum.FISICO;
  public get descricao():string {
    return this._descricao
  }
  // public get descricao: string são equivalentes, inclusive no constructor

  constructor(public nome: string, public preco: number, protected _descricao: string) {}
 }

