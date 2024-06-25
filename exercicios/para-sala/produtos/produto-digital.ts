import { ProdutoTipoEnum } from "./enums/produto-tipo-enum";
import { ProdutoInterface } from "./interface/produto-interface";

export class ProdutoDigital implements ProdutoInterface {
    public tipo: ProdutoTipoEnum = ProdutoTipoEnum.DIGITAL
    public estaDisponivel(): boolean{
        return true
    }
    constructor(public nome: string, public preco: number, public descricao: string){}
}

//Produtos didigtais
// assinaturas
// eboks
// jogos midea digital