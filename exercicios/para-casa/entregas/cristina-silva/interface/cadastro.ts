//cpf por ser número único será usado como id
//cadastro inicial para colaboradores e clientes necessita dos mesmos dados

export interface CadastroPessoas {
    cpf: number,
    nome: string,
    dataNascimento: Date,
    endereco: string,
    cidade: string,
    estado: string;
    cep: number,
    telefone: number,
    fonteRenda: string;
    valorRenda: number;
}