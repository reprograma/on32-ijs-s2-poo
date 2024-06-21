import { ProdutoTipoEnum } from "../enums/produto-tipo.enum"

/**
 * validar tipagem
 * polifirsmo geralemente, mas quando precisamos da instancia, 
 * precisa de um mecanimso como type para identifcar
 * ter um contrato de entrada ou saida de dados = tipagem
 */
export interface ProdutoInterface {
  descricao: string
  preco: number
  nome: string
  tipo: ProdutoTipoEnum
  estoque: number
  estaDisponivel: () => boolean // ter estoque
}