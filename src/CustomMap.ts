interface Mappable {
  location: {
    lat: number,
    lng: number
  };
  markerContent(): string;
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
    console.log(mappable.markerContent());
    this.yMap.geoObjects.add(new ymaps.Placemark([mappable.location.lat, mappable.location.lng], {
      balloonContentBody: mappable.markerContent()
    }, {
        preset: 'islands#darkOrangeDotIcon',
    }));
  }
}