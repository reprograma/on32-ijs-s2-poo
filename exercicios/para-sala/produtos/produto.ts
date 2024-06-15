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
    protected estoque: number = 0
    public estaDisponivel(): boolean{
        return this.estoque > 0
    }
    public tipo: ProdutoTipoEnum = ProdutoTipoEnum.FISICO;
    get descricao(): string{
        return this._descricao
    }
    constructor(public nome: string, public preco: number, protected _descricao: string){}
}



//public: qualquer um pode acessar, classes filhas ou a partir de uma variável
//privado: somente a classe pode acessar
//protected: somente a classe e suas variaveis (extends) pode acessar
// _ é pra dizer que essa propriedade é privada ou protegida.
