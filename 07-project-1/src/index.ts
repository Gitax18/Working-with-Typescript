import { User } from "./Classes/class.User";
import { Company } from "./Classes/class.Company";
import { Map } from "./Classes/class.Map";

const user = new User();
const company = new Company();
const div = document.getElementById("map") as HTMLElement;
new Map(div, {
  zoom: 3,
  center: { lat: 90, lng: 180 },
});
