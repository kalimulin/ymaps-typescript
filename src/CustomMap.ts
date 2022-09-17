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

  addMarker(mappable: User | Company) {
    this.yMap.geoObjects.add(new ymaps.Placemark([mappable.location.lat, mappable.location.lng], {
      balloonContent: mappable.name
    }, {
        preset: ('catchPhrase' in mappable) ? 'islands#orangeFactoryIcon' : 'islands#redPersonIcon',
    }));
  }

  // addCompanyMarker(company: Company) {
  //   this.yMap.geoObjects.add(new ymaps.Placemark([company.location.lat, company.location.lng], {
  //     balloonContent: company.name
  //   }, {
  //       preset: 'islands#orangeFactoryIcon',
  //   }));
  // }
}