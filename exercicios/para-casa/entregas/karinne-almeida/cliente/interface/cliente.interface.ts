export interface ClienteInterface {
    nome: string,
    endereco: endereco,
    telefone: string,
    renda: number;
    contaCorrenteDisponivel(): boolean
    }

export type endereco = {
        rua: string,
        numero: string,
        cidade: string,
        bairro: string,
        estado: string,
        cep: string
    }