import { faker } from "@faker-js/faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.fullName();
    this.location.lat = parseFloat(faker.address.latitude());
    this.location.lng = parseFloat(faker.address.longitude());
  }

  showSummary(): string {
    return `Name: ${this.name}\nLat: ${this.location.lat}\nLng: ${this.location.lng}`;
  }
}
