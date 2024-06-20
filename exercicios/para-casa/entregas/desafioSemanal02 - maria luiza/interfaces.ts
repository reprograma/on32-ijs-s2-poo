export interface ClienteBanco{
    id: number;
    nome: string;
    endereco: string;
    numeroTelefone: string;
    rendaMensal: number;
}

export interface conta{
    numeroConta: number;
    saldo: number;
    titularConta: ClienteBanco;
}