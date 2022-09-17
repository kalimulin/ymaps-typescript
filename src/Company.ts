import { faker } from '@faker-js/faker';
export class Company {
  companyName: string;
  catchPhrase: string;
  companyLocation: {
    lat: number;
    lon: number;
  }

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.companyLocation = {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude())
    }
  }
}