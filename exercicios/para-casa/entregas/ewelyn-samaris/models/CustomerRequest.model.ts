import Customer from './Customer.model';
import { CustomerRequestStatus } from './enums/CustomerRequestStatus.enum';
import { CustomerRequestType } from './enums/CustomerRequestType.enum';
import { v4 as uuidv4 } from 'uuid';

export default abstract class CustomerRequest {
    protected requestType: CustomerRequestType;
    readonly id: string;
    protected customerRequester: Customer;
    protected createDate: Date;
    protected requestStatus: CustomerRequestStatus;
    responseDate?: Date;

    constructor(customer: Customer, requestType: CustomerRequestType) {
        this.requestType = requestType;
        this.id = uuidv4();
        this.customerRequester = customer;
        this.createDate = new Date();
        this.requestStatus = CustomerRequestStatus.PENDING;
    }

    get type(): CustomerRequestType {
        return this.requestType;
    }

    set type(requestType: CustomerRequestType) {
        this.requestType = requestType;
    }

    get status(): CustomerRequestStatus {
        return this.requestStatus;
    }

    set status(requestStatus: CustomerRequestStatus) {
        this.requestStatus = requestStatus;
    }

    get requester(): Customer{
        return this.customerRequester;
    }

    set requester(requester: Customer) {
        this.customerRequester = requester;
    }

}
