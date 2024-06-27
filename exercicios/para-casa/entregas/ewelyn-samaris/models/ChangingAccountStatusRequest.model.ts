import BankAccount from './BankAccount.model';
import Customer from './Customer.model';
import CustomerRequest from './CustomerRequest.model';
import { CustomerRequestType } from './enums/CustomerRequestType.enum';

export default class ChangingAccountStatusRequest extends CustomerRequest {
    private customerAccount: BankAccount;

    constructor(customer: Customer, account: BankAccount) {
        super(customer, CustomerRequestType.CHANGE_STATUS);
        this.customerAccount = account;
    }

    get account(): BankAccount {
        return this.customerAccount;
    }

    set account(account: BankAccount) {
        this.customerAccount = account;
    }

}
