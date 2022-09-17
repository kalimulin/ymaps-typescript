import { Company } from "./Company";
import { User } from "./User";

interface Mappable {
  location: {
    lat: number,
    lng: number
  }
}

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

  addMarker(mappable: Mappable): void {
    this.yMap.geoObjects.add(new ymaps.Placemark([mappable.location.lat, mappable.location.lng], {}, {
        preset: 'islands#darkOrangeDotIcon',
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