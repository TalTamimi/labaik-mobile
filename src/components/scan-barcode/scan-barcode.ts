import { Component } from '@angular/core';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";
import {LandingService} from "../../pages/landing/landing.service";
/**
 * Generated class for the ScanBarcodeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'scan-barcode',
  templateUrl: 'scan-barcode.html'
})
export class ScanBarcodeComponent {



  constructor(private qrScanner: QRScanner,
              private landingService: LandingService) {
  }

  scanBarcode() {
    ((<any>window).document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
    ((<any>window).document.querySelector('.landing-content') as HTMLElement).classList.add('cameraView');
    ((<any>window).document.querySelector('.landing') as HTMLElement).classList.add('short');
    ((<any>window).document.querySelector('.registration') as HTMLElement).classList.add('fadeOut');
    this.qrScanner.show();
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((hajjNumber: string) => {
            ((<any>window).document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
            ((<any>window).document.querySelector('.landing-content') as HTMLElement).classList.remove('cameraView');
            ((<any>window).document.querySelector('.landing') as HTMLElement).classList.remove('short');
            ((<any>window).document.querySelector('.registration') as HTMLElement).classList.remove('fadeOut');
            ((<any>window).document.querySelector('.registration') as HTMLElement).classList.remove('fadeIn');
            this.landingService.notifyHajjNumber(hajjNumber);
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }
}
