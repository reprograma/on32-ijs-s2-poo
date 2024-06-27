import BankAccount from '../BankAccount.model';
import Customer from '../Customer.model';
import { CustomerRequestStatus } from '../enums/CustomerRequestStatus.enum';
import { CustomerRequestType } from '../enums/CustomerRequestType.enum';

export default interface CustomerRequestDetails {
    id: string,
    type: CustomerRequestType,
    requester: Customer,
    createDate: Date,
    status: CustomerRequestStatus,
    responseDate?: Date
    account?: BankAccount
    initialDeposit?: number
}
