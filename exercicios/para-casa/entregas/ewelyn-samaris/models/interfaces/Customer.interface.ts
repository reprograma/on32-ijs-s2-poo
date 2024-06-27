import BankAccount from '../BankAccount.model';
import ChangingAccountStatusRequest from '../ChangingAccountStatusRequest.model';
import CreateCheckingAccountRequest from '../CreateCheckingAccountRequest.model';

export default interface ICustomer {
    createChangingAccountStatusRequest(account: BankAccount): ChangingAccountStatusRequest;
    createCheckingAccountRequest(initialBalance: number, specialCheckLimit: number): CreateCheckingAccountRequest;
}
