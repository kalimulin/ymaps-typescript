import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

import { CustomMap } from "./CustomMap";

const customMap = new CustomMap('map');

ymaps.ready(() => {
  customMap.addMarker(user);
  customMap.addMarker(company);
})
