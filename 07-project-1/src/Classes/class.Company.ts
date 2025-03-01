import { faker } from "@faker-js/faker";

export class Company {
  name: string;
  catchPhrase: string;
  location: { lat: number; lng: number };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  showSummary(): string {
    return (
      `<div>` +
      `<h2>Company: ${this.name}</h2>` +
      `<strong>${this.catchPhrase}</strong>` +
      `</div>`
    );
  }
}
