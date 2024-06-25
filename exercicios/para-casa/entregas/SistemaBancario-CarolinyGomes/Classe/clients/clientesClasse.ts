//cliente classe

import { contaBancaria } from "../../Interface/ContaBancaria-interface";

export class Cliente {
    /*princípio de encapsulamento do POO, 
    private evita modificações externas indesejadas para garantir 
    que os dados sejam acessados e modificados apenas 
    através de métodos públicos (ou métodos getters e setters).*/
    private id: number;
    private nomeCompleto: string;
    private endereco: string;
    private numeroTelefone: string;
    private rendaSalarial: number;
    private contas: contaBancaria[];//array de contas do tipo contaBancaria
    
    constructor(id: number, nomeCompleto: string, endereco: string, numeroTelefone: string, rendaSalarial: number){
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.endereco = endereco; 
        this.numeroTelefone = numeroTelefone; 
        this.rendaSalarial = rendaSalarial;
        this.contas = [];

    }
    
    public getId():number {
        return this.id
    }
    public getNomeCompleto(): string {
        return this.nomeCompleto;
    }
    public getNumeroTelefone(): string {
        return this.numeroTelefone;
    }
    public getEndereco():string {
        return this.endereco
    }
    public getRendaSalarial(): number {
        return this.rendaSalarial
    }
    //método para obter um array de contas do tipo contaBancaria
    //retorna o valor da propriedade privada contas
    public getContas(): contaBancaria[] {
        return this.contas;
    }
    public adicionarConta(conta: contaBancaria): void{
        this.contas.push(conta);
    }
}
