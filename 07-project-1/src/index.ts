import { User } from "./Classes/class.User";
import { Company } from "./Classes/class.Company";
import { Map } from "./Classes/class.Map";

const user = new User();
const company = new Company();
const div = document.getElementById("map") as HTMLElement;
const MyMap = new Map(div, {
  zoom: 2,
  center: { lat: 0, lng: 0 },
});

MyMap.addMarker(user);
MyMap.addMarker(company);
