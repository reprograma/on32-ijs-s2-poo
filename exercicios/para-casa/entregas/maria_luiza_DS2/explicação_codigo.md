```typescript
// INTERFACES

import { tipoConta } from "./tipo-conta-enum";

export interface ClienteBanco{
    id: number;
    nome: string;
    endereco: string;
    numeroTelefone: string;
    rendaMensal: number;
    
}

export interface Conta{
    numeroConta: number;
    saldo: number;
    titularConta: ClienteBanco;
    tipo: tipoConta
}

```
As interfaces __"ClienteBanco"__ e __"Conta"__ foram criadas para estabalecer o _contrato_ do que é necessário as classes de conta e cliente devem ter.

```typescript
// Classe - Cliente

export class NovoCliente implements ClienteBanco {
    private static idCliente: number = 1;
    public id: number;

    constructor(
        public nome: string,
        public endereco: string,
        public numeroTelefone: string,
        public rendaMensal: number
    ) {
        this.id = NovoCliente.idCliente++;
    }
}

```
A classe __NovoCliente__ cria o molde com todas as informações necessárias dentro dos objetos clientes. 