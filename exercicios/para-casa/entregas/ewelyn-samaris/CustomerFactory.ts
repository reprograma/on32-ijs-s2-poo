import Customer from './models/Customer.model';

export default class CustomerFactory {
    static createCustomer(firstName: string, lastName: string, telephone: string, address: string, averageIncome: number): Customer {
        return new Customer(firstName, lastName, telephone, address, averageIncome);
    }
}
