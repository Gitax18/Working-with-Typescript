import { User } from "./Classes/class.User";
import { Company } from "./Classes/class.Company";
import {} from "google.maps";

const user = new User();
const company = new Company();

const div = document.getElementById("map") as HTMLElement;

console.log(div);
new google.maps.Map(div, {
  zoom: 8,
  center: { lat: user.location.lat, lng: user.location.lng },
});
