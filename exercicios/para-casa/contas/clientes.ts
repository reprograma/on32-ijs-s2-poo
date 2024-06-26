import { DetalhesCliente, Endereco } from "../interfaces/cliente";

export class Cliente implements DetalhesCliente {
    id: number;
    nome: string;
    telefone: string;
    salario: number;
    endereco: Endereco;
    tipoConta: `CORRENTE` | `POUPANCA`;

    constructor (id: number, nome: string, telefone: string, salario: number, endereco: Endereco, tipoConta: `CORRENTE` | `POUPANCA`) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.salario = salario;
        this.endereco = endereco;
        this.tipoConta = tipoConta;
    }

    // enderecoCliente(): string {
    //     return `${this.endereco.rua}, ${this.endereco.numero}, ${this.endereco.bairro}, ${this.endereco.cidade}, ${this.endereco.estado}, ${this.endereco.cep}`;
    // }
}
