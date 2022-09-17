export interface Mappable {
  location: {
    lat: number,
    lng: number
  };
  markerContent(): string;
  color: string; // blue|red|darkOrange|night|darkBlue|pink|gray|brown|darkGreen|violet|black|yellow|green|orange|lightBlue|olive
}

export class CustomMap {
  private yMap: ymaps.Map;

  constructor(elementId: string) {
    ymaps.ready(() => {
      this.yMap = new ymaps.Map(document.getElementById(elementId) as HTMLElement, {
        zoom: 2,
        center: [0,0]
      })
      this.yMap.events.add('click', () => {
        if (this.yMap.balloon.isOpen()) {
          this.yMap.balloon.close();
        }
      })
    })
  }

  addMarker(mappable: Mappable): void {
    this.yMap.geoObjects.add(new ymaps.Placemark([mappable.location.lat, mappable.location.lng], {
      balloonContentBody: mappable.markerContent()
    }, {
        preset: `islands#${mappable.color}DotIcon`,
    }));
  }
}