import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { RestProvider } from '../../providers/rest/rest'
import { RegistrationProvider } from '../../providers/registration/registration';
import { Storage } from '@ionic/storage';

declare var google;
  let map: any;
  let infowindow: any;
  let options = {
    enableHighAccuracy: false,
    timeout: 10000,
    maximumAge: 0
  };

@IonicPage()
@Component({
  selector: 'page-dependants',
  templateUrl: 'dependants.html',
})
export class DependantsPage {

  @ViewChild('map') mapElement: ElementRef;
  location = {
    latitude: 21.616980,
    longitude: 39.156355
  };
  dependantsLocation = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, 
              public rest: RestProvider, public registrationService: RegistrationProvider, private storage: Storage) {}

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    // this.geolocation.getCurrentPosition(options).then((location) => {
      // this.location.latitude = location.coords.latitude;
      // this.location.longitude = location.coords.longitude;
      // Set coordinates to service
      // this.rest.setLocation(this.location);
      this.drawMap();
    // }, (error) => {
    //   // Get coordinates from service
    //   let oldLocation = this.rest.getLocation();
    //   if (oldLocation) {
    //     this.location = oldLocation;
    //   }
    //     map = new google.maps.Map(this.mapElement.nativeElement, {
    //       center: {lat: this.location.latitude, lng: this.location.longitude},
    //       zoom: 15
    //     });
    //     this.drawMap();
    // });
  }

  drawMap() {
    map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {lat: this.location.latitude, lng: this.location.longitude},
      zoom: 15
    });
    this.addUserMarker();

    // Get Dependants then proceed with placing markers and info window
    this.storage.get('hajjNumber').then((hajjNumber) => {
      this.registrationService.getHajjData(hajjNumber).subscribe((res: any) => {
        console.log(res);
        if(res) {
          let dependents = res.dependents;
          infowindow = new google.maps.InfoWindow();
          for(let i = 0; i < dependents.length; i++) {
            this.registrationService.getHajjData(dependents[i]).subscribe((dep: any) => {
              this.addDependantMarker(dep);
            });
          }
        }
      });
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

  addDependantMarker(dependant) {
    let latLng = new google.maps.LatLng(dependant.latitude, dependant.longitude);
    let marker = new google.maps.Marker({
      map: map,
      position: latLng
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(dependant.name);
      infowindow.open(map, this);
    });
  }
  
}
