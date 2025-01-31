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

interface Mappable {
  location: { lat: number; lng: number };
  name: string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(element: HTMLElement, opts: MapOptions) {
    this.googleMap = new google.maps.Map(element, opts);
  }

  addMarker(mappable: Mappable): void {
    const opts: MarkerOptions = {
      map: this.googleMap,
      position: mappable.location,
      label: mappable.name,
    };
    new google.maps.Marker(opts);
  }
}
