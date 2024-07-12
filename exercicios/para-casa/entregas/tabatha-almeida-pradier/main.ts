import { User } from "./users/user";
import { UserInterface } from "./users/user-interface";
import { UserUtils } from "./users/user.utils";

console.log("Rodando...!");
console.log("          ");
console.log(":)");
console.log("          ");

const user = new User(
  "Tabatha de Almeida",
  " Pradier",
  "06376298212",
  "tabathapradier@gatinha.com",
  5900,
  "(21)945452122",
  18
);

const display = (...users: UserInterface[]): void => {
  console.table(user);
  console.log(UserUtils.getAge(user));
  console.log("     ");
  console.log(UserUtils.getAnnualSalary(user));
};

display();
