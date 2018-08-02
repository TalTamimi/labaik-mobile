import { HomePage } from './../../pages/home/home';
import { NavController } from 'ionic-angular';
import { LandingService } from './../../pages/landing/landing.service';
import { Component, Input, OnInit } from '@angular/core';
import {RegistrationProvider} from "../../providers/registration/registration";
import {FCM} from "@ionic-native/fcm";
import { Storage } from '@ionic/storage';
const nationalities = [ "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguans", "Argentinean", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Barbudans", "Batswana", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe", "Burmese", "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djibouti", "Dominican", "Dutch", "East Timorese", "Ecuadorean", "Egyptian", "Emirian", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Fijian", "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinea-Bissauan", "Guinean", "Guyanese", "Haitian", "Herzegovinian", "Honduran", "Hungarian", "I-Kiribati", "Icelander", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakhstani", "Kenyan", "Kittian and Nevisian", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivan", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", "Moroccan", "Mosotho", "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander", "Nicaraguan", "Nigerian", "Nigerien", "North Korean", "Northern Irish", "Norwegian", "Omani", "Pakistani", "Palauan", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Samoan", "San Marinese", "Sao Tomean", "Saudi", "Scottish", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovakian", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "Spanish", "Sri Lankan", "Sudanese", "Surinamer", "Swazi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan", "Trinidadian or Tobagonian", "Tunisian", "Turkish", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbekistani", "Venezuelan", "Vietnamese", "Welsh", "Yemenite", "Zambian", "Zimbabwean" ]

/**
 * Generated class for the HajjInformationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hajj-information',
  templateUrl: 'hajj-information.html'
})
export class HajjInformationComponent implements OnInit {


  lang: any;
  loading = true;
  @Input() hide = false;
  @Input() show = false;
  hajjData: any;
  deviceTokenId = '';
  hajjNumber = '';
  constructor(
    public landingService: LandingService,
    private fcm:FCM,
    public navCtrl: NavController,
    private registrationService:RegistrationProvider,
    private storage: Storage
  ) {
  }

  ngOnInit() {
    this.storage.get('hajjNumber').then((hajjNumber) => {
      this.hajjNumber = hajjNumber;
      this.registrationService.getHajjData(hajjNumber).subscribe(res => {
        this.hajjData = res;
        console.log(this.hajjData);
        this.loading = false;
      })
    });

    this.fcm.getToken().then(token=>{
      this.deviceTokenId = token;
    });

    this.storage.get('lang').then((lang) => {
      this.lang = lang;
    });
    this.landingService.navigation.next('hajj-information');
  }

  registerHajj() {
    this.hajjData.deviceTokenId = this.deviceTokenId;
    this.hajjData.language = this.lang;
    this.registrationService.RegisterHajj(this.hajjData,this.hajjNumber).subscribe(res => {
      this.storage.set('hajjNumberFinal',this.hajjNumber);
      this.navCtrl.push(HomePage);
    })
  }

  getAgeGroup(index) {
    let groups = {
      0: '0 - 10',
      1: '10 - 20',
      2: '20 - 30',
      3: '30 - 40',
      4: '40 - 50',
      5: '50 - 60',
      6: '60+'
    }
    return groups[index];
  }

  getNationality(index) {
    return nationalities[index];
  }

}
