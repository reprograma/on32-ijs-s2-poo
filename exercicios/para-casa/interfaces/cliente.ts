export interface DetalhesCliente {
    id: number;
    nome: string;
    telefone: string;
    salario: number;
    endereco: Endereco;
}

export interface Endereco {
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
}

    