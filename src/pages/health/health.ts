import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
  let map: any;
  let infowindow: any;
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

@IonicPage()
@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    this.geolocation.getCurrentPosition().then((location) => {
      console.log(location);
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: location.coords.latitude, lng: location.coords.longitude},
        zoom: 15
      });
  
      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: {lat: location.coords.latitude, lng: location.coords.longitude},
        radius: 1000,
        type: ['hospital']
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      console.log(error);
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: 21.485811, lng: 39.192504799999995},
        zoom: 18
      });
    });
    let watchID = navigator.geolocation.watchPosition(this.onPositionChangedSuccess, this.onPositionChangedError, { timeout: 30000 });
  }

  onPositionChangedSuccess(position) {
    // TODO: Send position (latitude, longitude) to backend service
    console.log(position.coords.latitude + ', ' + position.coords.longitude);
  }

  onPositionChangedError(error) {
    // On error do nohting
    // Show alert temporary for testing purpose
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
  }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc
    });
  
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

}
