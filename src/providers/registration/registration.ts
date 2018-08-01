import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RegistrationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegistrationProvider {

  constructor(public http: HttpClient) {
  }

  RegisterHajj(data: any, id:any){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
   return this.http.post('https://hajj-hackathon1.firebaseio.com/users/'+ id +'.json',data,{headers: headers, responseType: 'text'});
  }

  getHajjData(id: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get('https://hajj-hackathon1.firebaseio.com/users/' + id +'.json',{headers: headers});
  }
}
