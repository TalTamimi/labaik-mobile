import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class LandingService {
  public navigation = new Subject();
  hajjNumberSubject = new Subject();
  constructor() {

  }

  notifyHajjNumber(hajjNumber){
    this.hajjNumberSubject.next(hajjNumber);
  }

}
