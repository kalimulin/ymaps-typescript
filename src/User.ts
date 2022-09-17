import { faker } from '@faker-js/faker';
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude(60, -60)),
      lng: parseFloat(faker.address.longitude())
    }
  }
}