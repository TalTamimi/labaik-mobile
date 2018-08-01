import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class LandingService {
  public navigation = new Subject();

  constructor() {

  }
}
