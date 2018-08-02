import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
let map: any;
let infowindow: any;

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {

  @ViewChild('map') mapElement: ElementRef;
  location = {
    latitude: 21.616980,
    longitude: 39.156355
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.drawMap();
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
      type: ['food']
    }, (results,status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          this.addPlaceMarker(results[i]);
        }
      }
    });
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

}
