import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';
export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'orange';

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude(60, -60)),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `<h2>Company: ${this.name}</h2><p>Company catchphrase: ${this.catchPhrase}</p>`
  }
}