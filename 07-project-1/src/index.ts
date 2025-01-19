import { User } from "./Classes/class.User";
import { Company } from "./Classes/class.Company";

const user = new User();
const company = new Company();

console.log(user.showSummary());
console.log(company.showSummary());
