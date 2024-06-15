import { ProdutoTipoEnum } from "./enums/produto-tipo-enum";
import { ProdutoInterface } from "./interfaces/produtos.interface";

// Verbosa - informações de pouco em pouco, ou granulada
// abreviada - insere as informações de uma vez

// forma usada para manipular o this
/*export class Produto implements ProdutoInterface{
    nome: String;
    preco: number;
    descricao: String;

    constructor(nome: String, preco: number, descricao: String){
        this.nome = nome
        this.preco = preco
        this.descricao = descricao

    }
}
const produto = new Produto()*/

// forma abreviada
export class Produto implements ProdutoInterface{
    public tipo: ProdutoTipoEnum = ProdutoTipoEnum.FISICO;
    constructor(public nome: string, public preco: number, public descricao: string){}
}
