import { ProdutoTipoEnum } from "../enums/produto-tipo-enum"

export interface ProdutoInterface{
    descricao: string
    preco: number
    nome: string
    tipo: ProdutoTipoEnum
    cor: string
    estaDisponivel: () => Boolean
    
}

//contrato