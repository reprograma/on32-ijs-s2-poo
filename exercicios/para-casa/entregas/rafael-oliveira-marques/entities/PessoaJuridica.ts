import { Pessoa } from "./Pessoa";

export class PessoaJuridica implements Pessoa {
  nome: string;
  cpf?: string | undefined;
  endereco: string;
  telefone: string;
  renda?: number | undefined;

  constructor(
    nome: string,
    cnpj: string,
    endereco: string,
    telefone: string,
    faturamento: number
  ) {
    this.nome = nome;
    this.cpf = cnpj;
    this.endereco = endereco;
    this.telefone = telefone;
    this.renda = faturamento;
  }
}
