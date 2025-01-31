import {} from "google.maps";

interface MapOptions {
  zoom: number;
  center: {
    lat: number;
    lng: number;
  };
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(element: HTMLElement, opts: MapOptions) {
    this.googleMap = new google.maps.Map(element, opts);
  }
}
