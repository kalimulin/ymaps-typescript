// import { User } from './User';
// import { Company } from './Company';

// const user = new User();
// const company = new Company();

// const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
//   zoom: 1,
//   center: {
//     lat: 0,
//     lng: 0
//   }
// })

ymaps.ready(function() {
  const map = new ymaps.Map(document.getElementById('map') as HTMLElement, {
    zoom: 2,
    center: [0, 0]
  })
})