import Customer from './Customer.model';
import CustomerRequest from './CustomerRequest.model';
import { CustomerRequestType } from './enums/CustomerRequestType.enum';


export default class CreateCheckingAccountRequest extends CustomerRequest{
    private customerInitialDeposit: number;

    constructor(customer: Customer, initialDeposit: number) {
        super(customer, CustomerRequestType.CREATE_CHECKING_ACCOUNT);
        this.customerInitialDeposit = initialDeposit;
    }

    get initialDeposit() {
        return this.customerInitialDeposit;
    }

}