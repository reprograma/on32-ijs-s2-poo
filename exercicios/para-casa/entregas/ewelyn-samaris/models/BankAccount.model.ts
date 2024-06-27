import Customer from './Customer.model';
import { AccountStatus } from './enums/AccountStatus.enum';
import { AccountType } from './enums/AccountType.enum';
import Transaction from './Transaction.model';
import { v4 as uuidv4 } from 'uuid';

export default abstract class BankAccount {
    protected accountType: AccountType
    protected accountId: string;
    protected accountOwner: Customer;
    protected accountBalance: number;
    protected accountStatus: AccountStatus;
    protected customerTransactionHistory: Transaction[];
    private INITIAL_BALANCE: number = 0;

    constructor(owner: Customer, accountType: AccountType) {
        this.accountType = accountType;
        this.accountId = uuidv4();
        this.accountBalance = this.INITIAL_BALANCE;
        this.accountOwner = owner;
        this.accountStatus = AccountStatus.ACTIVE;
        this.customerTransactionHistory = new Array <Transaction>();
    }

    abstract deposit(value: number): void;
    abstract withdraw(value: number): void;
    abstract transfer(value: number, accountToTransferTo: BankAccount): void;

    get owner(): Customer {
        return this.accountOwner;
    }

    get balance(): number {
        return this.accountBalance;
    }

    get status(): AccountStatus {
        return this.accountStatus;
    }

    set status(newStatus: AccountStatus) {
        this.accountStatus = newStatus;
    }

    get transactionHistory(): Transaction[] {
        return this.customerTransactionHistory;
    }

    get id(): string{
        return this.accountId;
    }

    get type() {
        return this.accountType;
    }

}