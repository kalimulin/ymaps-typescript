import { Company } from "./Company";
import { User } from "./User";

export class CustomMap {
  private yMap: ymaps.Map;

  constructor(elementId: string) {
    ymaps.ready(() => {
      this.yMap = new ymaps.Map(document.getElementById(elementId) as HTMLElement, {
        zoom: 2,
        center: [0,0]
      })
    })
  }

  addUserMarker(user: User) {
    this.yMap.geoObjects.add(new ymaps.Placemark([user.location.lat, user.location.lng], {
      balloonContent: user.name
    }, {
        preset: 'islands#redPersonIcon',
    }));
  }

  addCompanyMarker(company: Company) {
    this.yMap.geoObjects.add(new ymaps.Placemark([company.companyLocation.lat, company.companyLocation.lng], {
      balloonContent: company.companyName
    }, {
        preset: 'islands#orangeFactoryIcon',
    }));
  }
}