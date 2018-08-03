import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { RestProvider } from '../../providers/rest/rest'

declare var google;
  let map: any;
  let requestMap: any;
  let infowindow: any;
  let expand = false;
  let options = {
    enableHighAccuracy: false,
    timeout: 10000,
    maximumAge: 0
  };

@IonicPage()
@Component({
  selector: 'page-security',
  templateUrl: 'security.html',
})
export class SecurityPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('requestMap') requestMapElement: ElementRef;
  condition = '1';
  // talal = 0;
  draggableMarker: any;
  loadingMap = true;
  location = {
    latitude: 21.616980,
    longitude: 39.156355
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public rest: RestProvider) {
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
      type: 2,
      time: new Date()
    }
    this.rest.request(obj).subscribe((res) => {
      this.navCtrl.pop();
    });
  }

  initMap() {
      this.drawMap();
      this.drawRequestMap();
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
      type: ['police']
    }, (results,status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          this.addPlaceMarker(results[i]);
        }
      }
    });
    this.loadingMap = false;
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
      icon: 'assets/imgs/current-sm.png',
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
