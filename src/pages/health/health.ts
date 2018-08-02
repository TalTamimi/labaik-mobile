import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { RestProvider } from '../../providers/rest/rest'

declare var google;
  let map: any;
  let requestMap: any;
  let infowindow: any;
  let options = {
    enableHighAccuracy: false,
    timeout: 10000,
    maximumAge: 0
};

@IonicPage()
@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('requestMap') requestMapElement: ElementRef;
  condition = '1';
  draggableMarker: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public rest: RestProvider) {
    console.log('test health constructor');
  }

  ionViewDidLoad() {
    this.initMap();
  }

  request() {
    let obj = {
      userId: 123467,
      condition: this.condition,
      latitude: this.draggableMarker.getPosition().lat(),
      longitude: this.draggableMarker.getPosition().lng(),
      type: 1,
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
    this.geolocation.getCurrentPosition(options).then((location) => {
      console.log('Got position :)', location);
      // Set coordinates to service
      this.rest.setLocation(location);
      this.drawMap(location);
      this.drawRequestMap(location);
    }, (error) => {
      console.log('Nope :(');
      // Get coordinates from service
      let location = this.rest.getLocation();
      if (location) {
        this.drawMap(location);
        this.drawRequestMap(location);
      }else {
        let lat = 21.485811;
        let lng = 39.192504799999995;
        map = new google.maps.Map(this.mapElement.nativeElement, {
          center: {lat: lat, lng: lng},
          zoom: 15
        }); 
        requestMap = new google.maps.Map(this.requestMapElement.nativeElement, {
          center: {lat: lat, lng: lng},
          zoom: 15
        });
        this.addDraggableMarker(lat, lng);
      }
    });
    // let watchID = navigator.geolocation.watchPosition(this.onPositionChangedSuccess, this.onPositionChangedError, { timeout: 30000 });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
    
  }

  drawMap(location) {
    map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {lat: location.coords.latitude, lng: location.coords.longitude},
      zoom: 15
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
        console.log(results);
        for (let i = 0; i < results.length; i++) {
          this.addPlaceMarker(results[i]);
        }
      }
    });
  }

  drawRequestMap(location) {
    requestMap = new google.maps.Map(this.requestMapElement.nativeElement, {
      center: {lat: location.coords.latitude, lng: location.coords.longitude},
      zoom: 15
    });
    this.addDraggableMarker(location.coords.latitude, location.coords.longitude);
  }

  addPlaceMarker(place) {
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

  addDraggableMarker(lat, lng) {
    this.draggableMarker = new google.maps.Marker({
      map: requestMap,
      draggable: true,
      position: {lat: lat, lng: lng}
    });
  }

}
