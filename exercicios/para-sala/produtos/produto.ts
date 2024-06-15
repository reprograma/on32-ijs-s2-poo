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
export class Produto implements ProdutoInterface {
  constructor(public nome: string, public preco: number, public descricao: string) {}
 }