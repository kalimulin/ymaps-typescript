export class CustomMap {
  private yMap: ymaps.Map;

  constructor(elementId: string, zoom: number, center: number[]) {
    ymaps.ready(() => {
      this.yMap = new ymaps.Map(document.getElementById(elementId) as HTMLElement, {
        zoom,
        center
      })
    })
  }
}