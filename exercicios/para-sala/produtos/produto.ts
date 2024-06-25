//PRODUTO É A CLASSE MÃE
import { ProdutoTipoEnum } from "./enums/produto-tipo-enum";
import { ProdutoInterface } from "./interface/produto-interface";
//puclic qualquer parte do código pode acessar 
//private só com permissão

//verbosa - insere as informacoes de forma granular
//abreviada - insere as informacoes direto

/*
* public -> qualquer um pode acessar o filho, ou partir de uma variavel
* protected -> somente a classe e suas clasees derivadas (extends) pode acessar
* ptivate -> somente a classe pode acessar 
* private | protected | public geStatus()
* private | protected | public status*/

export class Produto implements ProdutoInterface {
    protected estoque: number = 0;
    public estaDisponivel(): boolean {
return this.estoque > 0
    }
    public tipo: ProdutoTipoEnum = ProdutoTipoEnum.FISICO
    public get descricao(): string {
        return this._descricao
    }
    //public get descricao: strings são equivalents, inclusive no constructor

    constructor(public nome: string, public preco: number, protected _descricao: string){}
}

