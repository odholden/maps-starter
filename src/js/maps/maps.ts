import {} from 'googlemaps';
import { styles } from './maps-data';

export interface ILocation {
  lat: number,
  lng: number
}

export const initMap = (coordinates: ILocation): google.maps.Map => {
  var map: google.maps.Map = new google.maps.Map(
    document.getElementById('map'), 
    { zoom: 4, 
      center: coordinates
    }
  );
  var marker: google.maps.Marker = new google.maps.Marker({position: coordinates, map: map});
  return map;
}