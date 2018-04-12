import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MessagerService {

    // private messageSource = new BehaviorSubject<string>("../src/assets/img/xrystal17.jpg");

    private messageSource = new BehaviorSubject<string>("assets/img/xrystal");
    currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
      this.messageSource.next(message);
    }

}


// import { Injectable } from '@angular/core';
//
// @Injectable()
// export class DataService {
//
//   private messageSource = new BehaviorSubject<string>("default message");
//   currentMessage = this.messageSource.asObservable();
//
//   constructor() { }
//
//   changeMessage(message: string) {
//     this.messageSource.next(message)
//   }
//
// }
