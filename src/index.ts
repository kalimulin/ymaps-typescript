import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

import { CustomMap } from "./CustomMap";

const map = new CustomMap('map');

ymaps.ready(() => {
  map.addUserMarker(user);
  map.addCompanyMarker(company);
})
