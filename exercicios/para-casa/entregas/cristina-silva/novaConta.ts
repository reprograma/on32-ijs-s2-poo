import { CadastroPessoas } from "./interface/cadastro";

class novaConta implements CadastroPessoas {
    cpf: number;
    nome: string;
    dataNascimento: Date;
    endereco: string;
    cidade: string;
    estado: string;
    cep: number;
    telefone: number;
    fonteRenda: string;
    valorRenda: number;

    constructor (cpf: number, nome: string, dataNascimento: Date, endereco: string, cidade: string, estado: string, cep: number, telefone: number, fonteRenda: string, valorRenda: number){
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.telefone = telefone;
        this.fonteRenda = fonteRenda;
        this.valorRenda = valorRenda;

    }

    cadastrarCliente(): string{
        return `CPF: ${this.cpf}, NOME COMPLETO: ${this.nome}, DATA DE NASCIMENTO: ${this.dataNascimento.toLocaleDateString("pt-br")}, ENDEREÇO: ${this.endereco}, CIDADE: ${this.cidade}, 
                ESTADO: ${this.estado}, CEP: ${this.cep}, TELEFONE: ${this.telefone}, FONTE DE RENDA: ${this.fonteRenda}, VALOR DA RENDA: ${this.valorRenda} ` 
    }
}

const ContaCliente = new novaConta(32135435845, 'Ororo Munroe', new Date(10,5,1975), 'Rua Cairo, 616', 'Porto Alegre', 'RS', 90751123, 51912345678, 'Escola do Professor Xavier', 4275)
console.log(ContaCliente.cadastrarCliente())
