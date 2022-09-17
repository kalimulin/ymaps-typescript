import { faker } from '@faker-js/faker';
export class Company {
  companyName: string;
  catchPhrase: string;
  companyLocation: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.companyLocation = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude(60, -60))
    }
  }
}