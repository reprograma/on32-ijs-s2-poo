import { Pessoa } from "./Pessoa";

export class PessoaFisica implements Pessoa {
  nome: string;
  cpf?: string | undefined;
  endereco: string;
  telefone: string;
  renda?: number | undefined;

  constructor(
    nome: string,
    cpf: string,
    endereco: string,
    telefone: string,
    renda: number
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
    this.renda = renda;
  }
}
