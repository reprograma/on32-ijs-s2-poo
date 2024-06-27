import BankAccount from './BankAccount.model';
import Customer from './Customer.model';
import { AccountType } from './enums/AccountType.enum';
import { TransactionStatus } from './enums/TransactionStatus.enum';
import { TransactionType } from './enums/TransactionsType.enum';
import Transaction from './Transaction.model';

export default class CheckingAccount extends BankAccount {
    private specialCheckLimit: number;
    private MINIMUN_TO_DEPOSIT: number = 1;

    constructor(owner: Customer, initialBalance: number, specialCheckLimit: number) {
        super(owner, AccountType.CHECKING_ACCOUNT);
        if(initialBalance) this.deposit(initialBalance);
        this.specialCheckLimit = specialCheckLimit;
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
        if(this.balance + this.specialCheckLimit < value) {
            const transaction = new Transaction(TransactionType.WITHDRAW, TransactionStatus.FORBIDEN, value, this.balance);
            this.transactionHistory.push(transaction);
        }else{
            this.accountBalance -= value;
            const transaction = new Transaction(TransactionType.WITHDRAW, TransactionStatus.SUCCESS, value, this.balance);
            this.transactionHistory.push(transaction);
        }
    }

    transfer(value: number, accountToTransferTo: BankAccount): void {
        if(this.balance + this.specialCheckLimit < value) {
            const transaction = new Transaction(TransactionType.TRANSFER, TransactionStatus.FORBIDEN, value, this.balance, accountToTransferTo);
            this.transactionHistory.push(transaction);
        }else{
            this.accountBalance -= value;
            const transaction = new Transaction(TransactionType.TRANSFER, TransactionStatus.SUCCESS, value, this.balance, accountToTransferTo);
            this.transactionHistory.push(transaction);
        }
    }
}