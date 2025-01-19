import { faker } from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: { lat: number; lng: number };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  showSummary(): string {
    return `Name: ${this.companyName}\nLat: ${this.location.lat}\nLng: ${this.location.lng}`;
  }
}
