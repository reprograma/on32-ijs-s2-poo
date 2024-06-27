import BankAccount from './BankAccount.model';
import Customer from './Customer.model';
import { TransactionStatus } from './enums/TransactionStatus.enum';
import { TransactionType } from './enums/TransactionsType.enum';
import { v4 as uuidv4 } from 'uuid';

export default class Transaction {
    readonly id: string;
    private type: TransactionType;
    private description: string;
    readonly transactionDate: Date;
    private status: TransactionStatus;
    private balanceSnapShot: number;

    constructor(type: TransactionType, status: TransactionStatus, value: number, balanceSnapShot: number, accountToTransferTo?: BankAccount) {
        this.id = uuidv4();
        this.type = type;
        this.transactionDate = new Date ();
        this.status = status;
        this.balanceSnapShot = balanceSnapShot;
        this.description = this.generateDescription(type, value, status, accountToTransferTo);
    }

    private generateDescription(operationType: TransactionType, operationValue: number, status: TransactionStatus, accountToTransferTo?: BankAccount): string {
        const today = new Date().toLocaleDateString('pt-BR');
        
        if(status === TransactionStatus.SUCCESS) {
            if(operationType === TransactionType.DEPOSIT) { 
                return `Depósito recebido no valor de ${operationValue} em ${today}. Saldo atualizado: ${this.balanceSnapShot}`;
            }
    
            if(operationType === TransactionType.WITHDRAW) { 
                return `Saque realizado no valor de ${operationValue} em ${today}. Saldo atualizado: ${this.balanceSnapShot}`;
            }
    
            if(operationType === TransactionType.TRANSFER) { 
                const fullNameTransferTo = `${accountToTransferTo?.owner.firstName} ${accountToTransferTo?.owner.lastName}`;
                return `Transferência realizada para ${fullNameTransferTo} no valor de ${operationValue} em ${today}. Saldo atualizado: ${this.balanceSnapShot}`;
            }

        }else if (status === TransactionStatus.FORBIDEN) {
            return 'Operação não pôde ser realizada. Saldo insuficiente';
        }

        return 'Operação não pôde ser realizada, para mais informações entre em contato com seu banco'; 
        
    }

}