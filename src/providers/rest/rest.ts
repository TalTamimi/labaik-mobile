import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log('RestProvider been initialised');
  }

  getChannels() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/channels').subscribe(channles => {
        resolve(channles);
      }, err => {
        console.log(err);
      });
    });
  }

  request(data: any){
    let headers = new HttpHeaders();
    let uuid = this.guid();
    console.log(uuid);
    headers = headers.append('Content-Type', 'application/json');
   return this.http.put('https://hajj-hackathon1.firebaseio.com/reports/' + uuid + '.json', data, {headers: headers, responseType: 'text'});
  }

  guid() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  // getUsers() {
  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl+'/users').subscribe(data => {
  //       resolve(data);
  //     },
  //     err => {
  //       console.log(err);
  //     });
  //   });
  // }

}
