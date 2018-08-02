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
  // talal = 0;
  draggableMarker: any;
  location = {
    latitude: 21.485811,
    longitude: 39.192504799999995
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public rest: RestProvider) {
  }

  ionViewDidLoad() {
    this.initMap();
  }

  request() {
    // let date = new Date('2018-08-02T13:51:48.497Z');
    // date = new Date(date.setHours(date.getHours()+this.talal));
    let obj = {
      userId: 123467,
      condition: this.condition,
      latitude: this.draggableMarker.getPosition().lat(),
      longitude: this.draggableMarker.getPosition().lng(),
      type: 1,
      time: new Date()
    }
    // let random = Math.floor(Math.random() * 10) + 1;
    // for(let i = 0; i < random; i++) {
      this.rest.request(obj).subscribe((res) => {});
    //}
  }

  initMap() {
    this.geolocation.getCurrentPosition(options).then((location) => {
      console.log('Got position :)', location);
      this.location.latitude = location.coords.latitude;
      this.location.longitude = location.coords.longitude;
      // Set coordinates to service
      this.rest.setLocation(this.location);
      this.drawMap();
      this.drawRequestMap();
    }, (error) => {
      console.log('Nope :(');
      // Get coordinates from service
      let oldLocation = this.rest.getLocation();
      if (oldLocation) {
        this.location = oldLocation;
      }
        map = new google.maps.Map(this.mapElement.nativeElement, {
          center: {lat: this.location.latitude, lng: this.location.longitude},
          zoom: 15
        }); 
        requestMap = new google.maps.Map(this.requestMapElement.nativeElement, {
          center: {lat: this.location.latitude, lng: this.location.longitude},
          zoom: 15
        });
        this.drawMap();
        this.drawRequestMap();
    });
    
  }

  drawMap() {
    map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {lat: this.location.latitude, lng: this.location.longitude},
      zoom: 15
    });
    this.addUserMarker();

    infowindow = new google.maps.InfoWindow();
    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: {lat: this.location.latitude, lng: this.location.longitude},
      radius: 5000,
      type: ['hospital']
    }, (results,status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        for (let i = 0; i < results.length; i++) {
          this.addPlaceMarker(results[i]);
        }
      }
    });
  }

  drawRequestMap() {
    requestMap = new google.maps.Map(this.requestMapElement.nativeElement, {
      center: {lat: this.location.latitude, lng: this.location.longitude},
      zoom: 15
    });
    this.addDraggableMarker();
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

  addUserMarker() {
    let latLng = new google.maps.LatLng(this.location.latitude, this.location.longitude);
    let marker = new google.maps.Marker({
      map: map,
      icon: 'assets/imgs/logo.png',
      position: latLng
    });
  }

  addDraggableMarker() {
    this.draggableMarker = new google.maps.Marker({
      map: requestMap,
      draggable: true,
      position: {lat: this.location.latitude, lng: this.location.longitude}
    });
  }

}
