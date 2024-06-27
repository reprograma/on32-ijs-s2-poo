import BankAccount from './BankAccount.model';
import CheckingAccount from './CheckingAccount.model';
import Customer from './Customer.model';
import Client from './Customer.model';
import SavingAccount from './SavingAccount.model';
import CustomerFactory from '../CustomerFactory';
import Error from './interfaces/Error.interface';
import { AccountStatus } from './enums/AccountStatus.enum';
import CustomerRequest from './CustomerRequest.model';
import { CustomerRequestType } from './enums/CustomerRequestType.enum';
import { CustomerRequestStatus } from './enums/CustomerRequestStatus.enum';
import CheckingAccountRequest from './CreateCheckingAccountRequest.model';
import ChangingAccountStatusRequest from './ChangingAccountStatusRequest.model';

export default class Bank {
    private VALUE_FOR_INCREMENT = 250;
    private BASE_VALUE = 500;
    private MINIMUN_SPECIAL_CHECK_LIMIT: number = 100;
    private name: string;
    private customerWallet: Client[];
    private activeAccounts: BankAccount[];
    private inactiveAccounts: BankAccount[];
    private static serviceRequestList: CustomerRequest[];
    errors: Error[];

    constructor() {
        this.name = 'Dev Comunity Bank';
        this.customerWallet = new Array<Client>();
        this.activeAccounts = new Array<BankAccount>();
        this.inactiveAccounts = new Array<BankAccount>();
        this.errors = new Array<Error>();
        Bank.serviceRequestList = new Array<CustomerRequest>();
    }

    static updateServiceRequestList(request: CustomerRequest): void {
        Bank.serviceRequestList.push(request);
    }

    createNewCustomer(firstName: string, lastName: string, telephone: string, address: string, averageIncome: number): Customer {
        const customer = CustomerFactory.createCustomer(firstName, lastName, telephone, address, averageIncome);
        this.addCustomerToWallet(customer);
        
        return customer;
    }

    private addCustomerToWallet(customer: Customer): void {
        this.customerWallet.push(customer);
    }
    
    createSavingAccount(owner: Customer, initialBalance: number): SavingAccount {
        const savingAccount = new SavingAccount(owner, initialBalance);
        owner.accountList.push(savingAccount);
        this.activeAccounts.push(savingAccount);
        return savingAccount;
    }

    analyzeCustomerRequests(): void {
        this.requestsList.forEach((request: CustomerRequest) => {
            if(request.type === CustomerRequestType.CHANGE_STATUS && request instanceof ChangingAccountStatusRequest) {
                this.analyzeChangingStatusAccountRequest(request);
            }else if (request.type === CustomerRequestType.CREATE_CHECKING_ACCOUNT && request instanceof CheckingAccountRequest) {
                this.analyzeCreateCheckingAccountRequest(request);
            }
        });
    }

    private analyzeChangingStatusAccountRequest(request: ChangingAccountStatusRequest): void {
        if(!this.isBalancePositive(request.account)) {
            request.status = CustomerRequestStatus.DENIED;
            request.responseDate = new Date();
            return;
        }

        this.changeAccountStatus(request.account);
        request.status = CustomerRequestStatus.APPROVED;
        request.responseDate = new Date();
    }

    private isBalancePositive(account: BankAccount): boolean{
        return account.balance >= 0;
    }

    private changeAccountStatus(account: BankAccount): void {
        if(account.status === AccountStatus.ACTIVE) {
            account.status = AccountStatus.INACTIVE;
        }else if (account.status === AccountStatus.INACTIVE) {
            account.status = AccountStatus.ACTIVE;
        }else{
            const message: string = `Erro: Conta com status indefinido`;
            this.errors.push({date: new Date(), message: message})
            throw new Error(message);
        }
    }

    private analyzeCreateCheckingAccountRequest(request:CheckingAccountRequest): void {
        if(request.requester.averageIncome >= this.BASE_VALUE) {
            const approvedSpecialCheckLimit = this.setSpecialCheckLimit(request.requester.averageIncome);
            this.createCheckingAccount(request.requester, request.initialDeposit, approvedSpecialCheckLimit);
            request.status = CustomerRequestStatus.APPROVED;
            request.responseDate = new Date();
            return;
        }
        
        request.status = CustomerRequestStatus.DENIED;
        request.responseDate = new Date();
    }

    private setSpecialCheckLimit(customerAverageIncome: number): number {
        const incrementValue = Math.floor((customerAverageIncome - this.BASE_VALUE) / this.VALUE_FOR_INCREMENT) * this.MINIMUN_SPECIAL_CHECK_LIMIT;
        return this.BASE_VALUE + incrementValue;
    }
    
    private createCheckingAccount(owner: Customer, initialBalance: number, specialCheckLimit: number): CheckingAccount {
        const checkingAccount = new CheckingAccount(owner, initialBalance, specialCheckLimit);
        owner.accountList.push(checkingAccount);
        this.activeAccounts.push(checkingAccount);
        return checkingAccount;
    }

    get requestsList(): CustomerRequest[] {
        return Bank.serviceRequestList;
    }

    get activeAccountsList(): BankAccount[] {
        return this.activeAccounts;
    }

    get inactiveAccountsList(): BankAccount[] {
        return this.inactiveAccounts;
    }

    get balance(): number {
        let totalBalance: number = this.activeAccounts.reduce((totalBalance, account) => {return totalBalance += account.balance}, 0);
        return totalBalance;
    }

    get bankCustomerWallet(): Customer[] {
        return this.customerWallet;
    }

}