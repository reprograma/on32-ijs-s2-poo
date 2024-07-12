import { User } from "./user";

export class UserUtils {
  static getAnnualSalary(user: User): string {
    const annual = user.monthlySalary * 12;
    const feedback = annual.toLocaleString("pt-Br", {
      style: "currency",
      currency: "BRL",
    });
    return `Annual ${user.firstName} ${user.surname} income is: R$ ${feedback}`;
  }

  static getAge(user: User): string {
    if (user.age >= 18) {
      return `${user.firstName} ${user.surname} is over 18 years old. Account creation granted!`;
    }

    return `${user.firstName} ${user.surname} is under 18 years old. Account creation denied!`;
  }
}
