import { ProdutoTipoEnum } from "../enums/produto-tipo.enum"

export interface ProdutoInterface {
  descricao: string
  preco: number
  nome: string
  tipo: ProdutoTipoEnum
  estoque: number
  estaDisponivel: () => boolean // ter estoque
}