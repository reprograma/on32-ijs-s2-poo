import { UserInterface } from "./interfaces/user-interface";

export class User implements UserInterface {
  firstName: string;
  surname: string;
  age: number;
  cpf: string;
  email: string;
  monthlySalary: number;
  phone: string;

  constructor(
    firstName: string,
    surname: string,
    cpf: string,
    email: string,
    monthlySalary: number,
    phone: string,
    age: number
  ) {
    this.firstName = firstName;
    this.surname = surname;
    this.cpf = cpf;
    this.email = email;
    this.monthlySalary = monthlySalary;
    this.phone = phone;
    this.age = age;
  }
}
