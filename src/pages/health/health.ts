import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { RestProvider } from '../../providers/rest/rest'

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
  // markers = [];
  condition = '1';
  currentLocation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public rest: RestProvider) {
  }

  ionViewDidLoad() {
    this.initMap();
  }

  request() {
    let obj = {
      userId: 123467,
      condition: this.condition,
      latitude: this.currentLocation.latitude,
      longitude: this.currentLocation.longitude,
      type: 'health',
      time: new Date()
    }
    this.rest.request(obj).subscribe((res) => {
       // TODO: handle error or navigate back on success
    });
  }

  // ===============================================================
  // V1
  // ===============================================================
  initMap() {
    this.geolocation.getCurrentPosition().then((location) => {
      this.currentLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: location.coords.latitude, lng: location.coords.longitude},
        zoom: 14
      });
  
      infowindow = new google.maps.InfoWindow();
      let service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: {lat: location.coords.latitude, lng: location.coords.longitude},
        radius: 5000,
        type: ['hospital']
      }, (results,status) => {
        this.addUserMarker(location);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: 21.485811, lng: 39.192504799999995},
        zoom: 14
      });
    });
    // let watchID = navigator.geolocation.watchPosition(this.onPositionChangedSuccess, this.onPositionChangedError, { timeout: 30000 });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
    
  }

  // onPositionChangedSuccess(position) {
  //   // TODO: Send position (latitude, longitude) to backend service
  //   console.log(position.coords.latitude + ', ' + position.coords.longitude);
  // }

  // onPositionChangedError(error) {
  //   // On error do nohting
  //   // Show alert temporary for testing purpose
  //   alert('code: '    + error.code    + '\n' +
  //         'message: ' + error.message + '\n');
  // }

  createMarker(place) {
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
      map: map,
      position: placeLoc
    });
  
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

  addUserMarker(location) {
    let latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
    let marker = new google.maps.Marker({
      map: map,
      icon: 'assets/imgs/logo.png',
      position: latLng
    });
  }

  // ===============================================================
  // V2
  // ===============================================================
  // initMap() {
  //   this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
  //     let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
  //     map = new google.maps.Map(this.mapElement.nativeElement, {
  //       zoom: 15,
  //       center: mylocation
  //     });
  //   });
  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe((data) => {
  //     console.log('changed', data);
  //     this.deleteMarkers();
  //     let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
  //     let image = 'assets/imgs/blue-bike.png';
  //     this.addMarker(updatelocation,image);
  //     this.setMapOnAll(map);
  //   });
  // }

  // addMarker(location, image) {
  //   let marker = new google.maps.Marker({
  //     position: location,
  //     map: map
  //     // icon: image
  //   });
  //   this.markers.push(marker);
  // }
  
  // setMapOnAll(map) {
  //   for (var i = 0; i < this.markers.length; i++) {
  //     this.markers[i].setMap(map);
  //   }
  // }
  
  // clearMarkers() {
  //   this.setMapOnAll(null);
  // }
  
  // deleteMarkers() {
  //   this.clearMarkers();
  //   this.markers = [];
  // }

}
