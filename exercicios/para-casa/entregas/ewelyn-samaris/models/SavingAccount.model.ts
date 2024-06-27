import BankAccount from './BankAccount.model';
import Customer from './Customer.model';
import { AccountType } from './enums/AccountType.enum';
import { TransactionStatus } from './enums/TransactionStatus.enum';
import { TransactionType } from './enums/TransactionsType.enum';
import Transaction from './Transaction.model';

export default class SavingAccount extends BankAccount{
    private MINIMUN_TO_DEPOSIT: number = 1;

    constructor(owner: Customer, initialBalance: number) {
        super(owner, AccountType.SAVING_ACCOUNT);
        if(initialBalance) this.deposit(initialBalance);
    }

    deposit(value: number): void {
        if(value < this.MINIMUN_TO_DEPOSIT) {
            const transaction = new Transaction(TransactionType.DEPOSIT, TransactionStatus.ERROR, value, this.balance);
            this.transactionHistory.push(transaction);
        }else{
            this.accountBalance += value;
            const transaction = new Transaction(TransactionType.DEPOSIT, TransactionStatus.SUCCESS, value, this.balance);
            this.transactionHistory.push(transaction);
        }
    }
    
    withdraw(value: number): void {
        if(this.balance < value) {
            const transaction = new Transaction(TransactionType.WITHDRAW, TransactionStatus.FORBIDEN, value, this.balance);
            this.transactionHistory.push(transaction);
        }else{
            this.accountBalance -= value;
            const transaction = new Transaction(TransactionType.WITHDRAW, TransactionStatus.SUCCESS, value, this.balance);
            this.transactionHistory.push(transaction);
        }
    }

    transfer(value: number, accountToTransferTo: BankAccount): void {
        if(this.balance < value) {
            const transaction = new Transaction(TransactionType.TRANSFER, TransactionStatus.FORBIDEN, value, this.balance, accountToTransferTo);
            this.transactionHistory.push(transaction);
        }else{
            this.accountBalance -= value;
            accountToTransferTo.deposit(value);
            const transaction = new Transaction(TransactionType.TRANSFER, TransactionStatus.SUCCESS, value, this.balance, accountToTransferTo);
            this.transactionHistory.push(transaction);
        }
    }

}