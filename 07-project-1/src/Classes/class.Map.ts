import {} from "google.maps";
import { User } from "./class.User";
import { Company } from "./class.Company";

interface MapOptions {
  zoom: number;
  center: {
    lat: number;
    lng: number;
  };
}

interface MarkerOptions {
  map: google.maps.Map;
  position: { lat: number; lng: number };
  label: string;
}

export class Map {
  private googleMap: google.maps.Map;
  private userMarker: google.maps.Marker;
  private companyMarker: google.maps.Marker;

  constructor(element: HTMLElement, opts: MapOptions) {
    this.googleMap = new google.maps.Map(element, opts);
  }

  addMarker(entity: User | Company, entityMarker: google.maps.Marker): void {
    const opts: MarkerOptions = {
      map: this.googleMap,
      position: entity.location,
      label: entity.name,
    };
    entityMarker = new google.maps.Marker(opts);
  }

  addUserMarker(user: User): void {
    this.addMarker(user, this.userMarker);
  }

  addCompanyMarker(company: Company): void {
    this.addMarker(company, this.companyMarker);
  }
}
