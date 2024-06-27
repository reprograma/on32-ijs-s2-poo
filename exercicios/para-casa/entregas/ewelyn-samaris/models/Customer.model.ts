import { v4 as uuidv4 } from 'uuid';
import BankAccount from './BankAccount.model';
import ICustomer from './interfaces/Customer.interface';
import CustomerRequest from './CustomerRequest.model';
import Bank from './Bank.model';
import ChangingAccountStatusRequest from './ChangingAccountStatusRequest.model';
import CheckingAccountRequest from './CreateCheckingAccountRequest.model';
import CreateCheckingAccountRequest from './CreateCheckingAccountRequest.model';

export default class Customer implements ICustomer {
    readonly id: string; 
    private customerFirstName: string;
    private customerLastName: string;
    private telephone: string;
    private address: string;
    private customerAverageIncome: number;
    private customerAccountList: BankAccount[];
    private requestHistory: CustomerRequest[];

    constructor(firstName: string, lastName: string, telephone: string, address: string, averageIncome: number) {
        this.customerFirstName = firstName;
        this.customerLastName = lastName;
        this.telephone = telephone;
        this.address = address;
        this.customerAverageIncome = averageIncome;
        this.id = uuidv4();
        this.customerAccountList = new Array<BankAccount>();
        this.requestHistory = new Array<CustomerRequest>();
    }

    createChangingAccountStatusRequest(account: BankAccount): ChangingAccountStatusRequest {
        const request = new ChangingAccountStatusRequest(this, account);        
        this.requestHistory.push(request);
        Bank.updateServiceRequestList(request);
        return request;
    }

    createCheckingAccountRequest(initialBalance: number): CreateCheckingAccountRequest {
        const request = new CheckingAccountRequest(this, initialBalance);        
        this.requestHistory.push(request);
        Bank.updateServiceRequestList(request);
        return request;
    }

    get accountList(): BankAccount[] {
        return this.customerAccountList;
    }

    get averageIncome(): number {
        return this.customerAverageIncome;
    }

    get firstName(): string {
        return this.customerFirstName;
    }

    get lastName(): string {
        return this.customerLastName;
    }

}