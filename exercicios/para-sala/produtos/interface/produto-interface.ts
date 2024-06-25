import { ProdutoTipoEnum } from "../enums/produto-tipo-enum";

export interface ProdutoInterface {
  nome: string;
  preco: number;
  descricao: string;
  tipo: ProdutoTipoEnum;
  estaDisponivel: () => boolean;
}